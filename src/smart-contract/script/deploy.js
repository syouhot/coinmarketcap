const { ethers, getNamedAccounts } = require("hardhat");

const main = async () => {
    const { firstAccount } = await getNamedAccounts();
    console.log("firstAccount.address",firstAccount);
    
    const dogeFactory = await ethers.getContractFactory("DogeCoin");
    const dogeContract = await dogeFactory.deploy(firstAccount)
    await dogeContract.deployed();
    console.log("Dogecoin deployed to:", dogeContract.target);

};

(async () => { 
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})()