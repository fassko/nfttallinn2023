import { upgrades } from "hardhat";

const main = async () => {
  const proxyAddress = process.env.CONTRACT_ADDRESS as string;
  console.log(await upgrades.erc1967.getImplementationAddress(proxyAddress));
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
