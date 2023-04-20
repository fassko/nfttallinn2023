import { ethers, upgrades } from "hardhat";

import { NFTTallinn, NFTTallinn__factory } from "../typechain-types";

async function main() {
  const NFTTallinn = await ethers.getContractFactory("NFTTallinn");
  console.log("\nDeploying NFTTallinn contract");

  const nftTallinn = await NFTTallinn.deploy("NFT Tallinn 2023", "NFTTLL23");
  await nftTallinn.deployed();
  console.log("🚀 NFTTallinn deployed");
  console.log("🕸 NFTTallinn contract address:", nftTallinn.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
