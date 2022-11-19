require("dotenv").config();
const WURZ = artifacts.require("./WURZ.sol");
const GovernorAlpha = artifacts.require("./GovernorAlpha.sol");
const Timelock = artifacts.require("./Timelock.sol");

const { address } = require("../config");

module.exports = async function (deployer) {
  await deployer.deploy(
    WURZ,
    "0x0000000000000000000000000000000000000000",
    address.urz
  );
  const wurz = await WURZ.deployed();

  await deployer.deploy(GovernorAlpha, WURZ.address, process.env.ADMIN);
  const governorAlpha = await GovernorAlpha.deployed();

  await deployer.deploy(Timelock, GovernorAlpha.address, `${86400 * 4}`); //4 days
  const timelock = await Timelock.deployed();

  await wurz.setGovernorAlpha(GovernorAlpha.address);

  // bug, cant execute this function, need to go to tronscan
  await governorAlpha.setTimelock(timelock.address);
};
