import { ethers, upgrades } from "hardhat";

import { NFTTallinnU, NFTTallinnU__factory } from "../typechain-types";

async function main() {
  const NFTTallinnU = (await ethers.getContractFactory(
    "NFTTallinnU"
  )) as NFTTallinnU__factory;
  console.log("\nDeploying NFTTallinn contract");

  const nftTallinnU = (await upgrades.deployProxy(NFTTallinnU, [
    "NFT Tallinn 2023",
    "NFTTLL23",
  ])) as NFTTallinnU;
  await nftTallinnU.deployed();
  console.log("🚀 NFTTallinn deployed");
  console.log("🕸 NFTTallinn contract address:", nftTallinnU.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
