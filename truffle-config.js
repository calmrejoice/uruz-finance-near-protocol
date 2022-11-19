require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC;
const numberOfAddresses = 3;

const setupWallet = (url) => {
  const wallet = new HDWalletProvider({
    mnemonic: MNEMONIC,
    providerOrUrl: url,
    numberOfAddresses,
  });
  return wallet;
};

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    aurora: {
      provider: () => setupWallet("https://testnet.aurora.dev"),
      network_id: "1313161555",
      gas: 100000000,
      gasLimit: 100000000000,
      from: "0xDB033CE019a09dFCBc2f96d66Ba8a40a51F14Bc6",
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.12", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 10000,
        },
        evmVersion: "byzantium",
      },
    },
  },
  plugins: ["truffle-contract-size"],
};
