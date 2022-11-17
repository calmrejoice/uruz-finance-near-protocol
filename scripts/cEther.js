const { ethers } = require("ethers");
const { address } = require("../config");
const { abi } = require("../build/contracts/CEther.json");
const { signer } = require("../utils/ethersUtils");

const getContract = async () => {
  const contract = new ethers.Contract(address.ueth, abi, signer);
  console.log(contract.functions);
  return contract;
};

const getParams = async () => {
  const contract = await getContract();
  const result = await contract.comptroller();
  console.log(result);
};

const main = async () => {
  await getParams();
};

main();
