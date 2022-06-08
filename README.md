## Getting Started

### Prerequisites
```shell
npm i npm@latest -g
npm init -y
```

### Installation
```shell
npm i solc@0.8.7-fixed
npm i ethers
npm i dotenv
npm i typescript ts-node
```

## Resources
Part 5 of the FreeCodeCamp Solidity & Javascript Blockchain Course
* https://github.com/PatrickAlphaC/ethers-simple-storage-fcc/tree/typescript

Ganache:
* https://trufflesuite.com/ganache/

Ethers:
* https://docs.ethers.io/v5/getting-started/

Solidity by Example: Import:
* https://solidity-by-example.org/import

Alchemy:
* https://dashboard.alchemyapi.io/

Verify and Publish:
* https://rinkeby.etherscan.io/

# Usage

## Compile
```shell
solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol
```
Results:
* SimpleStorage_sol_SimpleStorage.abi
* SimpleStorage_sol_SimpleStorage.bin

## Deploy

### Deploy to Ganache
PRIVATE_KEY and RPC_URL grab from Ganache App

### Deploy to Rinkeby
PRIVATE_KEY grab from Metamask  
RPC_URL grab from Alchemy

```shell
ts-node deploy.ts
```
Result:

```text 
Deploying, please wait...
Contract address: 0x577d66c7f91A8fA8FEB1c06D19a8BCb002807D06
Checking contract
Current Favorite Number: 0
New Favorite Number: 7
```
