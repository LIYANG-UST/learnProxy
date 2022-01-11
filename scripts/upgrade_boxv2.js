const { ethers, upgrades } = require("hardhat");

const PROXY = "0x5A05FCB8eaeF5Ba1c4d5FAe78Cd83e98f5BAa1eA";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  await upgrades.upgradeProxy(PROXY, BoxV2);

  console.log("upgrade success");
}

main();
