// const ethers = require('ethers')
// const fs = require('fs')
// require('dotenv').config()

import {ethers} from 'ethers'
import * as fs from 'fs'
import 'dotenv/config'

const RPC_URL = process.env.RPC_URL || ''
const PRIVATE_KEY = process.env.PRIVATE_KEY || ''

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider)
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8')
  const bin = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin', 'utf8')
  const contractFactory = new ethers.ContractFactory(abi, bin, wallet)

  console.log('Deploying, please wait...')
  const contract = await contractFactory.deploy()
  await contract.deployTransaction.wait(1)
  console.log('Contract address:', contract.address)

  console.log('Checking contract')
  let currentFavoriteNumber = await contract.retrieve()
  console.log(`Current Favorite Number: ${currentFavoriteNumber}`)
  let transactionResponse = await contract.store(7)
  await transactionResponse.wait()
  currentFavoriteNumber = await contract.retrieve()
  console.log(`New Favorite Number: ${currentFavoriteNumber}`)
}

try {
  main()
} catch (e) {
  //--------------------------
  console.log('Error', (e as Error).message)
  //--------------------------
}
