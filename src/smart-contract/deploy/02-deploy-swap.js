
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { firstAccount } = await getNamedAccounts();
    const swap = await deploy("Swap", {
        from: firstAccount,
        args: [],
        log: true,
    });
    console.log("swap deployed to:", swap.address);
};
module.exports.tags = ['Swap', "all"];