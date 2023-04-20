import { ethers, upgrades } from "hardhat";

import { NFTTallinnU, NFTTallinnU__factory } from "../typechain-types";

async function main() {
  const NFTTallinnU = (await ethers.getContractFactory(
    "NFTTallinnU"
  )) as NFTTallinnU__factory;
  console.log("Upgrading NFTTallinn");

  const nftTallinnAddress = process.env.CONTRACT_ADDRESS as string;

  const upgradedContract = (await upgrades.upgradeProxy(
    nftTallinnAddress,
    NFTTallinnU
  )) as NFTTallinnU;
  console.log("Upgraded NFTTallinn");
  console.log("Contract address:", upgradedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
