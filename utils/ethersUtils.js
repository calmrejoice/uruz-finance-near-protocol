require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://testnet.aurora.dev"
);

const wallet = new ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
const signer = wallet.connect(provider);

module.exports = { provider, signer };
