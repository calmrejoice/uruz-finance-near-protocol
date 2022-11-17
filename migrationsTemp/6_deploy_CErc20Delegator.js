require("dotenv").config();
const { address } = require("../config");
const cErc20Delegator = artifacts.require("./CErc20Delegator.sol");

module.exports = async (deployer) => {
  const tokenConfig = {
    name: "Uruz URZ",
    symbol: "uURZ",
    interestRateModel: address.ethInterestRate,
    exchangeRate: "102516211882138512249446693",
    decimals: 8,
    reserveFactor: (0.15e18).toString(),
    //   priceOracleV1Key: "0x2",
    collateralFactor: (0.75e18).toString(),
    underlyingToken: address.urz,
    delegate: address.uurzDelegate,
  };

  await deployer.deploy(
    cErc20Delegator,
    tokenConfig.underlyingToken,
    address.unitroller,
    tokenConfig.interestRateModel,
    tokenConfig.exchangeRate,
    tokenConfig.name,
    tokenConfig.symbol,
    tokenConfig.decimals,
    process.env.ADMIN,
    process.env.RESERVER_ADMIN,
    tokenConfig.delegate,
    "0x", //Currently Unused
    tokenConfig.reserveFactor
  );
};
