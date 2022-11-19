const { ethers, BigNumber } = require("ethers");
const { address } = require("../config");
const { abi } = require("../build/contracts/Comptroller.json");
const { signer } = require("../utils/ethersUtils");

const getContract = async () => {
  const contract = new ethers.Contract(address.unitroller, abi, signer);
  console.log(contract.functions);
  return contract;
};

const setMaxAssets = async (numOfAssets) => {
  const contract = await getContract();
  const result = await contract._setMaxAssets(numOfAssets);
  console.log(result);
};

const getMaxAssets = async () => {
  const contract = await getContract();
  const result = await contract.maxAssets();
  console.log(result.toString());
};

const setPriceOracle = async (priceOracle) => {
  const contract = await getContract();
  return await contract._setPriceOracle(priceOracle);
};

const getPriceOracle = async () => {
  const contract = await getContract();
  const oracle = await contract.oracle();
  console.log(oracle);
};

const setCloseFactor = async (closeFactor) => {
  const contract = await getContract();
  const result = await contract._setCloseFactor(closeFactor);
  console.log(result);
};

const getCloseFactor = async () => {
  const contract = await getContract();
  const result = await contract.closeFactorMantissa();
  console.log(result.toString());
};

const setLiquidationIncentive = async (liquidationIncentive) => {
  const contract = await getContract();
  const result = await contract._setLiquidationIncentive(liquidationIncentive);
  console.log(result);
};

const getLiquidationIncentive = async () => {
  const contract = await getContract();
  const result = await contract.liquidationIncentiveMantissa();
  console.log(result.toString());
};

const getAllMarkets = async () => {
  const contract = await getContract();
  const markets = await contract.getAllMarkets();
  console.log(markets);
};

const addMarket = async (utokenAddress) => {
  const contract = await getContract();
  const result = await contract._supportMarket(utokenAddress);
  console.log(result);
};

const setCollateralFactor = async (utokenAddress, collateralFactorBN) => {
  const contract = await getContract();
  const result = await contract._setCollateralFactor(
    utokenAddress,
    collateralFactorBN
  );
  console.log(result);
};

const getCollateralFactor = async (utokenAddress) => {
  const contract = await getContract();
  const market = await contract.markets(utokenAddress);
  console.log(market);
  console.log(market.collateralFactorMantissa.toString());
};

const getImplementation = async () => {
  const contract = await getContract();
  const implementation = await contract.comptrollerImplementation();
  console.log(implementation);
};

const main = async () => {
  // // Comptroller Basic Settings
  // await setPriceOracle(address.priceOracleProxy);
  // await getPriceOracle();
  // await setMaxAssets(10);
  // await getMaxAssets();
  // await setLiquidationIncentive("1080000000000000000");
  // await getLiquidationIncentive();
  // await setCloseFactor("500000000000000000");
  // await getCloseFactor();
  // // Additional Comptroller Settings
  // await addMarket(address.uurzDelegator);
  // await getAllMarkets();
  // const collateralFactorBN = (0.5 * 10 ** 18).toString();
  // await setCollateralFactor(address.uurzDelegator, collateralFactorBN);
  // await getCollateralFactor(address.uurzDelegator);
  // await getImplementation();
};

main();
