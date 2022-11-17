const PriceOracleV1 = artifacts.require("./PriceOracleV1.sol");

module.exports = async function (deployer) {
  await deployer.deploy(
    PriceOracleV1,
    process.env.ADMIN,
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000"
  );

  await PriceOracleV1.deployed();
};
