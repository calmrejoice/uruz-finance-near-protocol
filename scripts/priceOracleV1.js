const { ethers } = require("ethers");
const { address } = require("../config");
const { signer } = require("../utils/ethersUtils");
const { abi } = require("../build/contracts/PriceOracleV1.json");

const getContract = () => {
  const contract = new ethers.Contract(address.priceOracle, abi, signer);
  console.log(contract.functions);
  return contract;
};

const setPrice = async (underlyingTokenAddress, price) => {
  const contract = await getContract();
  const result = await contract.setPrice(underlyingTokenAddress, price);
  console.log(result);
};

const getPrice = async (underlyingTokenAddress) => {
  const contract = await getContract();
  const result = await contract.getPrice(underlyingTokenAddress);
  console.log(result.toString());
};

const main = async () => {
  const price = (0.369 * 10 ** 18).toString();
  //   await setPrice(address.urz, price);
  await getPrice(address.urz);
};

main();
