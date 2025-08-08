
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { firstAccount } = await getNamedAccounts();
    const dogeCoin = await deploy("DogeCoin", {
        from: firstAccount,
        args: [firstAccount],
        log: true,
    });
    console.log("dogeCoin deployed to:", dogeCoin.address);
    
    const link = await deploy("Link", {
        from: firstAccount,
        args: [firstAccount],
        log: true,
    });
    console.log("Link deployed to:", link.address);

    const dai = await deploy("Dai", {
        from: firstAccount,
        args: [firstAccount],
        log: true,
    });
    console.log("dai deployed to:", dai.address);
    
    const usdc = await deploy("Usdc", {
        from: firstAccount,
        args: [firstAccount],
        log: true,
    });
    console.log("Usdc deployed to:", usdc.address);
};
module.exports.tags = ['Dogecoin', "all"];