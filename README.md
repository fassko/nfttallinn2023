# NFT Tallinn 2023 workshop

## Effective Smart Contract Management

In this workshop, we will go over smart contract code management. Topics we will cover:

- [Remix](https://remix.ethereum.org/) tool
- [Hardhat Ethereum development environment](https://hardhat.org/) with [VSCode](https://code.visualstudio.com/)
- Make smart contracts upgradeable with [OpenZeppelin upgrades](https://docs.openzeppelin.com/upgrades) plugins
- Verifying smart contract implementation on the blockchain
- Use [OpenZeppelin Defender](https://www.openzeppelin.com/defender) to propose smart contract upgrades and approve them within a team
- Talk about multi-signatory wallets to avoid the single point of failure with crypto wallets

1. Deploy smart contract to the blockchain and verify it

Deploy:

```sh
npx hardhat run scripts/deploy.ts --network mumbai
```

Verify smart contract and passing the constructor parameters:

```sh
npx hardhat verify 0xa4d8fd29c3b3715e4Ade9F89fbd76D57e2839ea7 --network mumbai 'NFT Tallinn 2023' 'NFTTLL23'
```

2. Deploy the proxy contract

```sh
npx hardhat run scripts/deploy_proxy.ts --network mumbai
```

3. Change `CONTRACT_ADDRESS` in `.env` file to the proxy address

4. Get the smart contract implementation

```sh
npx hardhat run scripts/current-implementation.ts --network mumbai
```

5. Verify the implemtnation contract

```sh
npx hardhat verify --network mumbai 0x69350e1C6702ebb88a47A19f24AaA856A95e85D3
```

5. Add new function in the smart contract

6. Upgrade the implementation

```sh
npx hardhat run scripts/upgrade.ts --network mumbai
```

7. Get the current implementation

```sh
npx hardhat run scripts/current-implementation.ts --network mumbai
```

8. Verify the current implementation

```sh
npx hardhat verify --network mumbai npx hardhat verify --network mumbai 0x6bfd02B1c1A8C62717Ba1826eaeb6d9F27ECceC2
```

9. Upgrade contract to OpenZeppelin defender

- add contract in OpenZeppelin defender
- comment out the function
- execute `npx hardhat run scripts/propose_upgrade.ts --network mumbai`
- approve and execute proposal in OpenZeppelin Defender
- get the current implementation `npx hardhat run scripts/current-implementation.ts --network mumbai`
- verify the implementation `npx hardhat verify 0x69350e1C6702ebb88a47A19f24AaA856A95e85D3 --network mumbai`

10. Use multi signatory wallet

Use a wallet like [Safe](https://safe.global/) to avoid the bus factor and avoid a single point of failure. It also allows to collect signatures when upgrading a contract. Let's say you want everyone to vote for mainnet deployment, and only then is an upgrade executed.
