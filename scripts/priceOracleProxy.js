const { ethers } = require("ethers");
const { address } = require("../config");
const { signer } = require("../utils/ethersUtils");
const { abi } = require("../build/contracts/PriceOracleProxy.json");

const getContract = () => {
  const contract = new ethers.Contract(address.priceOracleProxy, abi, signer);
  console.log(contract.functions);
  return contract;
};

const getPriceOracleV1 = async () => {
  const contract = await getContract();
  const result = await contract.v1PriceOracle();
  console.log(result);
};

const getPrice = async (utokenAddress) => {
  const contract = await getContract();
  const result = await contract.getUnderlyingPrice(utokenAddress);
  console.log(result.toString());
};

const main = async () => {
  await getPrice(address.uurzDelegator);
  // await getPriceOracleV1();
};

main();
