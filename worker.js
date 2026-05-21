import { ethers } from "ethers";

// ABI definitions restricted strictly to the view methods required for data harvesting
const ABI = [
  {
    "inputs": [],
    "name": "productCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "products",
    "outputs": [
      { "internalType": "uint256", "name": "id", "type": "uint256" },
      { "internalType": "address", "name": "admin", "type": "address" },
      { "internalType": "string", "name": "itemCode", "type": "string" },
      { "internalType": "string", "name": "itemName", "type": "string" },
      { "internalType": "uint256", "name": "retailPrice", "type": "uint256" },
      { "internalType": "uint256", "name": "stockPrice", "type": "uint256" },
      { "internalType": "string", "name": "colour", "type": "string" },
      { "internalType": "uint256", "name": "quantityAvailable", "type": "uint256" },
      { "internalType": "uint256", "name": "totalSold", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_pId", "type": "uint256" }],
    "name": "getProductImages",
    "outputs": [{ "internalType": "string[]", "name": "", "type": "string[]" }],
    "stateMutability": "view",
    "type": "function"
  }
];

export default {
  async fetch(request, env, ctx) {
    // Standard CORS headers allowing secure browser queries
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Connect to ledger infrastructure using your configurations
      const rpcUrl = "https://ethereum-sepolia-rpc.publicnode.com";
      const contractAddress = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

      const provider = new ethers.JsonRpcProvider(rpcUrl);
      const contract = new ethers.Contract(contractAddress, ABI, provider);

      const count = await contract.productCount(); 
      let allProducts = [];

      for (let i = 1; i <= Number(count); i++) {
        const p = await contract.products(i);
        const images = await contract.getProductImages(i);
        
        if (Number(p.quantityAvailable) > 0) {
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

      // Perform Fisher-Yates shuffle directly inside the cloud node
      for (let i = allProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
      }

      return new Response(JSON.stringify({ success: true, products: allProducts }), {
        status: 200,
        headers: corsHeaders
      });

    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: corsHeaders
      });
    }
  }
};
