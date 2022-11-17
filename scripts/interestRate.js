const { ethers } = require("ethers");
const { address } = require("../config");
const { abi } = require("../build/contracts/JumpRateModelV2.json");
const { signer } = require("../utils/ethersUtils");

const getContract = async () => {
  const contract = new ethers.Contract(address.ethInterestRate, abi, signer);
  console.log(contract.functions);
  return contract;
};

const getParams = async () => {
  const contract = await getContract();
  const result = await contract.baseRatePerBlock();
  console.log(result.toString());
};

const main = async () => {
  await getParams();
};

main();
