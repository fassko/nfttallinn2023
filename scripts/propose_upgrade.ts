/* eslint-disable no-console */
import { ethers, defender } from "hardhat";

async function main() {
  const proxyAddress = process.env.CONTRACT_ADDRESS as string;
  const NFTTallinnU = await ethers.getContractFactory("NFTTallinnU");

  console.log("Preparing proposal to upgrade contract");

  try {
    const proposal = await defender.proposeUpgrade(proxyAddress, NFTTallinnU, {
      timeout: 0,
    });

    console.log("Upgrade proposal created at:", proposal.url);
    console.log(proposal.url);
  } catch (error) {
    console.log(error);
    console.log("fail");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
