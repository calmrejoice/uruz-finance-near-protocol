const { address } = require("../config");
const PriceOracleProxy = artifacts.require("./PriceOracleProxy.sol");

module.exports = async function (deployer) {
  await deployer.deploy(
    PriceOracleProxy,
    process.env.ADMIN,
    address.priceOracle,
    address.ueth,
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000"
  );
  await PriceOracleProxy.deployed();
};
