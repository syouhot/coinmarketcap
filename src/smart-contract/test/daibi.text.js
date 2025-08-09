const { ethers, deployments, getNamedAccounts } = require("hardhat");
const { expect, assert } = require("chai");

describe("daibi", async function () {
    let firstAccount,secondAccount,secondSigner, dai, dogecoin, swap
    beforeEach(async function () {
        firstAccount = (await getNamedAccounts()).firstAccount
        secondAccount = (await getNamedAccounts()).secondAccount
        secondSigner = await ethers.getSigner(secondAccount);
        await deployments.fixture(["all"])
        dai = await ethers.getContractAt("Dai", (await deployments.get("Dai")).address)
        dogecoin = await ethers.getContractAt("DogeCoin", (await deployments.get("DogeCoin")).address)
        swap = await ethers.getContractAt("Swap", (await deployments.get("Swap")).address)

    })
    describe("init", async function () {
        it("dai is ok", async function () {
            const tx = await dai.mint(secondAccount,ethers.parseEther("10"))
            const receipt= await tx.wait()
            assert.equal(await dai.balanceOf(secondAccount), ethers.parseEther("10"))
        });
        it("swap is ok",async function(){
            const tx = await dai.mint(secondAccount,ethers.parseEther("10"))
            const receipt= await tx.wait()
            const tx1 = await dai.mint(firstAccount,ethers.parseEther("1000"))
            await tx1.wait()
            const tx2 = await dogecoin.mint(firstAccount,ethers.parseEther("1000"))
            await tx2.wait()

            //添加流动性
            await dai.approve(swap.target, ethers.parseEther("100"));
            await dogecoin.approve(swap.target, ethers.parseEther("100"));
            await swap.addLiquidity(
                dai.target,
                dogecoin.target,
                ethers.parseEther("100"),
                ethers.parseEther("100")
            );
            
            const txApprove = await dai.connect(secondSigner).approve(swap.target,ethers.parseEther("2"))
            const approveReceipt = await txApprove.wait()
            
            const stx = await swap.connect(secondSigner).swap(dai.target,dogecoin.target,ethers.parseEther("2"))
            const sreceipt= await stx.wait()
            assert.equal(await dogecoin.balanceOf(secondAccount), ethers.parseEther("2"))
            assert.equal(await dai.balanceOf(secondAccount), ethers.parseEther("8"))
            assert.equal(await swap.getBalance(dai.target), ethers.parseEther("102"))
            assert.equal(await swap.getBalance(dogecoin.target), ethers.parseEther("98"))
        })
    })

});