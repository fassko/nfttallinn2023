import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@openzeppelin/hardhat-defender";

import Dotenv from "dotenv";

Dotenv.config();

const {
  POLYGONSCAN_API_KEY,
  MUMBAI_API_URL,
  MUMBAI_PRIVATE_KEY,
  LOCAL_PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      url: "http://127.0.0.1:8545/",
      accounts: [`0x${LOCAL_PRIVATE_KEY}`],
    },
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`],
      timeout: 9000000,
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY ?? "",
    },
  },
  defender: {
    apiKey: process.env.DEFENDER_TEAM_API_KEY ?? "",
    apiSecret: process.env.DEFENDER_TEAM_API_SECRET_KEY ?? "",
  },
};

export default config;
