const { ethers } = require("ethers");
const { address } = require("../config");
const { abi } = require("../build/contracts/Comptroller.json");
const { signer } = require("../utils/ethersUtils");

const getContract = async () => {
  const contract = new ethers.Contract(address.unitroller, abi, signer);
  console.log(contract.functions);
  return contract;
};

const getMarkets = async () => {
  const contract = await getContract();
  const markets = await contract.comptrollerImplementation();
  console.log(markets);
};

const main = async () => {
  await getMarkets();
};

main();
