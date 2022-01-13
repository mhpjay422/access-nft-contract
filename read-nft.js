/* eslint-disable @next/next/no-img-element */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { abi } from "./lazy-lion-abi.js"
// TODO - Research how to get ABI of contract. It is currently hard coded

const contractAddress = "0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0"
const tokenId = 1
// TODO - How to access a specific token

export default function GetNFT() {

  async function NFTs() {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(contractAddress, abi, provider);
    const tokenUri = await tokenContract.tokenURI(tokenId);
    // Is accessing tokenURI like this universal among contracts?
    const meta = await axios.get(tokenUri);

    return (
      <div>Hello World</div>
    );
  }
}
