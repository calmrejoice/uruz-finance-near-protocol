require("dotenv").config();
const config = require("../config");
const cErc20Delegator = artifacts.require("./CErc20Delegator.sol");

module.exports = async (deployer) => {
  const tokenConfig = {
    name: "Uruz USDT",
    symbol: "uUSDT",
    interestRateModel: "TCvVDLi9YfuvcMNM8T4WogxDiPkXsEDJVa",
    exchangeRate: "101623559860794", // 102516211882138512249446693
    decimals: 8,
    reserveFactor: (0.05 * 10 ** 18).toString(),
    //   priceOracleV1Key: "0x2",
    collateralFactor: (0.75 * 10 ** 18).toString(),
    underlyingToken: "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj",
    delegate: "TB171o3UoyWxwnLABM7yDKtVeFSDyAKTt2",
  };

  const result = await deployer.deploy(
    cErc20Delegator,
    tokenConfig.underlyingToken,
    config.address.unitroller,
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

  await console.log(result);

  // const cErc20DelegateDeployer = cErc20Delegate.map(async (v, i) => {
  //   await deployer.deploy(
  //     cErc20Delegator,
  //     underlyingTokens[i],
  //     unitroller,
  //     tokenConfig[i].interestRateModel,
  //     tokenConfig[i].exchangeRate,
  //     tokenConfig[i].name,
  //     tokenConfig[i].symbol,
  //     tokenConfig[i].decimals,
  //     process.env.ADMIN,
  //     process.env.RESERVER_ADMIN,
  //     v,
  //     "0x", //Currently Unused
  //     tokenConfig[i].reserveFactor
  //   );
  // });

  // await Promise.all(cErc20DelegateDeployer);
};
