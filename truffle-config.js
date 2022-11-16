require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const utils = require("web3-utils");
const MNEMONIC = process.env.MNEMONIC;
const numberOfAddresses = 3;

const setupWallet = (url) => {
  return new HDWalletProvider({
    mnemonic: MNEMONIC,
    providerOrUrl: url,
    numberOfAddresses,
  });
};

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    auroraTestnet: {
      provider: () => setupWallet("https://testnet.aurora.dev"),
      network_id: "1313161555",
      gas: 10000000,
      from: setupWallet("https://testnet.aurora.dev").addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
    aurora: {
      provider: () => setupWallet("https://mainnet.aurora.dev/"),
      network_id: "1313161554",
      gas: 10000000,
      from: setupWallet("https://mainnet.aurora.dev/").addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
    goerli: {
      provider: () =>
        setupWallet(`https://goerli.infura.io/v3/${process.env.INFURA_TOKEN}`),
      network_id: "5",
      from: "0x6A33382de9f73B846878a57500d055B981229ac4",
      gas: 3 * 1000000,
      gasPrice: utils.toWei("8", "gwei"),
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};
