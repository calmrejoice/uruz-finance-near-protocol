require("dotenv").config();
const { address } = require("../config");
const cEther = artifacts.require("./CEther.sol");

module.exports = async (deployer) => {
  const cEtherDetails = {
    interestRateModel: address.ethInterestRate,
    exchangeRate: "102516211882138512249446693",
    name: "Uruz ETH",
    symbol: "uETH",
    decimals: 8,
    reserveFactor: (0.1e18).toString(),
  };

  await deployer.deploy(
    cEther,
    address.unitroller,
    cEtherDetails.interestRateModel,
    cEtherDetails.exchangeRate,
    cEtherDetails.name,
    cEtherDetails.symbol,
    cEtherDetails.decimals,
    process.env.ADMIN,
    process.env.RESERVER_ADMIN,
    cEtherDetails.reserveFactor
  );
};
