/**
 * VERCEL SERVERLESS BACKEND COMPONENT
 * Location: /api/marketplace.js
 * Securely communicates with the blockchain via Vercel Environment Variables.
 */

import { ethers } from 'ethers'; // Vercel handles modern npm dependencies natively

// 1. ABI Configuration
const ABI = [
  {
    "inputs": [],
    "name": "productCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "products",
    "outputs": [
      {"internalType": "uint256", "name": "id", "type": "uint256"},
      {"internalType": "address", "name": "admin", "type": "address"},
      {"internalType": "string", "name": "itemCode", "type": "string"},
      {"internalType": "string", "name": "itemName", "type": "string"},
      {"internalType": "uint256", "name": "retailPrice", "type": "uint256"},
      {"internalType": "uint256", "name": "stockPrice", "type": "uint256"},
      {"internalType": "string", "name": "colour", "type": "string"},
      {"internalType": "uint256", "name": "quantityAvailable", "type": "uint256"},
      {"internalType": "uint256", "name": "totalSold", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "_pId", "type": "uint256"}],
    "name": "getProductImages",
    "outputs": [{"internalType": "string[]", "name": "", "type": "string[]"}],
    "stateMutability": "view",
    "type": "function"
  }
];

export default async function handler(request, response) {
    // Enable CORS for frontend asset connectivity
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    try {
        // Vercel extracts environment configurations straight from process.env
        const rpcProviderUrl = process.env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com"; 
        const contractAddress = process.env.CONTRACT_ADDRESS || "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

        // Initialize connection securely on the server side
        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
        const contract = new ethers.Contract(contractAddress, ABI, provider);

        // Data harvesting
        const count = await contract.productCount(); 
        let allProducts = [];

        for (let i = 1; i <= count; i++) {
            const p = await contract.products(i);
            const images = await contract.getProductImages(i);
            
            if (p.quantityAvailable > 0) {
                allProducts.push({
                    id: p.id.toString(),
                    name: p.itemName,
                    code: p.itemCode,
                    price: p.retailPrice.toString(),
                    stockPrice: p.stockPrice.toString(),
                    images: images, 
                    stock: p.quantityAvailable.toString()
                });
            }
        }

        // Randomization processing (Fisher-Yates)
        for (let i = allProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
        }

        // Return processed inventory data back to the client UI
        return response.status(200).json({ success: true, data: allProducts });

    } catch (err) {
        console.error("Vercel Serverless Function Exception:", err);
        return response.status(500).json({ success: false, error: "Ledger syncing lost." });
    }
}
