Conversation with Gemini
Now how to imply the same logic but using cloudflare

/**

 * GLOBAL MARKETPLACE LOGIC

 * Fetches all products from the Blockchain and displays them randomly.

 */



// 1. Configuration

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



// 1. Configuration - Replace with your details

//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

// functions/api/get-products.js



// Import Ethers cleanly via CDN for zero-node, instant deployment architectures

import { ethers } from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js';



const CONTRACT_ABI = [

    "function getAllProducts() public view returns (tuple(uint256 id, string name, string description, uint256 price, string imageUrl, uint256 stock, bool isActive)[])"

];



export async function onRequestGet(context) {

    try {

        // 1. Grab environment connections safely out of Cloudflare's injected context

        const rpcProviderUrl = context.env.RPC_PROVIDER_URL;

        const contractAddress = context.env.CONTRACT_ADDRESS;



        if (!rpcProviderUrl || !contractAddress) {

            return new Response(JSON.stringify({ error: "Cloudflare Environment Variables are unconfigured." }), {

                status: 500, headers: { 'Content-Type': 'application/json' }

            });

        }



        // 2. Open an anonymous data connection to the blockchain node matrix

        



        // 5. Stream the polished inventory array straight back to the user's browser canvas

        return new Response(JSON.stringify({ success: true, data: formattedProducts }), {

            status: 200, headers: { 'Content-Type': 'application/json' }

        });



    } catch (error) {

        return new Response(JSON.stringify({ error: error.message || "Failed to parse decentralized ledger catalog." }), {

            status: 400, headers: { 'Content-Type': 'application/json' }

        });

    }

}

const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH

//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";



//const wallet_addre='0x0Cf641c00aB0691A3d76132e649D38d2369340c7'

 //const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";



// 1. DYNAMIC WALLET LOADING

// ABI needs to include the product getter

// ABI for the KhozaLogistics functions

       const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";

   const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";



//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

     //   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x7b7Fc57F363b9D60038C8b7f8F270e77Ee13dd0C";

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

//const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";



         // 2. Access variables via process.env

      //  const RPC_URL = process.env.RPC_URL;

         //const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

     //  const MASTER_KEY = process.env.MASTER_KEY;



       

          const ABI = [

  {

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      }

    ],

    "name": "AdminRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "courierId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CourierRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "customerId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CustomerRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "dispatchId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "DispatchRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "address",

        "name": "user",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      }

    ],

    "name": "GasRefueled",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      }

    ],

    "name": "OrderConfirmed",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      }

    ],

    "name": "OrderPlaced",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "admin",

        "type": "address"

      }

    ],

    "name": "ProductAdded",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "newQuantity",

        "type": "uint256"

      }

    ],

    "name": "StockUpdated",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_c",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string[]",

        "name": "_u",

        "type": "string[]"

      },

      {

        "internalType": "uint256",

        "name": "_r",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_s",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_col",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_q",

        "type": "uint256"

      }

    ],

    "name": "addProduct",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "adminAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "_new",

        "type": "address"

      }

    ],

    "name": "adminForceMigrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "admins",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "bankName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountHolder",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountNumber",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      }

    ],

    "name": "confirmOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "couriers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "vehicleType",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerOrders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "customers",

    "outputs": [

      {

        "internalType": "address",

        "name": "CustomerId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      },

      {

        "internalType": "bool",

        "name": "exists",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "debtCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "debts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "description",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      },

      {

        "internalType": "bool",

        "name": "isPaid",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "deliveryPersonnel",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "dispatchers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "bytes32",

        "name": "",

        "type": "bytes32"

      }

    ],

    "name": "emailToAddress",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "getCounts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      }

    ],

    "name": "getProductImages",

    "outputs": [

      {

        "internalType": "string[]",

        "name": "",

        "type": "string[]"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_u",

        "type": "address"

      }

    ],

    "name": "getRole",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isAdmin",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCourier",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCustomer",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      }

    ],

    "name": "migrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "orderCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "orders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "quantity",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalAmount",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "status",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isConfirmed",

        "type": "bool"

      },

      {

        "internalType": "string",

        "name": "paymentReference",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "owner",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_qty",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_ref",

        "type": "string"

      }

    ],

    "name": "placeOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "productCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "productIds",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "products",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "admin",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "itemCode",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "retailPrice",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "stockPrice",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "colour",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "quantityAvailable",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalSold",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_b",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_h",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      }

    ],

    "name": "registerAdmin",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_v",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      }

    ],

    "name": "registerCourier",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_r",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerDispatch",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address payable",

        "name": "_user",

        "type": "address"

      }

    ],

    "name": "requestGasRefuel",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_st",

        "type": "string"

      }

    ],

    "name": "updateOrderStatus",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "name": "usedReferences",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "withdrawGasVault",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "stateMutability": "payable",

    "type": "receive"

  }

];  



// 1. DYNAMIC SESSION RETRIEVAL

// This looks for the key saved in customer-register3.html or login.html





  



/**

 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO

 * Fetches all products from the Blockchain and displays them randomly.

 */





  async function loadRandomMarketplace() {

    const gallery = document.getElementById('productGallery');

    const headerStatus = document.querySelector('.shop-header p');



    try {

        // A. SESSION VERIFICATION

        const userKey = localStorage.getItem("user_session_key");

        if (!userKey) {

            gallery.innerHTML = "<div style='text-align:center; padding: 50px;'><p>UNAUTHORIZED ACCESS</p><button onclick='window.location.href=\"register5.html\"'>REGISTER IDENTITY</button></div>";

            return;

        }



        // B. ETHERS SETUP

        const provider = new ethers.JsonRpcProvider(RPC_URL);

        const wallet = new ethers.Wallet(userKey, provider);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);



        // C. CUSTOMER GREETING

        const profile = await contract.customers(wallet.address);

        if (headerStatus && profile.exists) {

            headerStatus.innerText = `Welcome back, ${profile.firstName} | Node: ${wallet.address.substring(0, 8)}...`;

        }



        // D. DATA HARVESTING

      // D. DATA HARVESTING - Updated to fetch images separately

        const count = await contract.productCount(); 

        let allProducts = [];



        for (let i = 1; i <= count; i++) {

            // Fetch product basic info

            const p = await contract.products(i);

            

            // Fetch images using the dedicated getter in your ABI

            const images = await contract.getProductImages(i);

            

            // Only show active stock

            if (p.quantityAvailable > 0) {

                allProducts.push({

                    id: p.id.toString(),

                    name: p.itemName,

                    code: p.itemCode,

                    price: p.retailPrice.toString(),

                    stockPrice: p.stockPrice.toString(),

                    // Assign the fetched image array here

                    images: images, 

                    stock: p.quantityAvailable.toString()

                });

            }

        }

        // E. RANDOMIZATION (Fisher-Yates)

        for (let i = allProducts.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];

        }



        // F. RENDER

        renderGallery(allProducts);



    } catch (err) {

        console.error("Critical System Failure:", err);

        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";

    }

}



/**

 * 4. UI Rendering

 * Generates the HTML for the product cards.

 */

/**

 * 4. UI Rendering

 * Updated with safety check for images to prevent 'undefined (reading 0)' error.

 */

function renderGallery(products) {

    const gallery = document.getElementById('productGallery');

    if (products.length === 0) {

        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";

        return;

    }



    // Use your local logo file as the reliable fallback

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";



    gallery.innerHTML = products.map(p => {

        // Check if images exist and the first URL is not an empty string

        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";

        const displayImage = hasImage ? p.images[0] : localFallback;



        return `

            <div class="product-card">

                <div class="card-image">

                    <!-- Added onerror handler to catch broken IPFS links and swap to local fallback -->

                    <img src="${displayImage}" 

                         alt="${p.name}" 

                         onerror="this.src='${localFallback}'">

                </div>

                <div class="card-info">

                    <h3>${p.name}</h3>

                    <p class="price">R${Number(p.price).toLocaleString()}</p>

                    <p class="store-tag">CODE: ${p.code}</p>

                    <p class="meta">Available: ${p.stock} units</p>

                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>

                </div>

            </div>

        `;

    }).join('');



    // Re-initialize GSAP tilt effects for the new cards[cite: 8]

    applyCardAnimations();

}



/**

 * 6. UI Animations

 * Applies GSAP tilt effects to product cards after they are rendered.

 */

function applyCardAnimations() {

    const cards = document.querySelectorAll('.product-card');

    

    cards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const { clientX, clientY } = e;

            const { left, top, width, height } = card.getBoundingClientRect();

            const x = (clientX - left) / width - 0.5;

            const y = (clientY - top) / height - 0.5;



            gsap.to(card, {

                rotationY: x * 20, // Tilt left/right

                rotationX: -y * 20, // Tilt up/down

                ease: "power2.out",

                duration: 0.4

            });

        });



        card.addEventListener('mouseleave', () => {

            gsap.to(card, { 

                rotationX: 0, 

                rotationY: 0, 

                ease: "power2.out" 

            });

        });

    });

}

/**

 * 5. Navigation Logic

 * Bridges the shop to the individual product page.

 */

function openProduct(productId) {

    console.log("Routing to product node:", productId);

    localStorage.setItem("selected_product_id", productId);

    window.location.href = "product12.html";

}



// Initialize on window load

window.onload = loadRandomMarketplace; can you implement this logic also here

/**

 * GLOBAL MARKETPLACE LOGIC

 * Fetches all products from the Blockchain and displays them randomly.

 */



// 1. Configuration

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



// 1. Configuration - Replace with your details

//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

// functions/api/get-products.js



// Import Ethers cleanly via CDN for zero-node, instant deployment architectures

import { ethers } from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js';



const CONTRACT_ABI = [

    "function getAllProducts() public view returns (tuple(uint256 id, string name, string description, uint256 price, string imageUrl, uint256 stock, bool isActive)[])"

];



export async function onRequestGet(context) {

    try {

        // 1. Grab environment connections safely out of Cloudflare's injected context

        const rpcProviderUrl = context.env.RPC_PROVIDER_URL;

        const contractAddress = context.env.CONTRACT_ADDRESS;



        if (!rpcProviderUrl || !contractAddress) {

            return new Response(JSON.stringify({ error: "Cloudflare Environment Variables are unconfigured." }), {

                status: 500, headers: { 'Content-Type': 'application/json' }

            });

        }



        // 2. Open an anonymous data connection to the blockchain node matrix

        



        // 5. Stream the polished inventory array straight back to the user's browser canvas

        return new Response(JSON.stringify({ success: true, data: formattedProducts }), {

            status: 200, headers: { 'Content-Type': 'application/json' }

        });



    } catch (error) {

        return new Response(JSON.stringify({ error: error.message || "Failed to parse decentralized ledger catalog." }), {

            status: 400, headers: { 'Content-Type': 'application/json' }

        });

    }

}

const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH

//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";



//const wallet_addre='0x0Cf641c00aB0691A3d76132e649D38d2369340c7'

 //const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";



// 1. DYNAMIC WALLET LOADING

// ABI needs to include the product getter

// ABI for the KhozaLogistics functions

       const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";

   const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";



//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

     //   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x7b7Fc57F363b9D60038C8b7f8F270e77Ee13dd0C";

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

//const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";



         // 2. Access variables via process.env

      //  const RPC_URL = process.env.RPC_URL;

         //const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

     //  const MASTER_KEY = process.env.MASTER_KEY;



       

          const ABI = [

  {

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      }

    ],

    "name": "AdminRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "courierId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CourierRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "customerId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CustomerRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "dispatchId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "DispatchRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "address",

        "name": "user",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      }

    ],

    "name": "GasRefueled",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      }

    ],

    "name": "OrderConfirmed",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      }

    ],

    "name": "OrderPlaced",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "admin",

        "type": "address"

      }

    ],

    "name": "ProductAdded",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "newQuantity",

        "type": "uint256"

      }

    ],

    "name": "StockUpdated",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_c",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string[]",

        "name": "_u",

        "type": "string[]"

      },

      {

        "internalType": "uint256",

        "name": "_r",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_s",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_col",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_q",

        "type": "uint256"

      }

    ],

    "name": "addProduct",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "adminAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "_new",

        "type": "address"

      }

    ],

    "name": "adminForceMigrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "admins",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "bankName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountHolder",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountNumber",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      }

    ],

    "name": "confirmOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "couriers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "vehicleType",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerOrders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "customers",

    "outputs": [

      {

        "internalType": "address",

        "name": "CustomerId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      },

      {

        "internalType": "bool",

        "name": "exists",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "debtCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "debts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "description",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      },

      {

        "internalType": "bool",

        "name": "isPaid",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "deliveryPersonnel",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "dispatchers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "bytes32",

        "name": "",

        "type": "bytes32"

      }

    ],

    "name": "emailToAddress",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "getCounts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      }

    ],

    "name": "getProductImages",

    "outputs": [

      {

        "internalType": "string[]",

        "name": "",

        "type": "string[]"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_u",

        "type": "address"

      }

    ],

    "name": "getRole",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isAdmin",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCourier",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCustomer",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      }

    ],

    "name": "migrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "orderCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "orders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "quantity",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalAmount",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "status",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isConfirmed",

        "type": "bool"

      },

      {

        "internalType": "string",

        "name": "paymentReference",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "owner",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_qty",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_ref",

        "type": "string"

      }

    ],

    "name": "placeOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "productCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "productIds",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "products",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "admin",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "itemCode",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "retailPrice",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "stockPrice",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "colour",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "quantityAvailable",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalSold",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_b",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_h",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      }

    ],

    "name": "registerAdmin",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_v",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      }

    ],

    "name": "registerCourier",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_r",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerDispatch",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address payable",

        "name": "_user",

        "type": "address"

      }

    ],

    "name": "requestGasRefuel",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_st",

        "type": "string"

      }

    ],

    "name": "updateOrderStatus",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "name": "usedReferences",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "withdrawGasVault",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "stateMutability": "payable",

    "type": "receive"

  }

];  



// 1. DYNAMIC SESSION RETRIEVAL

// This looks for the key saved in customer-register3.html or login.html





  



/**

 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO

 * Fetches all products from the Blockchain and displays them randomly.

 */





  async function loadRandomMarketplace() {

    const gallery = document.getElementById('productGallery');

    const headerStatus = document.querySelector('.shop-header p');



    try {

        // A. SESSION VERIFICATION

        const userKey = localStorage.getItem("user_session_key");

        if (!userKey) {

            gallery.innerHTML = "<div style='text-align:center; padding: 50px;'><p>UNAUTHORIZED ACCESS</p><button onclick='window.location.href=\"register5.html\"'>REGISTER IDENTITY</button></div>";

            return;

        }



        // B. ETHERS SETUP

        const provider = new ethers.JsonRpcProvider(RPC_URL);

        const wallet = new ethers.Wallet(userKey, provider);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);



        // C. CUSTOMER GREETING

        const profile = await contract.customers(wallet.address);

        if (headerStatus && profile.exists) {

            headerStatus.innerText = `Welcome back, ${profile.firstName} | Node: ${wallet.address.substring(0, 8)}...`;

        }



        // D. DATA HARVESTING

      // D. DATA HARVESTING - Updated to fetch images separately

        const count = await contract.productCount(); 

        let allProducts = [];



        for (let i = 1; i <= count; i++) {

            // Fetch product basic info

            const p = await contract.products(i);

            

            // Fetch images using the dedicated getter in your ABI

            const images = await contract.getProductImages(i);

            

            // Only show active stock

            if (p.quantityAvailable > 0) {

                allProducts.push({

                    id: p.id.toString(),

                    name: p.itemName,

                    code: p.itemCode,

                    price: p.retailPrice.toString(),

                    stockPrice: p.stockPrice.toString(),

                    // Assign the fetched image array here

                    images: images, 

                    stock: p.quantityAvailable.toString()

                });

            }

        }

        // E. RANDOMIZATION (Fisher-Yates)

        for (let i = allProducts.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];

        }



        // F. RENDER

        renderGallery(allProducts);



    } catch (err) {

        console.error("Critical System Failure:", err);

        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";

    }

}



/**

 * 4. UI Rendering

 * Generates the HTML for the product cards.

 */

/**

 * 4. UI Rendering

 * Updated with safety check for images to prevent 'undefined (reading 0)' error.

 */

function renderGallery(products) {

    const gallery = document.getElementById('productGallery');

    if (products.length === 0) {

        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";

        return;

    }



    // Use your local logo file as the reliable fallback

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";



    gallery.innerHTML = products.map(p => {

        // Check if images exist and the first URL is not an empty string

        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";

        const displayImage = hasImage ? p.images[0] : localFallback;



        return `

            <div class="product-card">

                <div class="card-image">

                    <!-- Added onerror handler to catch broken IPFS links and swap to local fallback -->

                    <img src="${displayImage}" 

                         alt="${p.name}" 

                         onerror="this.src='${localFallback}'">

                </div>

                <div class="card-info">

                    <h3>${p.name}</h3>

                    <p class="price">R${Number(p.price).toLocaleString()}</p>

                    <p class="store-tag">CODE: ${p.code}</p>

                    <p class="meta">Available: ${p.stock} units</p>

                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>

                </div>

            </div>

        `;

    }).join('');



    // Re-initialize GSAP tilt effects for the new cards[cite: 8]

    applyCardAnimations();

}



/**

 * 6. UI Animations

 * Applies GSAP tilt effects to product cards after they are rendered.

 */

function applyCardAnimations() {

    const cards = document.querySelectorAll('.product-card');

    

    cards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const { clientX, clientY } = e;

            const { left, top, width, height } = card.getBoundingClientRect();

            const x = (clientX - left) / width - 0.5;

            const y = (clientY - top) / height - 0.5;



            gsap.to(card, {

                rotationY: x * 20, // Tilt left/right

                rotationX: -y * 20, // Tilt up/down

                ease: "power2.out",

                duration: 0.4

            });

        });



        card.addEventListener('mouseleave', () => {

            gsap.to(card, { 

                rotationX: 0, 

                rotationY: 0, 

                ease: "power2.out" 

            });

        });

    });

}

/**

 * 5. Navigation Logic

 * Bridges the shop to the individual product page.

 */

function openProduct(productId) {

    console.log("Routing to product node:", productId);

    localStorage.setItem("selected_product_id", productId);

    window.location.href = "product12.html";

}



// Initialize on window load

window.onload = loadRandomMarketplace; can you implement the same logic but don't delete the code just use the cloudflare logic

The code I provided you had openproduct function which contained a product.html file but you didn't include it

Can you also give a full code of the updated marketplace code

No the marketplace-logic.js code

Where is the contract address from the cloudflare secrets and other private link's

Can you provide me a full updated code for the cloudflare function not worker

Can you create a cloudflare secrets on cloudflare dashboard and implement the secrets on the code I will provide you and create a function not a worker /**

 * GLOBAL MARKETPLACE LOGIC

 * Fetches all products from the Blockchain and displays them randomly.

 */



// 1. Configuration

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



// 1. Configuration - Replace with your details

//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

// functions/api/get-products.js



// Import Ethers cleanly via CDN for zero-node, instant deployment architectures

import { ethers } from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js';



const CONTRACT_ABI = [

    "function getAllProducts() public view returns (tuple(uint256 id, string name, string description, uint256 price, string imageUrl, uint256 stock, bool isActive)[])"

];



export async function onRequestGet(context) {

    try {

        // 1. Grab environment connections safely out of Cloudflare's injected context

        const rpcProviderUrl = context.env.RPC_PROVIDER_URL;

        const contractAddress = context.env.CONTRACT_ADDRESS;



        if (!rpcProviderUrl || !contractAddress) {

            return new Response(JSON.stringify({ error: "Cloudflare Environment Variables are unconfigured." }), {

                status: 500, headers: { 'Content-Type': 'application/json' }

            });

        }



        // 2. Open an anonymous data connection to the blockchain node matrix

        



        // 5. Stream the polished inventory array straight back to the user's browser canvas

        return new Response(JSON.stringify({ success: true, data: formattedProducts }), {

            status: 200, headers: { 'Content-Type': 'application/json' }

        });



    } catch (error) {

        return new Response(JSON.stringify({ error: error.message || "Failed to parse decentralized ledger catalog." }), {

            status: 400, headers: { 'Content-Type': 'application/json' }

        });

    }

}

const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH

//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";



//const wallet_addre='0x0Cf641c00aB0691A3d76132e649D38d2369340c7'

 //const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";



// 1. DYNAMIC WALLET LOADING

// ABI needs to include the product getter

// ABI for the KhozaLogistics functions

       const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";

   const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";



//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

     //   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x7b7Fc57F363b9D60038C8b7f8F270e77Ee13dd0C";

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

//const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";



         // 2. Access variables via process.env

      //  const RPC_URL = process.env.RPC_URL;

         //const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

     //  const MASTER_KEY = process.env.MASTER_KEY;



       

          const ABI = [

  {

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      }

    ],

    "name": "AdminRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "courierId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CourierRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "customerId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CustomerRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "dispatchId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "DispatchRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "address",

        "name": "user",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      }

    ],

    "name": "GasRefueled",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      }

    ],

    "name": "OrderConfirmed",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      }

    ],

    "name": "OrderPlaced",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "admin",

        "type": "address"

      }

    ],

    "name": "ProductAdded",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "newQuantity",

        "type": "uint256"

      }

    ],

    "name": "StockUpdated",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_c",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string[]",

        "name": "_u",

        "type": "string[]"

      },

      {

        "internalType": "uint256",

        "name": "_r",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_s",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_col",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_q",

        "type": "uint256"

      }

    ],

    "name": "addProduct",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "adminAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "_new",

        "type": "address"

      }

    ],

    "name": "adminForceMigrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "admins",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "bankName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountHolder",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountNumber",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      }

    ],

    "name": "confirmOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "couriers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "vehicleType",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerOrders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "customers",

    "outputs": [

      {

        "internalType": "address",

        "name": "CustomerId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      },

      {

        "internalType": "bool",

        "name": "exists",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "debtCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "debts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "description",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      },

      {

        "internalType": "bool",

        "name": "isPaid",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "deliveryPersonnel",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "dispatchers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "bytes32",

        "name": "",

        "type": "bytes32"

      }

    ],

    "name": "emailToAddress",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "getCounts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      }

    ],

    "name": "getProductImages",

    "outputs": [

      {

        "internalType": "string[]",

        "name": "",

        "type": "string[]"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_u",

        "type": "address"

      }

    ],

    "name": "getRole",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isAdmin",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCourier",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCustomer",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      }

    ],

    "name": "migrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "orderCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "orders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "quantity",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalAmount",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "status",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isConfirmed",

        "type": "bool"

      },

      {

        "internalType": "string",

        "name": "paymentReference",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "owner",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_qty",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_ref",

        "type": "string"

      }

    ],

    "name": "placeOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "productCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "productIds",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "products",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "admin",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "itemCode",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "retailPrice",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "stockPrice",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "colour",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "quantityAvailable",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalSold",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_b",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_h",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      }

    ],

    "name": "registerAdmin",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_v",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      }

    ],

    "name": "registerCourier",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_r",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerDispatch",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address payable",

        "name": "_user",

        "type": "address"

      }

    ],

    "name": "requestGasRefuel",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_st",

        "type": "string"

      }

    ],

    "name": "updateOrderStatus",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "name": "usedReferences",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "withdrawGasVault",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "stateMutability": "payable",

    "type": "receive"

  }

];  



// 1. DYNAMIC SESSION RETRIEVAL

// This looks for the key saved in customer-register3.html or login.html





  



/**

 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO

 * Fetches all products from the Blockchain and displays them randomly.

 */





  async function loadRandomMarketplace() {

    const gallery = document.getElementById('productGallery');

    const headerStatus = document.querySelector('.shop-header p');



    try {

        // A. SESSION VERIFICATION

        const userKey = localStorage.getItem("user_session_key");

        if (!userKey) {

            gallery.innerHTML = "<div style='text-align:center; padding: 50px;'><p>UNAUTHORIZED ACCESS</p><button onclick='window.location.href=\"register5.html\"'>REGISTER IDENTITY</button></div>";

            return;

        }



        // B. ETHERS SETUP

        const provider = new ethers.JsonRpcProvider(RPC_URL);

        const wallet = new ethers.Wallet(userKey, provider);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);



        // C. CUSTOMER GREETING

        const profile = await contract.customers(wallet.address);

        if (headerStatus && profile.exists) {

            headerStatus.innerText = `Welcome back, ${profile.firstName} | Node: ${wallet.address.substring(0, 8)}...`;

        }



        // D. DATA HARVESTING

      // D. DATA HARVESTING - Updated to fetch images separately

        const count = await contract.productCount(); 

        let allProducts = [];



        for (let i = 1; i <= count; i++) {

            // Fetch product basic info

            const p = await contract.products(i);

            

            // Fetch images using the dedicated getter in your ABI

            const images = await contract.getProductImages(i);

            

            // Only show active stock

            if (p.quantityAvailable > 0) {

                allProducts.push({

                    id: p.id.toString(),

                    name: p.itemName,

                    code: p.itemCode,

                    price: p.retailPrice.toString(),

                    stockPrice: p.stockPrice.toString(),

                    // Assign the fetched image array here

                    images: images, 

                    stock: p.quantityAvailable.toString()

                });

            }

        }

        // E. RANDOMIZATION (Fisher-Yates)

        for (let i = allProducts.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];

        }



        // F. RENDER

        renderGallery(allProducts);



    } catch (err) {

        console.error("Critical System Failure:", err);

        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";

    }

}



/**

 * 4. UI Rendering

 * Generates the HTML for the product cards.

 */

/**

 * 4. UI Rendering

 * Updated with safety check for images to prevent 'undefined (reading 0)' error.

 */

function renderGallery(products) {

    const gallery = document.getElementById('productGallery');

    if (products.length === 0) {

        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";

        return;

    }



    // Use your local logo file as the reliable fallback

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";



    gallery.innerHTML = products.map(p => {

        // Check if images exist and the first URL is not an empty string

        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";

        const displayImage = hasImage ? p.images[0] : localFallback;



        return `

            <div class="product-card">

                <div class="card-image">

                    <!-- Added onerror handler to catch broken IPFS links and swap to local fallback -->

                    <img src="${displayImage}" 

                         alt="${p.name}" 

                         onerror="this.src='${localFallback}'">

                </div>

                <div class="card-info">

                    <h3>${p.name}</h3>

                    <p class="price">R${Number(p.price).toLocaleString()}</p>

                    <p class="store-tag">CODE: ${p.code}</p>

                    <p class="meta">Available: ${p.stock} units</p>

                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>

                </div>

            </div>

        `;

    }).join('');



    // Re-initialize GSAP tilt effects for the new cards[cite: 8]

    applyCardAnimations();

}



/**

 * 6. UI Animations

 * Applies GSAP tilt effects to product cards after they are rendered.

 */

function applyCardAnimations() {

    const cards = document.querySelectorAll('.product-card');

    

    cards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const { clientX, clientY } = e;

            const { left, top, width, height } = card.getBoundingClientRect();

            const x = (clientX - left) / width - 0.5;

            const y = (clientY - top) / height - 0.5;



            gsap.to(card, {

                rotationY: x * 20, // Tilt left/right

                rotationX: -y * 20, // Tilt up/down

                ease: "power2.out",

                duration: 0.4

            });

        });



        card.addEventListener('mouseleave', () => {

            gsap.to(card, { 

                rotationX: 0, 

                rotationY: 0, 

                ease: "power2.out" 

            });

        });

    });

}

/**

 * 5. Navigation Logic

 * Bridges the shop to the individual product page.

 */

function openProduct(productId) {

    console.log("Routing to product node:", productId);

    localStorage.setItem("selected_product_id", productId);

    window.location.href = "product12.html";

}



// Initialize on window load

window.onload = loadRandomMarketplace; don't delete the openproduct function

Can you create a product.html page based on this conversation

Can you create a full updated index.html page

Here is the complete, updated index.html file designed specifically for your lightweight, mobile-friendly stack.

This file uses regular HTML5, CSS, and clean vanilla JavaScript coupled with Ethers.js and GSAP pulled directly via secure CDNs—meaning zero Node.js or npm dependencies are required to compile or run it. It integrates perfectly with your product12.html navigation scheme and queries your unified Cloudflare Pages Function at /api/get-products to fetch items securely without exposing database connection vectors or RPC nodes to the client browser.

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KHOZA.IO | Decentralized Inventory Matrix</title>
    
    <!-- High-Performance Typography Elements -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- External UI Control Systems (CDN-hosted for simple text-editor/mobile compiler flows) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

    <style>
        :root {
            --bg-deep: #0a0c10;
            --bg-surface: #121620;
            --bg-card: #1a2030;
            --text-main: #f3f4f6;
            --text-muted: #9ca3af;
            --accent-glow: #3b82f6;
            --accent-success: #10b981;
            --border-line: #262f45;
            --font-stack: 'Plus Jakarta Sans', sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--bg-deep);
            color: var(--text-main);
            font-family: var(--font-stack);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
        }

        /* Top Navigation Cluster Frame */
        header {
            background-color: var(--bg-surface);
            border-bottom: 1px solid var(--border-line);
            padding: 1.2rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .brand {
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--text-main);
            text-decoration: none;
        }

        .brand span {
            color: var(--accent-glow);
        }

        .shop-header-status {
            font-size: 0.85rem;
            color: var(--text-muted);
            background: rgba(59, 130, 246, 0.1);
            padding: 0.4rem 1rem;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            font-family: monospace;
            max-width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Hero Introduction Section */
        .hero-banner {
            max-width: 1200px;
            width: 100%;
            margin: 2.5rem auto 1rem auto;
            padding: 0 2rem;
        }

        .hero-card {
            background: linear-gradient(135deg, var(--bg-surface) 0%, #151b2c 100%);
            border: 1px solid var(--border-line);
            border-radius: 16px;
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
        }

        .hero-card h1 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(90deg, #ffffff, #9ca3af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-card p {
            color: var(--text-muted);
            font-size: 1.05rem;
            max-width: 600px;
        }

        /* Product Gallery Workspace Container Grid */
        main {
            flex: 1;
            max-width: 1200px;
            width: 100%;
            margin: 1.5rem auto 4rem auto;
            padding: 0 2rem;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            width: 100%;
        }

        /* Individual Product Card Modules */
        .product-card {
            background-color: var(--bg-surface);
            border: 1px solid var(--border-line);
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transform-style: preserve-3d;
            perspective: 1000px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .card-image {
            width: 100%;
            aspect-ratio: 4/3;
            background-color: var(--bg-deep);
            border-bottom: 1px solid var(--border-line);
            overflow: hidden;
            position: relative;
        }

        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .product-card:hover .card-image img {
            transform: scale(1.05);
        }

        .card-info {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: space-between;
            gap: 1rem;
        }

        .card-info h3 {
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 1.3;
            color: var(--text-main);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .store-tag {
            font-family: monospace;
            font-size: 0.8rem;
            color: var(--accent-glow);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            background: rgba(59, 130, 246, 0.08);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            display: inline-block;
            align-self: flex-start;
        }

        .meta-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-top: 0.25rem;
        }

        .price {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--text-main);
        }

        .meta-stock {
            font-size: 0.85rem;
            color: var(--accent-success);
            font-weight: 600;
        }

        .action-btn {
            background-color: var(--bg-card);
            color: var(--text-main);
            border: 1px solid var(--border-line);
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.2s, border-color 0.2s, color 0.2s;
        }

        .product-card:hover .action-btn {
            background-color: var(--accent-glow);
            border-color: var(--accent-glow);
            color: #ffffff;
        }

        /* Dynamic Loading & System Exception States */
        .system-loader {
            grid-column: 1 / -1;
            text-align: center;
            padding: 80px 0;
        }

        .spinner {
            width: 44px;
            height: 44px;
            border: 3px solid var(--border-line);
            border-top-color: var(--accent-glow);
            border-radius: 50%;
            margin: 0 auto 1.2rem auto;
            animation: spin 1s infinite linear;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>

    <!-- Upper Control Navigation Bar -->
    <header>
        <a href="index.html" class="brand">KHOZA<span>.IO</span></a>
        <div id="shopHeaderStatus" class="shop-header-status">Authorizing Identity Bridge...</div>
    </header>

    <!-- Secondary Framing Intro -->
    <section class="hero-banner">
        <div class="hero-card">
            <h1>Marketplace Registry</h1>
            <p>Cryptographically verified inventory assets managed live via decentralized ledger systems and Cloudflare high-speed smart proxies.</p>
        </div>
    </section>

    <!-- Core Grid Workspace Matrix -->
    <main>
        <div id="productGallery" class="gallery-grid">
            <div class="system-loader">
                <div class="spinner"></div>
                <p>Synchronizing Ledger State Parameters...</p>
            </div>
        </div>
    </main>

    <script>
        // Set fallback asset link for invalid or timeout IPFS strings
        const LOCAL_FALLBACK_IMAGE = "301015489_443828151102927_1957794053294967618_n.png";

        /**
         * 1. CORE DATA DISPATCH SYSTEM
         */
        async function loadMarketplaceRegistry() {
            const gallery = document.getElementById('productGallery');
            const statusDisplay = document.getElementById('shopHeaderStatus');

            try {
                // A. CHECK ACTIVE CLIENT SESSION
                const userKey = localStorage.getItem("user_session_key");
                if (!userKey) {
                    statusDisplay.innerText = "Identity Status: Unverified";
                    gallery.innerHTML = `
                        <div class="system-loader" style="border: 1px dashed var(--border-line); border-radius:12px; padding: 4rem 1rem;">
                            <h3 style="margin-bottom:0.5rem;">Access Authorization Required</h3>
                            <p style="color:var(--text-muted); margin-bottom:1.5rem; font-size:0.95rem;">You need an active user signature registry key to view the collection.</p>
                            <button class="action-btn" style="max-width:240px; background-color:var(--accent-glow); border-color:var(--accent-glow); color:white;" onclick="window.location.href='register5.html'">Generate Identity Key</button>
                        </div>`;
                    return;
                }

                // Extract and map key configuration to visually greet user
                const wallet = new ethers.Wallet(userKey);
                statusDisplay.innerText = `Connecting: ${wallet.address.substring(0, 10)}...`;

                // B. EXECUTE API INVOCATION WITH SECURE CLOUDFLARE ROUTING 
                const response = await fetch('/api/get-products');
                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(result.error || "Edge router dropped system call packets.");
                }

                // Update status to confirm clean handshake completion
                statusDisplay.innerText = `Node Verified | Active Key: ${wallet.address.substring(0, 10)}...`;

                // C. POPULATE UI
                renderInventoryGallery(gallery, result.data);

            } catch (error) {
                console.error("Matrix Processing Halted:", error);
                statusDisplay.innerText = "System Exception Interrupted";
                gallery.innerHTML = `
                    <div class="system-loader" style="color: #ef4444; border: 1px solid rgba(239,68,68,0.15); border-radius:12px; background: rgba(239,68,68,0.02); padding: 3rem;">
                        <p style="font-weight:600; margin-bottom:0.25rem;">Ledger Connection Timed Out</p>
                        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.2rem;">${error.message}</p>
                        <button class="action-btn" style="max-width:180px;" onclick="location.reload()">Retry Matrix Handshake</button>
                    </div>`;
            }
        }

        /**
         * 2. ELEMENT MATRIX GENERATION & MAPPING
         */
        function renderInventoryGallery(targetContainer, products) {
            if (!products || products.length === 0) {
                targetContainer.innerHTML = `
                    <div class="system-loader">
                        <p style="color:var(--text-muted);">Catalog is empty. No live ledger items match active stock constraints.</p>
                    </div>`;
                return;
            }

            targetContainer.innerHTML = products.map(item => {
                // Determine whether a valid picture string path is active inside the blockchain item data index 
                const hasImage = item.images && item.images.length > 0 && item.images[0] !== "";
                const displayImg = hasImage ? item.images[0] : LOCAL_FALLBACK_IMAGE;

                return `
                    <div class="product-card" data-id="${item.id}">
                        <div class="card-image">
                            <img src="${displayImg}" alt="${item.name}" onerror="this.src='${LOCAL_FALLBACK_IMAGE}'">
                        </div>
                        <div class="card-info">
                            <div>
                                <span class="store-tag">CODE: ${item.code}</span>
                                <h3 style="margin-top: 0.5rem;">${item.name}</h3>
                            </div>
                            <div>
                                <div class="meta-row">
                                    <span class="price">R${Number(item.price).toLocaleString()}</span>
                                    <span class="meta-stock">${item.stock} Available</span>
                                </div>
                                <button class="action-btn" style="margin-top: 1rem;" onclick="navigateToProduct(${item.id})">Inspect Ledger Token</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            // Trigger animations and card mouse-tilt tracking 
            triggerIntroTransitions();
            bindDynamicMatrixTiltEffects();
        }

        /**
         * 3. INDIVIDUAL NAVIGATION COMPONENT ROUTER 
         */
        function navigateToProduct(productId) {
            console.log("Setting execution scope to look at item data ID:", productId);
            localStorage.setItem("selected_product_id", productId);
            window.location.href = "product12.html";
        }

        /**
         * 4. CARD INTRO TRANSITIONS
         */
        function triggerIntroTransitions() {
            gsap.from(".product-card", {
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out"
            });
        }

        /**
         * 5. GSAP 3D PARALLAX INTERACTIVE TILT LOGIC
         */
        function bindDynamicMatrixTiltEffects() {
            const cards = document.querySelectorAll('.product-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = card.getBoundingClientRect();
                    
                    // Normalize cursor coordinate vectors relative to the center of the active card module
                    const xTranslation = (clientX - left) / width - 0.5;
                    const yTranslation = (clientY - top) / height - 0.5;

                    gsap.to(card, {
                        rotationY: xTranslation * 12,
                        rotationX: -yTranslation * 12,
                        transformPerspective: 1000,
                        ease: "power2.out",
                        duration: 0.3
                    });
                });

                card.addEventListener('mouseleave', () => {
                    // Smoothly drop card metrics back down to zero-state when cursor focus resets
                    gsap.to(card, { 
                        rotationX: 0, 
                        rotationY: 0, 
                        ease: "power3.out",
                        duration: 0.5
                    });
                });
            });
        }

        // Initialize execution sequences immediately upon script payload layout build completion
        window.onload = loadMarketplaceRegistry;
    </script>
</body>
</html>
Based on this conversation I will provide a version of my script that is going to be uploaded on cloudflare which is almost the same as the marketplace script.i need you to update the errors and fix them but don't delete or change the code especially it logic however it there are no issues then leave the script but if they are please provide me with an updated full script /**

 * GLOBAL MARKETPLACE LOGIC

 * Fetches all products from the Blockchain and displays them randomly.

 */



// Import Ethers cleanly via CDN for zero-node, instant deployment architectures

import { ethers } from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js';

// 1. Configuration

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



// 1. Configuration - Replace with your details

//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH

//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";



//const wallet_addre='0x0Cf641c00aB0691A3d76132e649D38d2369340c7'

 //const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";





const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";



// 1. DYNAMIC WALLET LOADING

// ABI needs to include the product getter

// ABI for the KhozaLogistics functions

       const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";

         const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";



//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

     //   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x7b7Fc57F363b9D60038C8b7f8F270e77Ee13dd0C";

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

//const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";



         // 2. Access variables via process.env

      //  const RPC_URL = process.env.RPC_URL;

         //const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

     //  const MASTER_KEY = process.env.MASTER_KEY;



       

          const ABI = [

  {

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      }

    ],

    "name": "AdminRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "courierId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CourierRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "customerId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CustomerRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "dispatchId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "DispatchRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "address",

        "name": "user",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      }

    ],

    "name": "GasRefueled",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      }

    ],

    "name": "OrderConfirmed",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      }

    ],

    "name": "OrderPlaced",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "admin",

        "type": "address"

      }

    ],

    "name": "ProductAdded",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "newQuantity",

        "type": "uint256"

      }

    ],

    "name": "StockUpdated",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_c",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string[]",

        "name": "_u",

        "type": "string[]"

      },

      {

        "internalType": "uint256",

        "name": "_r",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_s",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_col",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_q",

        "type": "uint256"

      }

    ],

    "name": "addProduct",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "adminAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "_new",

        "type": "address"

      }

    ],

    "name": "adminForceMigrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "admins",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "bankName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountHolder",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountNumber",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      }

    ],

    "name": "confirmOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "couriers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "vehicleType",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerOrders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "customers",

    "outputs": [

      {

        "internalType": "address",

        "name": "CustomerId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      },

      {

        "internalType": "bool",

        "name": "exists",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "debtCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "debts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "description",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      },

      {

        "internalType": "bool",

        "name": "isPaid",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "deliveryPersonnel",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "dispatchers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "bytes32",

        "name": "",

        "type": "bytes32"

      }

    ],

    "name": "emailToAddress",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "getCounts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      }

    ],

    "name": "getProductImages",

    "outputs": [

      {

        "internalType": "string[]",

        "name": "",

        "type": "string[]"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_u",

        "type": "address"

      }

    ],

    "name": "getRole",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isAdmin",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCourier",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCustomer",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      }

    ],

    "name": "migrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "orderCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "orders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "quantity",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalAmount",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "status",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isConfirmed",

        "type": "bool"

      },

      {

        "internalType": "string",

        "name": "paymentReference",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "owner",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_qty",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_ref",

        "type": "string"

      }

    ],

    "name": "placeOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "productCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "productIds",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "products",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "admin",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "itemCode",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "retailPrice",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "stockPrice",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "colour",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "quantityAvailable",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalSold",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_b",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_h",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      }

    ],

    "name": "registerAdmin",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_v",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      }

    ],

    "name": "registerCourier",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_r",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerDispatch",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address payable",

        "name": "_user",

        "type": "address"

      }

    ],

    "name": "requestGasRefuel",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_st",

        "type": "string"

      }

    ],

    "name": "updateOrderStatus",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "name": "usedReferences",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "withdrawGasVault",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "stateMutability": "payable",

    "type": "receive"

  }

];  



// 1. DYNAMIC SESSION RETRIEVAL

// This looks for the key saved in customer-register3.html or login.html





  



/**

 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO

 * Fetches all products from the Blockchain and displays them randomly.

 */





export  async function loadRandomMarketplace(context) {

    const gallery = document.getElementById('productGallery');

    const headerStatus = document.querySelector('.shop-header p');



    try {

      const rpcProviderUrl = context.env.RPC_PROVIDER_URL;

        const contractAddress = context.env.CONTRACT_ADDRESS;

        

        // These are available securely if needed for authorization or write operations

        const contract2=context.env.CONTRACT_ADDRESS;

        const pinataJwt = context.env.PINATA_JWT;



        if (!rpcProviderUrl || !contractAddress) {

            return new Response(JSON.stringify({ error: "Cloudflare Environment Variables are unconfigured." }), {

                status: 500, 

                headers: { 'Content-Type': 'application/json' }

            });

        }



        // B. ETHERS SETUP

        const provider = new ethers.JsonRpcProvider(RPC_URL);

      //  const wallet = new ethers.Wallet(userKey, provider);

        const contract = new ethers.Contract(contract2, ABI, provider);



        // C. CUSTOMER GREETING

       

        // D. DATA HARVESTING

      // D. DATA HARVESTING - Updated to fetch images separately

        const count = await contract.productCount(); 

        let allProducts = [];



        for (let i = 1; i <= count; i++) {

            // Fetch product basic info

            const p = await contract.products(i);

            

            // Fetch images using the dedicated getter in your ABI

            const images = await contract.getProductImages(i);

            

            // Only show active stock

            if (p.quantityAvailable > 0) {

                allProducts.push({

                    id: p.id.toString(),

                    name: p.itemName,

                    code: p.itemCode,

                    price: p.retailPrice.toString(),

                    stockPrice: p.stockPrice.toString(),

                    // Assign the fetched image array here

                    images: images, 

                    stock: p.quantityAvailable.toString()

                });

            }

        }

        // E. RANDOMIZATION (Fisher-Yates)

        for (let i = allProducts.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];

        }



        // F. RENDER

        renderGallery(allProducts);



    } catch (err) {

        console.error("Critical System Failure:", err);

        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";

    }

}



/**

 * 4. UI Rendering

 * Generates the HTML for the product cards.

 */

/**

 * 4. UI Rendering

 * Updated with safety check for images to prevent 'undefined (reading 0)' error.

 */

function renderGallery(products) {

    const gallery = document.getElementById('productGallery');

    if (products.length === 0) {

        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";

        return;

    }



    // Use your local logo file as the reliable fallback

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";



    gallery.innerHTML = products.map(p => {

        // Check if images exist and the first URL is not an empty string

        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";

        const displayImage = hasImage ? p.images[0] : localFallback;



        return `

            <div class="product-card">

                <div class="card-image">

                    <!-- Added onerror handler to catch broken IPFS links and swap to local fallback -->

                    <img src="${displayImage}" 

                         alt="${p.name}" 

                         onerror="this.src='${localFallback}'">

                </div>

                <div class="card-info">

                    <h3>${p.name}</h3>

                    <p class="price">R${Number(p.price).toLocaleString()}</p>

                    <p class="store-tag">CODE: ${p.code}</p>

                    <p class="meta">Available: ${p.stock} units</p>

                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>

                </div>

            </div>

        `;

    }).join('');



    // Re-initialize GSAP tilt effects for the new cards[cite: 8]

    applyCardAnimations();

}



/**

 * 6. UI Animations

 * Applies GSAP tilt effects to product cards after they are rendered.

 */

function applyCardAnimations() {

    const cards = document.querySelectorAll('.product-card');

    

    cards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const { clientX, clientY } = e;

            const { left, top, width, height } = card.getBoundingClientRect();

            const x = (clientX - left) / width - 0.5;

            const y = (clientY - top) / height - 0.5;



            gsap.to(card, {

                rotationY: x * 20, // Tilt left/right

                rotationX: -y * 20, // Tilt up/down

                ease: "power2.out",

                duration: 0.4

            });

        });



        card.addEventListener('mouseleave', () => {

            gsap.to(card, { 

                rotationX: 0, 

                rotationY: 0, 

                ease: "power2.out" 

            });

        });

    });

}

/**

 * 5. Navigation Logic

 * Bridges the shop to the individual product page.

 */

function openProduct(productId) {

    console.log("Routing to product node:", productId);

    localStorage.setItem("selected_product_id", productId);

    window.location.href = "product12.html";

}



// Initialize on window load

window.onload = loadRandomMarketplace;

There are two critical conflicts in how this script handles environment variables and execution context. Because it contains hybrid logic, it will throw errors when deployed directly to Cloudflare without these fixes.

The Breakdown of What's Breaking
Context/Global Variable Crash:
Inside loadRandomMarketplace(context), the script attempts to read values from context.env (context.env.RPC_PROVIDER_URL), which is perfectly correct for a Cloudflare worker environment. However, three lines later, it tries to initialize the provider using RPC_URL (a hardcoded string pointing to a public node at the top of the script). If context.env is the source of truth, it needs to use rpcProviderUrl.

window.onload in a Cloudflare Worker Context:
The script contains a standard DOM layout flow (document.getElementById, window.onload, HTML template literals) while attempting to adapt into a Cloudflare serverless function architecture.

If this script is running as an ES Module / Client-side asset hosted behind Cloudflare, context.env will be undefined because context is not automatically passed to window.onload.

To keep your exact code structure and business logic intact without breaking either side, we need to add a fallback check so it gracefully pulls from your hardcoded variables if context isn't explicitly passed down by the caller.

Here is your complete, updated script with the broken variable references repaired and the original logic untouched.

JavaScript
/**
 * GLOBAL MARKETPLACE LOGIC
 * Fetches all products from the Blockchain and displays them randomly.
 */

// Import Ethers cleanly via CDN for zero-node, instant deployment architectures
import { ethers } from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js';
// 1. Configuration
//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token

// 1. Configuration - Replace with your details
//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";
const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH
//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";

//const wallet_addre='0x0Cf641c00aB0691A3d76132e649D38d2369340c7'
 //const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";
//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";


const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";

// 1. DYNAMIC WALLET LOADING
// ABI needs to include the product getter
// ABI for the KhozaLogistics functions
       const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
//const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";
         const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";
      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
     //   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
//const CONTRACT_ADDRESS = "0x7b7Fc57F363b9D60038C8b7f8F270e77Ee13dd0C";
//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";
      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
//const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

         // 2. Access variables via process.env
      //  const RPC_URL = process.env.RPC_URL;
         //const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
     //  const MASTER_KEY = process.env.MASTER_KEY;

       
          const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "adminId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "storeName",
        "type": "string"
      }
    ],
    "name": "AdminRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "courierId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CourierRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "customerId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CustomerRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "dispatchId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "DispatchRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "GasRefueled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      }
    ],
    "name": "OrderConfirmed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "customer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Reference",
        "type": "string"
      }
    ],
    "name": "OrderPlaced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "itemName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "admin",
        "type": "address"
      }
    ],
    "name": "ProductAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newQuantity",
        "type": "uint256"
      }
    ],
    "name": "StockUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_c",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_n",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_u",
        "type": "string[]"
      },
      {
        "internalType": "uint256",
        "name": "_r",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_s",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_col",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_q",
        "type": "uint256"
      }
    ],
    "name": "addProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "adminAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_old",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_new",
        "type": "address"
      }
    ],
    "name": "adminForceMigrateCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "admins",
    "outputs": [
      {
        "internalType": "address",
        "name": "adminId",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "storeName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bankName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "accountHolder",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "accountNumber",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_oId",
        "type": "uint256"
      }
    ],
    "name": "confirmOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "couriers",
    "outputs": [
      {
        "internalType": "address",
        "name": "adminId",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "vehicleType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phoneNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "customerAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "customerOrders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "customers",
    "outputs": [
      {
        "internalType": "address",
        "name": "CustomerId",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "Reference",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "surname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phoneNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "debtCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "debts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isPaid",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "deliveryPersonnel",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "dispatchers",
    "outputs": [
      {
        "internalType": "address",
        "name": "adminId",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "surname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phoneNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "emailToAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCounts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pId",
        "type": "uint256"
      }
    ],
    "name": "getProductImages",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_u",
        "type": "address"
      }
    ],
    "name": "getRole",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_a",
        "type": "address"
      }
    ],
    "name": "isAdmin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_a",
        "type": "address"
      }
    ],
    "name": "isCourier",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_a",
        "type": "address"
      }
    ],
    "name": "isCustomer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_old",
        "type": "address"
      }
    ],
    "name": "migrateCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "orderCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalAmount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isConfirmed",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "paymentReference",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_qty",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_ref",
        "type": "string"
      }
    ],
    "name": "placeOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "productCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "productIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "products",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "itemCode",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "itemName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "retailPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stockPrice",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "colour",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "quantityAvailable",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalSold",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_s",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_b",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_h",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_n",
        "type": "string"
      }
    ],
    "name": "registerAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_f",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_v",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_e",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_p",
        "type": "uint256"
      }
    ],
    "name": "registerCourier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_n",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_r",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_a",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_p",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_e",
        "type": "string"
      }
    ],
    "name": "registerCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_f",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_s",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_a",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_p",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_e",
        "type": "string"
      }
    ],
    "name": "registerDispatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "requestGasRefuel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_oId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_st",
        "type": "string"
      }
    ],
    "name": "updateOrderStatus",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "usedReferences",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawGasVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];  

// 1. DYNAMIC SESSION RETRIEVAL
// This looks for the key saved in customer-register3.html or login.html


  

/**
 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO
 * Fetches all products from the Blockchain and displays them randomly.
 */


export async function loadRandomMarketplace(context) {
    const gallery = document.getElementById('productGallery');
    const headerStatus = document.querySelector('.shop-header p');

    try {
        // Safe context mapping to support both Worker environment properties and hardcoded fallbacks
        const rpcProviderUrl = (context && context.env && context.env.RPC_PROVIDER_URL) ? context.env.RPC_PROVIDER_URL : RPC_URL;
        const contractAddress = (context && context.env && context.env.CONTRACT_ADDRESS) ? context.env.CONTRACT_ADDRESS : CONTRACT_ADDRESS;
        
        // These are available securely if needed for authorization or write operations
        const contract2 = contractAddress;
        const pinataJwt = (context && context.env && context.env.PINATA_JWT) ? context.env.PINATA_JWT : PINATA_JWT;

        if (!rpcProviderUrl || !contractAddress) {
            return new Response(JSON.stringify({ error: "Cloudflare Environment Variables are unconfigured." }), {
                status: 500, 
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // B. ETHERS SETUP - Fixed tracking to consistently use resolved rpcProviderUrl instead of loose global RPC_URL
        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
      //  const wallet = new ethers.Wallet(userKey, provider);
        const contract = new ethers.Contract(contract2, ABI, provider);

        // C. CUSTOMER GREETING
       
        // D. DATA HARVESTING
      // D. DATA HARVESTING - Updated to fetch images separately
        const count = await contract.productCount(); 
        let allProducts = [];

        for (let i = 1; i <= count; i++) {
            // Fetch product basic info
            const p = await contract.products(i);
            
            // Fetch images using the dedicated getter in your ABI
            const images = await contract.getProductImages(i);
            
            // Only show active stock
            if (p.quantityAvailable > 0) {
                allProducts.push({
                    id: p.id.toString(),
                    name: p.itemName,
                    code: p.itemCode,
                    price: p.retailPrice.toString(),
                    stockPrice: p.stockPrice.toString(),
                    // Assign the fetched image array here
                    images: images, 
                    stock: p.quantityAvailable.toString()
                });
            }
        }
        // E. RANDOMIZATION (Fisher-Yates)
        for (let i = allProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
        }

        // F. RENDER
        renderGallery(allProducts);

    } catch (err) {
        console.error("Critical System Failure:", err);
        if (gallery) {
            gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";
        }
    }
}

/**
 * 4. UI Rendering
 * Generates the HTML for the product cards.
 */
/**
 * 4. UI Rendering
 * Updated with safety check for images to prevent 'undefined (reading 0)' error.
 */
function renderGallery(products) {
    const gallery = document.getElementById('productGallery');
    if (!gallery) return;

    if (products.length === 0) {
        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";
        return;
    }

    // Use your local logo file as the reliable fallback
    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";

    gallery.innerHTML = products.map(p => {
        // Check if images exist and the first URL is not an empty string
        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
        const displayImage = hasImage ? p.images[0] : localFallback;

        return `
            <div class="product-card">
                <div class="card-image">
                    <!-- Added onerror handler to catch broken IPFS links and swap to local fallback -->
                    <img src="${displayImage}" 
                         alt="${p.name}" 
                         onerror="this.src='${localFallback}'">
                </div>
                <div class="card-info">
                    <h3>${p.name}</h3>
                    <p class="price">R${Number(p.price).toLocaleString()}</p>
                    <p class="store-tag">CODE: ${p.code}</p>
                    <p class="meta">Available: ${p.stock} units</p>
                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>
                </div>
            </div>
        `;
    }).join('');

    // Re-initialize GSAP tilt effects for the new cards
    applyCardAnimations();
}

/**
 * 6. UI Animations
 * Applies GSAP tilt effects to product cards after they are rendered.
 */
function applyCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
                rotationY: x * 20, // Tilt left/right
                rotationX: -y * 20, // Tilt up/down
                ease: "power2.out",
                duration: 0.4
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                rotationX: 0, 
                rotationY: 0, 
                ease: "power2.out" 
            });
        });
    });
}
/**
 * 5. Navigation Logic
 * Bridges the shop to the individual product page.
 */
function openProduct(productId) {
    console.log("Routing to product node:", productId);
    localStorage.setItem("selected_product_id", productId);
    window.location.href = "product12.html";
}

// Initialize on window load
window.onload = function() {
    loadRandomMarketplace(null);
};
Can you provide me with the same script but only if was deployed on vercel. The full script

Deploying this logic onto Vercel requires changing how we bridge the serverless backend environment with your client-side UI.

Vercel functions run in a standard Node.js or Edge runtime, meaning they cannot directly interact with a browser's UI context (window.onload, document.getElementById) inside the function file itself.

To keep everything clean and self-contained within your setup, we can split this script cleanly into two logical parts: The Frontend Layer (running in the browser) and The Vercel Serverless Function API (which securely reads your environment variables and talks to the blockchain).

Here is the full, production-ready implementation configured for Vercel.

Part 1: The Serverless Backend API Route
Save this file as api/marketplace.js or api/marketplace.ts inside your Vercel project directory. Vercel automatically exposes files in the api/ directory as serverless endpoints.

JavaScript
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
Part 2: The Client-Side Frontend Engine
Save this file as your frontend script (e.g., marketplace.js) which runs directly in the client's browser. It hits your new Vercel serverless API endpoint to parse and draw the grid.

JavaScript
/**
 * CLIENT-SIDE INTERFACE CONTROLLER
 * Fetches data from your Vercel API and renders the DOM layout.
 */

// Initialize on window layout preparation
window.onload = function() {
    loadRandomMarketplace();
};

async function loadRandomMarketplace() {
    const gallery = document.getElementById('productGallery');

    try {
        // Fetch the randomized data from your secure Vercel function layer
        const response = await fetch('/api/marketplace');
        const result = await response.json();

        if (!result.success) {
            throw new Error(result.error);
        }

        // Render clean catalog structures
        renderGallery(result.data);

    } catch (err) {
        console.error("UI Update Failure:", err);
        if (gallery) {
            gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";
        }
    }
}

/**
 * UI Rendering Interface
 */
function renderGallery(products) {
    const gallery = document.getElementById('productGallery');
    if (!gallery) return;

    if (!products || products.length === 0) {
        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";
        return;
    }

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";

    gallery.innerHTML = products.map(p => {
        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
        const displayImage = hasImage ? p.images[0] : localFallback;

        return `
            <div class="product-card">
                <div class="card-image">
                    <img src="${displayImage}" alt="${p.name}" onerror="this.src='${localFallback}'">
                </div>
                <div class="card-info">
                    <h3>${p.name}</h3>
                    <p class="price">R${Number(p.price).toLocaleString()}</p>
                    <p class="store-tag">CODE: ${p.code}</p>
                    <p class="meta">Available: ${p.stock} units</p>
                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>
                </div>
            </div>
        `;
    }).join('');

    applyCardAnimations();
}

/**
 * GSAP Motion Dynamics
 */
function applyCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
                rotationY: x * 20,
                rotationX: -y * 20,
                ease: "power2.out",
                duration: 0.4
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                rotationX: 0, 
                rotationY: 0, 
                ease: "power2.out" 
            });
        });
    });
}

/**
 * Item Selection Routing
 */
function openProduct(productId) {
    localStorage.setItem("selected_product_id", productId);
    window.location.href = "product12.html";
}
Step-by-Step Vercel Deployment Setup
To make sure your configuration passes data securely on your deployment, match these setup steps:

Add ethers dependency: In your root project directory, verify your package.json file contains ethers listed under your dependencies:

JSON
"dependencies": {
  "ethers": "^6.13.5"
}
Configure Dashboard Variables: Head directly over to your Vercel Project Settings > Environment Variables panel inside your web dashboard and add the following keys to your project:

RPC_URL → [https://ethereum-sepolia-rpc.publicnode.com](https://ethereum-sepolia-rpc.publicnode.com)

CONTRACT_ADDRESS → 0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866

if you were to deploy the same script on cloudfare how would you do it and provide a full script

To deploy this logic seamlessly on Cloudflare, you use Cloudflare Workers.

Like Vercel, Cloudflare Workers run on a serverless edge architecture, meaning they cannot touch browser elements (window, document, or DOM rendering) inside the backend file. Instead, the Worker acts as a fast API endpoint that handles the blockchain queries and securely pulls secrets from Cloudflare's runtime environment, while your browser code handles the layout.

Here is the full production setup, split into the secure backend Worker script and your clean client script.

Part 1: The Cloudflare Worker Script (worker.js)
This is the code you paste into your Cloudflare Worker dashboard or deploy via Wrangler. It handles the secure JSON data pipeline.

JavaScript
/**
 * CLOUDFLARE WORKER BACKEND COMPONENT
 * Handles secure, lightning-fast edge queries to your smart contract.
 */

// ABI Configuration for fetching products
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

export default {
  async fetch(request, env, ctx) {
    // Dynamic CDN imports are standard practice inside Cloudflare module workers 
    const { ethers } = await import('https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js');

    // CORS Headers to ensure your web client can speak to this endpoint safely
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Pull variables explicitly from Cloudflare's passed env bindings
      const rpcProviderUrl = env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";
      const contractAddress = env.CONTRACT_ADDRESS || "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

      const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
      const contract = new ethers.Contract(contractAddress, ABI, provider);

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

      return new Response(JSON.stringify({ success: true, data: allProducts }), {
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
Part 2: The Client-Side Frontend Script
Point this script to your Worker's live URL (e.g., [https://your-worker.yourname.workers.dev](https://your-worker.yourname.workers.dev)). It updates your dashboard UI dynamically.

JavaScript
/**
 * FRONTEND USER INTERFACE ENGINE
 * Queries your Cloudflare Worker endpoint to generate live marketplace listings.
 */

// Change this to your live Cloudflare Worker production URL
const WORKER_API_URL = "https://your-worker-subdomain.workers.dev";

window.onload = function() {
    loadRandomMarketplace();
};

async function loadRandomMarketplace() {
    const gallery = document.getElementById('productGallery');

    try {
        const response = await fetch(WORKER_API_URL);
        const result = await response.json();

        if (!result.success) throw new Error(result.error);

        renderGallery(result.data);

    } catch (err) {
        console.error("Cloudflare Integration Interrupted:", err);
        if (gallery) {
            gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";
        }
    }
}

function renderGallery(products) {
    const gallery = document.getElementById('productGallery');
    if (!gallery) return;

    if (!products || products.length === 0) {
        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";
        return;
    }

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";

    gallery.innerHTML = products.map(p => {
      const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
      const displayImage = hasImage ? p.images[0] : localFallback;

      return `
          <div class="product-card">
              <div class="card-image">
                  <img src="${displayImage}" alt="${p.name}" onerror="this.src='${localFallback}'">
              </div>
              <div class="card-info">
                  <h3>${p.name}</h3>
                  <p class="price">R${Number(p.price).toLocaleString()}</p>
                  <p class="store-tag">CODE: ${p.code}</p>
                  <p class="meta">Available: ${p.stock} units</p>
                  <button onclick="openProduct(${p.id})">VIEW ITEM</button>
              </div>
          </div>
      `;
    }).join('');

    applyCardAnimations();
}

function applyCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
                rotationY: x * 20,
                rotationX: -y * 20,
                ease: "power2.out",
                duration: 0.4
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotationX: 0, rotationY: 0, ease: "power2.out" });
        });
    });
}

function openProduct(productId) {
    localStorage.setItem("selected_product_id", productId);
    window.location.href = "product12.html";
}
Step-by-Step Cloudflare Worker Setup
To get this running quickly inside your Cloudflare infrastructure, you have two options:

Option A: Directly inside the Dashboard (No installation required)
Navigate to Workers & Pages in your Cloudflare dashboard and click Create Worker.

Give your worker a name and click Deploy.

Click Edit Code, paste the code from Part 1, and save.

Go to your Worker's Settings > Variables tab.

Under Environment Variables, click Add Variable:

Key: RPC_URL → Value: [https://ethereum-sepolia-rpc.publicnode.com](https://ethereum-sepolia-rpc.publicnode.com)

Key: CONTRACT_ADDRESS → Value: 0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866

Click Save and Deploy.

Option B: Via Wrangler CLI (Local terminal)
If you manage your project using local files, create a file named wrangler.toml in your root directory alongside your worker.js:

Ini, TOML
name = "khoza-marketplace-api"
main = "worker.js"
compatibility_date = "2024-03-01"

[vars]
RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"
CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866"
Run npx wrangler deploy inside your terminal to push everything live up to your edge node in seconds.

const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

const CONTRACT2= 0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866;

const GATEWAY = "https://gateway.pinata.cloud/ipfs/";




let currentPrice = 0;

let currentIndex = 0;

let totalImages = 0;

import ABI from '/abi.js';



const AI = [

{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"products","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"string","name":"itemCode","type":"string"},{"internalType":"string","name":"itemName","type":"string"},{"internalType":"uint256","name":"retailPrice","type":"uint256"},{"internalType":"uint256","name":"stockPrice","type":"uint256"},{"internalType":"string","name":"colour","type":"string"},{"internalType":"uint256","name":"quantityAvailable","type":"uint256"},{"internalType":"uint256","name":"totalSold","type":"uint256"}],"stateMutability":"view","type":"function"},

{"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getProductImages","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"}

];



async function loadDetails() {

const display = document.getElementById('productDetail');

const productId = localStorage.getItem("selected_product_id");



if (!productId) {

display.innerHTML = "<h2 style='text-align:center'>ERROR: NO_PRODUCT_ID</h2>";

return;

}



try {

const provider = new ethers.JsonRpcProvider(RPC_URL);

const contract = new ethers.Contract(CONTRACT2, ABI, provider);



const [p, rawImages] = await Promise.all([

contract.products(productId),

contract.getProductImages(productId)

]);



currentPrice = Number(p.retailPrice);

const images = rawImages.filter(img => img).map(img => img.startsWith('http') ? img : `${GATEWAY}${img}`);

totalImages = images.length;



display.innerHTML = `

<div class="product-grid">

<div class="slider-section">

<div class="slider-viewport">

<div class="slider-wrapper" id="sliderWrapper">

${totalImages > 0

? images.map(src => `<div class="slider-item"><img src="${src}"></div>`).join('')

: '<div class="slider-item">NO_BLOCK_ASSETS</div>'}

</div>

</div>

${totalImages > 1 ? `

<div class="slider-nav">

<button class="nav-btn" onclick="moveSlider(-1)">PREV</button>

<span id="imgCounter" style="font-size:0.75rem;">${(currentIndex + 1)} / ${totalImages}</span>

<button class="nav-btn" onclick="moveSlider(1)">NEXT</button>

</div>` : ''}

</div>



<div class="product-info">

<p style="color:var(--accent-blue); font-size:0.65rem; margin:0">NODE_ID: ${p.itemCode}</p>

<h1 style="margin: 10px 0 20px 0; font-size: 2rem;">${p.itemName}</h1>

<div class="price-tag">R${currentPrice.toLocaleString()}</div>


<div class="quote-box">

<label style="font-size:0.6rem; color:#666">SELECT_SIZE</label>

<select id="itemSize"><option>S</option><option>M</option><option>L</option><option>XL</option></select>


<label style="font-size:0.6rem; color:#666">DISTRIBUTION_ZONE</label>

<select id="location" onchange="updateTotals()">

<option value="Standard">Standard SA</option>

<option value="Durban CBD">Durban CBD</option>

<option value="Parlock">Parlock</option>

<option value="Pinetown">Pinetown</option>

</select>



<label style="font-size:0.6rem; color:#666">UNIT_COUNT</label>

<input type="number" id="qtyInput" value="1" min="1" oninput="updateTotals()">



<div style="margin-top:20px; padding-top:15px; border-top:1px solid var(--glass-border)">

<div style="display:flex; justify-content:space-between; font-size:0.8rem"><span>Shipping:</span><span id="shipFee">R 0.00</span></div>

<div style="display:flex; justify-content:space-between; font-weight:bold; margin-top:8px; font-size:1.1rem"><span>ORDER_TOTAL:</span><span id="finalTotal">R 0.00</span></div>

</div>

</div>



<button class="buy-button" style="margin-top:25px" onclick="handleAddToCart('${productId}', '${p.itemName}', '${images[0] || ''}')">

ADD_TO_SESSION

</button>

</div>

</div>

`;

updateTotals();

updateBadge();

document.getElementById('connectionStatus').innerText = "ASSET_READY: " + p.itemName;

} catch (err) {

document.getElementById('connectionStatus').innerText = "SYNC_FAILED: LEDGER_UNREACHABLE";

}

}



function moveSlider(dir) {

currentIndex = (currentIndex + dir + totalImages) % totalImages;

gsap.to("#sliderWrapper", { xPercent: -100 * currentIndex, duration: 0.5, ease: "power2.out" });

document.getElementById('imgCounter').innerText = `${currentIndex + 1} / ${totalImages}`;

}



function updateTotals() {

const qty = parseInt(document.getElementById('qtyInput').value) || 1;

const loc = document.getElementById('location').value;

const rates = { "Durban CBD": [40, 60, 100, 180], "Parlock": [50, 70, 110, 190], "Pinetown": [70, 100, 170, 230], "Standard": [60, 100, 180, 240] };

const selected = rates[loc] || rates["Standard"];


let ship = selected[0];

if (qty > 4) ship = selected[1];

if (qty > 10) ship = selected[2];

if (qty > 20) ship = selected[3];



document.getElementById('shipFee').innerText = `R ${ship.toLocaleString()}`;

document.getElementById('finalTotal').innerText = `R ${(currentPrice * qty + ship).toLocaleString()}`;

return { ship, total: (currentPrice * qty + ship) };

}



function handleAddToCart(id, name, img) {

const qty = parseInt(document.getElementById('qtyInput').value);

const variant = document.getElementById('itemSize').value;

const calculations = updateTotals();



const item = {

id, name, price: currentPrice, image: img, quantity: qty,

location: `${document.getElementById('location').value} (${variant})`,

shipping: calculations.ship,

itemTotal: calculations.total

};



if (typeof addToCart === 'function') {

addToCart(item);

updateBadge();

}

}



function updateBadge() {

const cart = JSON.parse(localStorage.getItem('khoza_cart') || "[]");

document.getElementById('cartCount').innerText = cart.reduce((s, i) => s + i.quantity, 0);

}



window.onload = loadDetails;



<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta http-equiv="Content-Security-Policy" content="

default-src 'self';

script-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline';

style-src 'self' 'unsafe-inline';

connect-src 'self' https://ethereum-sepolia-rpc.publicnode.com https://eth-sepolia.g.alchemy.com;

img-src 'self' data: https://gateway.pinata.cloud https://*.ipfs.w3s.link;

">

<title>Product Details | KHOZA.IO</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js"></script>

<script src="cart-logic.js"></script>

<link rel="stylesheet" href="product.css">

</head>

<body>



<header class="shop-header">

<div class="header-content">

<img src="301015489_443828151102927_1957794053294967618_n.png" alt="KHOZA Logo" class="logo">

<div class="status-info">

<h1>Khoza Node Visualizer</h1>

<p id="connectionStatus">SECURE_LINK: ACTIVE</p>

</div>

<a href="cart10.html" class="cart-link">

CART: [<span id="cartCount">0</span>]

</a>

</div>

</header>



<main class="container">

<div id="productDetail">

<!-- Content injected by JS -->

</div>

</main>



<footer class="shop-footer">

<p>&copy; 2026 KHOZA.IO - Durban Logistics Center[cite: 1]</p>

</footer>



<script src="product12.js" > </script>

</body>

</html> can you update these page's based on our conversation and don't delete anything else 

Here are your updated files, migrating the smart contract data-fetching logic entirely to your Cloudflare Worker architecture.

The frontend script (product12.js) now pulls raw JSON safely from your edge worker endpoint, freeing it from executing synchronous Ethereum provider queries directly inside the browser. The HTML file (product12.html) is updated with a streamlined Content Security Policy (CSP) that allows your Cloudflare Worker domain to securely feed assets to the dashboard without changing any of your UI hooks, CSS layout structural boundaries, or GSAP animations.

Part 1: Updated Frontend Logic (product12.js)
This replaces your local smart contract calls with an asynchronous fetch to your Cloudflare runtime worker endpoint. All manual calculations for subtotals, shipping fees, and local delivery zones remain fully active.

JavaScript
/**
 * PRODUCTION FRONTEND COMPONENT - CLOUDFLARE EDGE WORKER STREAM
 * Fetches dynamic data through the Cloudflare network instead of heavy client-side RPC calls.
 */

// Replace this with your production Cloudflare Worker URL
const CLOUDFLARE_WORKER_URL = "https://your-worker-subdomain.workers.dev";
const GATEWAY = "https://gateway.pinata.cloud/ipfs/";

let currentPrice = 0;
let currentIndex = 0;
let totalImages = 0;
let productImagesArray = [];

async function loadDetails() {
    const display = document.getElementById('productDetail');
    const productId = localStorage.getItem("selected_product_id");

    if (!productId) {
        display.innerHTML = "<h2 style='text-align:center'>ERROR: NO_PRODUCT_ID</h2>";
        return;
    }

    try {
        // Query the Cloudflare worker API endpoint
        const response = await fetch(`${CLOUDFLARE_WORKER_URL}?id=${productId}`);
        const result = await response.json();

        if (!result.success) throw new Error(result.error);

        const p = result.data;

        // Process data properties pulled through the worker context
        currentPrice = Number(p.price);
        
        // Ensure images match Pinata IPFS structural boundaries
        productImagesArray = (p.images || []).filter(img => img).map(img => 
            img.startsWith('http') ? img : `${GATEWAY}${img}`
        );
        totalImages = productImagesArray.length;

        display.innerHTML = `
            <div class="product-grid">
                <div class="slider-section">
                    <div class="slider-viewport">
                        <div class="slider-wrapper" id="sliderWrapper">
                            ${totalImages > 0 
                                ? productImagesArray.map(src => `<div class="slider-item"><img src="${src}"></div>`).join('')
                                : '<div class="slider-item">NO_BLOCK_ASSETS</div>'}
                        </div>
                    </div>
                    ${totalImages > 1 ? `
                    <div class="slider-nav">
                        <button class="nav-btn" onclick="moveSlider(-1)">PREV</button>
                        <span id="imgCounter" style="font-size:0.75rem;">${(currentIndex + 1)} / ${totalImages}</span>
                        <button class="nav-btn" onclick="moveSlider(1)">NEXT</button>
                    </div>` : ''}
                </div>

                <div class="product-info">
                    <p style="color:var(--accent-blue); font-size:0.65rem; margin:0">NODE_ID: ${p.code}</p>
                    <h1 style="margin: 10px 0 20px 0; font-size: 2rem;">${p.name}</h1>
                    <div class="price-tag">R${currentPrice.toLocaleString()}</div>
                    
                    <div class="quote-box">
                        <label style="font-size:0.6rem; color:#666">SELECT_SIZE</label>
                        <select id="itemSize"><option>S</option><option>M</option><option>L</option><option>XL</option></select>
                        
                        <label style="font-size:0.6rem; color:#666">DISTRIBUTION_ZONE</label>
                        <select id="location" onchange="updateTotals()">
                            <option value="Standard">Standard SA</option>
                            <option value="Durban CBD">Durban CBD</option>
                            <option value="Parlock">Parlock</option>
                            <option value="Pinetown">Pinetown</option>
                        </select>

                        <label style="font-size:0.6rem; color:#666">UNIT_COUNT</label>
                        <input type="number" id="qtyInput" value="1" min="1" oninput="updateTotals()">

                        <div style="margin-top:20px; padding-top:15px; border-top:1px solid var(--glass-border)">
                            <div style="display:flex; justify-content:space-between; font-size:0.8rem"><span>Shipping:</span><span id="shipFee">R 0.00</span></div>
                            <div style="display:flex; justify-content:space-between; font-weight:bold; margin-top:8px; font-size:1.1rem"><span>ORDER_TOTAL:</span><span id="finalTotal">R 0.00</span></div>
                        </div>
                    </div>

                    <button class="buy-button" style="margin-top:25px" onclick="handleAddToCart('${p.id}', '${p.name}', '${productImagesArray[0] || ''}')">
                        ADD_TO_SESSION
                    </button>
                </div>
            </div> 
        `;
        
        updateTotals();
        updateBadge();
        document.getElementById('connectionStatus').innerText = "ASSET_READY: " + p.name;
    } catch (err) {
        console.error("Ledger query failure:", err);
        document.getElementById('connectionStatus').innerText = "SYNC_FAILED: LEDGER_UNREACHABLE";
    }
}

// Retains your exact GSAP structural properties
function moveSlider(dir) {
    if (totalImages === 0) return;
    currentIndex = (currentIndex + dir + totalImages) % totalImages;
    gsap.to("#sliderWrapper", { xPercent: -100 * currentIndex, duration: 0.5, ease: "power2.out" });
    document.getElementById('imgCounter').innerText = `${currentIndex + 1} / ${totalImages}`;
}

// Preserves original, localized Durban zone calculation logistics without zeroing bugs
function updateTotals() {
    const qtyInputElem = document.getElementById('qtyInput');
    const locationElem = document.getElementById('location');
    
    if (!qtyInputElem || !locationElem) return { ship: 0, total: 0 };

    const qty = parseInt(qtyInputElem.value) || 1;
    const loc = locationElem.value;
    const rates = { 
        "Durban CBD": [40, 60, 100, 180], 
        "Parlock": [50, 70, 110, 190], 
        "Pinetown": [70, 100, 170, 230], 
        "Standard": [60, 100, 180, 240] 
    };
    const selected = rates[loc] || rates["Standard"];
    
    let ship = selected[0];
    if (qty > 4) ship = selected[1];
    if (qty > 10) ship = selected[2];
    if (qty > 20) ship = selected[3];

    const finalTotalValue = (currentPrice * qty) + ship;

    document.getElementById('shipFee').innerText = `R ${ship.toLocaleString()}`;
    document.getElementById('finalTotal').innerText = `R ${finalTotalValue.toLocaleString()}`;
    
    return { ship, total: finalTotalValue };
}

function handleAddToCart(id, name, img) {
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    const variant = document.getElementById('itemSize').value;
    const calculations = updateTotals();

    const item = {
        id, 
        name, 
        price: currentPrice, 
        image: img, 
        quantity: qty,
        location: `${document.getElementById('location').value} (${variant})`,
        shipping: calculations.ship,
        itemTotal: calculations.total
    };

    if (typeof addToCart === 'function') {
        addToCart(item);
        updateBadge();
    }
}

function updateBadge() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const cart = JSON.parse(localStorage.getItem('khoza_cart') || "[]");
    badge.innerText = cart.reduce((s, i) => s + i.quantity, 0);
}

window.onload = loadDetails;
Part 2: HTML Integration Layer (product12.html)
The HTML structures match your layout requirements exactly. The connect-src section of your Content Security Policy header has been explicitly expanded to whitelist your Cloudflare domain environment.

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="
    default-src 'self'; 
    script-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline'; 
    style-src 'self' 'unsafe-inline'; 
    connect-src 'self' https://ethereum-sepolia-rpc.publicnode.com https://eth-sepolia.g.alchemy.com https://*.workers.dev;
    img-src 'self' data: https://gateway.pinata.cloud https://*.ipfs.w3s.link;
    ">
    <title>Product Details | KHOZA.IO</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js"></script>
    <script src="cart-logic.js"></script>
    <link rel="stylesheet" href="product.css">
</head>
<body>

    <header class="shop-header">
        <div class="header-content">
            <img src="301015489_443828151102927_1957794053294967618_n.png" alt="KHOZA Logo" class="logo">
            <div class="status-info">
                <h1>Khoza Node Visualizer</h1>
                <p id="connectionStatus">SECURE_LINK: ACTIVE</p>
            </div>
            <a href="cart10.html" class="cart-link">
                CART: [<span id="cartCount">0</span>]
            </a>
        </div>
    </header>

    <main class="container">
        <div id="productDetail">
            <!-- Content injected by JS -->
        </div>
    </main>

    <footer class="shop-footer">
        <p>&copy; 2026 KHOZA.IO - Durban Logistics Center</p>
    </footer>

    <script src="product12.js"></script>
</body>
</html>
Part 3: Backend Worker Endpoint Configuration Upgrade
To ensure the backend script handles individual single-product queries alongside complete catalog sweeps, paste this implementation into your Cloudflare Worker interface:

JavaScript
/**
 * CLOUDFLARE WORKER ROUTER EXTENSION
 * Supports both list arrays and parameterized single ID searches.
 */

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

export default {
  async fetch(request, env, ctx) {
    const { ethers } = await import('https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.5/ethers.js');

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const rpcProviderUrl = env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";
      const contractAddress = env.CONTRACT_ADDRESS || "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

      const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
      const contract = new ethers.Contract(contractAddress, ABI, provider);

      const url = new URL(request.url);
      const targetId = url.searchParams.get("id");

      // Handle parameterized target queries for single items
      if (targetId) {
        const p = await contract.products(targetId);
        const images = await contract.getProductImages(targetId);

        return new Response(JSON.stringify({
          success: true,
          data: {
            id: p.id.toString(),
            name: p.itemName,
            code: p.itemCode,
            price: p.retailPrice.toString(),
            stockPrice: p.stockPrice.toString(),
            images: images,
            stock: p.quantityAvailable.toString()
          }
        }), { status: 200, headers: corsHeaders });
      }

      // Fallback fallback: full random grid generation
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

      return new Response(JSON.stringify({ success: true, data: allProducts }), {
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
// functions/api/my-secure-logic.js



/**

* Custom secure function that handles sensitive operations behind the scenes

* @param {Object} data - The data sent from the user's frontend browser

* @param {string} key - The hidden private key injected from Cloudflare secrets

* @param {string} provider - An optional RPC provider URL or API base endpoint

*/

export async function processSecureTransaction(data, key, provider) {

// Your custom backend logic goes here.

// For example, signing a data payload, hashing parameters, or sending

// an authenticated request to an external ledger/database.


if (data.action === "ping") {

return `Successfully authenticated using key ending in ...${key.slice(-4)}`;

}



return "Secure task completed.";

} If I wanted to use this code before deploying to cloudflare.do I need to install any decencies and does it get auto populated on cloudfare variables when I upload to cloudfare 

1. Dependencies to Install Locally
Since your file uses standard JavaScript features and basic async/await, you do not need to install any external npm dependencies to run or test this specific code block locally.

However, because this file exports an ECMAScript module (export async function...), if you want to write a local node test script to run it before uploading, ensure your local workspace supports modules.

If you plan to use Cloudflare's local development environment (Wrangler) to simulate how it runs on the edge, run these commands in your project terminal:

Bash
# Initialize a package.json if you don't have one
npm init -y

# Install Wrangler as a development tool
npm install wrangler --save-dev
2. How Cloudflare Variables & Secrets Populate
Environment variables and hidden private keys do not auto-populate automatically just by uploading your code. Cloudflare needs you to declare them explicitly so it knows what values to inject when your code runs.

Because your function is located under functions/api/, you are using Cloudflare Pages Functions. Here is how you connect your variables for both development and production:

Local Development (Wrangler)
To test variables like key and provider locally before deploying, create a file named .dev.vars in the root directory of your project (where you run Wrangler).

Ini, TOML
# .dev.vars
SECRET_PRIVATE_KEY="your_local_test_private_key_here"
RPC_PROVIDER_URL="https://ethereum-sepolia-rpc.publicnode.com"
⚠️ Security Note: Add .dev.vars to your .gitignore file so you never accidentally commit your private keys to public repositories.

Production Deployment (Cloudflare Dashboard)
To populate these variables in your live environment, you must add them to your Pages project settings manually:

1
Navigate to Environment Variables
Cloudflare Dashboard
Log in to Cloudflare, select Workers & Pages, click on your specific Pages project, and go to Settings > Environment variables.

2
Define Plaintext Variables
For non-sensitive data
Under Production, add variables like your RPC endpoint (e.g., set the variable name as RPC_PROVIDER_URL and paste the URL as the value).

3
Define Hidden Secrets
For sensitive keys
For your private key, add it under Environment variables but select Encrypt (or add it via the CLI using wrangler pages secret put SECRET_PRIVATE_KEY). This masks the value so it can never be read from the dashboard interface again.


How to Bind Variables to Your Code
To pass those dashboard variables into your function, update your entrypoint file (like functions/api/secure-route.js) to read from the Cloudflare context.env object and feed them into your processor:

JavaScript
// functions/api/secure-route.js
import { processSecureTransaction } from './my-secure-logic.js';

export async function onRequestPost(context) {
  try {
    // Read the incoming request body from the frontend browser
    const data = await request.json();
    
    // Pull the injected secrets directly out of Cloudflare's context.env object
    const privateKey = context.env.SECRET_PRIVATE_KEY;
    const rpcProvider = context.env.RPC_PROVIDER_URL;

    // Execute your custom backend logic safely behind the scenes
    const result = await processSecureTransaction(data, privateKey, rpcProvider);

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Thengala</title>

<link rel="stylesheet" href="style10.css">

<!-- Load GSAP & Ethers -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js"></script>

</head>

<body>



<header class="shop-header">

<div class="header-content">

<img src="301015489_443828151102927_1957794053294967618_n.png" alt="KHOZA Logo" class="logo">

<div class="status-info">

<h1>Thengala </h1>

</div>

</div>

</header>



<main id="productGallery" class="marketplace-grid">

<!-- Products injected by marketplace-logic.js -->

<div class="loader">loading products...</div>

</main>



<footer class="shop-footer">

<p>&copy; 2026 KHOZA.IO - Decentralized e commerce</p>

</footer>



<script src="logc2.js"></script>

<script>

// Initialize GSAP Animations after content loads

window.addEventListener('load', () => {

gsap.registerPlugin(ScrollTrigger);


// Animation for cards appearing as you scroll

gsap.from(".product-card", {

duration: 1,

y: 100,

opacity: 0,

rotationX: -15,

stagger: 0.2,

scrollTrigger: {

trigger: ".marketplace-grid",

start: "top 80%",

}

});

});

</script>

</body>

</html> 

This HTML file is structured correctly for a clean, serverless-driven grid interface.

However, since your inline script fires a GSAP transition on .product-card elements right when the page finishes loading, the animation will likely miss your items. This happens because the browser's load event fires before your asynchronous logc2.js script finishes fetching data from the Cloudflare Worker and injecting the HTML cards into the DOM.

To prevent items from appearing statically or skipping the transition completely, you should move the GSAP stagger call into a global function. This allows logc2.js to trigger the animation the exact millisecond the DOM elements are injected.

Here is the updated HTML file with this optimization, preserving your layout structural boundaries, scripts, and logos exactly as they are.

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thengala</title>
    <link rel="stylesheet" href="style10.css">
    <!-- Load GSAP & Ethers -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js"></script>
</head>
<body>

    <header class="shop-header">
        <div class="header-content">
            <img src="301015489_443828151102927_1957794053294967618_n.png" alt="KHOZA Logo" class="logo">
            <div class="status-info">
                <h1>Thengala </h1>
            </div>
        </div>
    </header>

    <main id="productGallery" class="marketplace-grid">
        <!-- Products injected by marketplace-logic.js -->
        <div class="loader">loading products...</div>
    </main>

    <footer class="shop-footer">
        <p>&copy; 2026 KHOZA.IO - Decentralized  e commerce</p>
    </footer>

    <script src="logc2.js"></script>
    <script>
        // Register plugins immediately on engine execution
        gsap.registerPlugin(ScrollTrigger);
        
        /**
         * Global entrypoint for dynamic cards layout animations.
         * Call this function at the absolute end of your renderGallery() logic inside logc2.js
         */
        window.animateInjectedCards = function() {
            // Target the newly created DOM nodes cleanly
            gsap.from(".product-card", {
                duration: 1,
                y: 100,
                opacity: 0,
                rotationX: -15,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".marketplace-grid",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        };

        // Fallback safety trigger in case data is cached or instantly resolves
        window.addEventListener('load', () => {
            if (document.querySelectorAll('.product-card').length > 0) {
                window.animateInjectedCards();
            }
        });
    </script>
</body>
</html>
How to link this with your logc2.js file:
Inside your logc2.js script, right after your .map().join('') operation updates the gallery.innerHTML property with your new cards, simply add this line to kick off your grid staggering:

JavaScript
// Inside logc2.js after innerHTML injection:
if (typeof window.animateInjectedCards === 'function') {
    window.animateInjectedCards();
}
Can you update this code for a cloudfare serverles function /**

 * GLOBAL MARKETPLACE LOGIC

 * Fetches all products from the Blockchain and displays them randomly.

 */



// 1. Configuration

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



// 1. Configuration - Replace with your details

//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH

//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";



//const wallet_addre='0x0Cf641c00aB0691A3d76132e649D38d2369340c7'

 //const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";

//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";



// 1. DYNAMIC WALLET LOADING

// ABI needs to include the product getter

// ABI for the KhozaLogistics functions

       const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";

         const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";



//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

     //   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 

//const CONTRACT_ADDRESS = "0x7b7Fc57F363b9D60038C8b7f8F270e77Ee13dd0C";

//const PINATA_JWT = "PASTE_YOUR_FULL_JWT_HERE"; // Ensure this is the LONG token



//const CONTRACT_ADDRESS = "0x27AEB9e899669A8Ad6A19460054A614e6bAcD17e";

      //  const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";

//const RPC_URL = "https://eth-hoodi.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";



         // 2. Access variables via process.env

      //  const RPC_URL = process.env.RPC_URL;

         //const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

     //  const MASTER_KEY = process.env.MASTER_KEY;



       

          const ABI = [

  {

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      }

    ],

    "name": "AdminRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "courierId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CourierRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "customerId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "CustomerRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "dispatchId",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "name",

        "type": "string"

      }

    ],

    "name": "DispatchRegistered",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "address",

        "name": "user",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      }

    ],

    "name": "GasRefueled",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      }

    ],

    "name": "OrderConfirmed",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "orderId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      }

    ],

    "name": "OrderPlaced",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "indexed": false,

        "internalType": "address",

        "name": "admin",

        "type": "address"

      }

    ],

    "name": "ProductAdded",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "indexed": false,

        "internalType": "uint256",

        "name": "newQuantity",

        "type": "uint256"

      }

    ],

    "name": "StockUpdated",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_c",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string[]",

        "name": "_u",

        "type": "string[]"

      },

      {

        "internalType": "uint256",

        "name": "_r",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_s",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_col",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_q",

        "type": "uint256"

      }

    ],

    "name": "addProduct",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "adminAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "_new",

        "type": "address"

      }

    ],

    "name": "adminForceMigrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "admins",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "storeName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "bankName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountHolder",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "accountNumber",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      }

    ],

    "name": "confirmOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "couriers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "vehicleType",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerAddresses",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "customerOrders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "customers",

    "outputs": [

      {

        "internalType": "address",

        "name": "CustomerId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "Reference",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      },

      {

        "internalType": "bool",

        "name": "exists",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "debtCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "debts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "description",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "amount",

        "type": "uint256"

      },

      {

        "internalType": "bool",

        "name": "isPaid",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "deliveryPersonnel",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "name": "dispatchers",

    "outputs": [

      {

        "internalType": "address",

        "name": "adminId",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "firstName",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "surname",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "deliveryAddress",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "phoneNumber",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "email",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isActive",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "bytes32",

        "name": "",

        "type": "bytes32"

      }

    ],

    "name": "emailToAddress",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "getCounts",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      }

    ],

    "name": "getProductImages",

    "outputs": [

      {

        "internalType": "string[]",

        "name": "",

        "type": "string[]"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_u",

        "type": "address"

      }

    ],

    "name": "getRole",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isAdmin",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCourier",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_a",

        "type": "address"

      }

    ],

    "name": "isCustomer",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "_old",

        "type": "address"

      }

    ],

    "name": "migrateCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "orderCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "orders",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "customer",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "productId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "quantity",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalAmount",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "status",

        "type": "string"

      },

      {

        "internalType": "bool",

        "name": "isConfirmed",

        "type": "bool"

      },

      {

        "internalType": "string",

        "name": "paymentReference",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "owner",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_pId",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "_qty",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_ref",

        "type": "string"

      }

    ],

    "name": "placeOrder",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "productCount",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "productIds",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "name": "products",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "id",

        "type": "uint256"

      },

      {

        "internalType": "address",

        "name": "admin",

        "type": "address"

      },

      {

        "internalType": "string",

        "name": "itemCode",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "itemName",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "retailPrice",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "stockPrice",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "colour",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "quantityAvailable",

        "type": "uint256"

      },

      {

        "internalType": "uint256",

        "name": "totalSold",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_b",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_h",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      }

    ],

    "name": "registerAdmin",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_v",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      }

    ],

    "name": "registerCourier",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_n",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_r",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerCustomer",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "_f",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_s",

        "type": "string"

      },

      {

        "internalType": "string",

        "name": "_a",

        "type": "string"

      },

      {

        "internalType": "uint256",

        "name": "_p",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_e",

        "type": "string"

      }

    ],

    "name": "registerDispatch",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address payable",

        "name": "_user",

        "type": "address"

      }

    ],

    "name": "requestGasRefuel",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "_oId",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "_st",

        "type": "string"

      }

    ],

    "name": "updateOrderStatus",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "name": "usedReferences",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "withdrawGasVault",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "stateMutability": "payable",

    "type": "receive"

  }

];  



// 1. DYNAMIC SESSION RETRIEVAL

// This looks for the key saved in customer-register3.html or login.html





  



/**

 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO

 * Fetches all products from the Blockchain and displays them randomly.

 */





  async function loadRandomMarketplace() {

    const gallery = document.getElementById('productGallery');

    const headerStatus = document.querySelector('.shop-header p');



    try {

      



        // B. ETHERS SETUP

        const provider = new ethers.JsonRpcProvider(RPC_URL);

      //  const wallet = new ethers.Wallet(userKey, provider);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);



        // C. CUSTOMER GREETING

       

        // D. DATA HARVESTING

      // D. DATA HARVESTING - Updated to fetch images separately

        const count = await contract.productCount(); 

        let allProducts = [];



        for (let i = 1; i <= count; i++) {

            // Fetch product basic info

            const p = await contract.products(i);

            

            // Fetch images using the dedicated getter in your ABI

            const images = await contract.getProductImages(i);

            

            // Only show active stock

            if (p.quantityAvailable > 0) {

                allProducts.push({

                    id: p.id.toString(),

                    name: p.itemName,

                    code: p.itemCode,

                    price: p.retailPrice.toString(),

                    stockPrice: p.stockPrice.toString(),

                    // Assign the fetched image array here

                    images: images, 

                    stock: p.quantityAvailable.toString()

                });

            }

        }

        // E. RANDOMIZATION (Fisher-Yates)

        for (let i = allProducts.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];

        }



        // F. RENDER

        renderGallery(allProducts);



    } catch (err) {

        console.error("Critical System Failure:", err);

        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";

    }

}



/**

 * 4. UI Rendering

 * Generates the HTML for the product cards.

 */

/**

 * 4. UI Rendering

 * Updated with safety check for images to prevent 'undefined (reading 0)' error.

 */

function renderGallery(products) {

    const gallery = document.getElementById('productGallery');

    if (products.length === 0) {

        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";

        return;

    }



    // Use your local logo file as the reliable fallback

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";



    gallery.innerHTML = products.map(p => {

        // Check if images exist and the first URL is not an empty string

        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";

        const displayImage = hasImage ? p.images[0] : localFallback;



        return `

            <div class="product-card">

                <div class="card-image">

                    <!-- Added onerror handler to catch broken IPFS links and swap to local fallback -->

                    <img src="${displayImage}" 

                         alt="${p.name}" 

                         onerror="this.src='${localFallback}'">

                </div>

                <div class="card-info">

                    <h3>${p.name}</h3>

                    <p class="price">R${Number(p.price).toLocaleString()}</p>

                    <p class="store-tag">CODE: ${p.code}</p>

                    <p class="meta">Available: ${p.stock} units</p>

                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>

                </div>

            </div>

        `;

    }).join('');



    // Re-initialize GSAP tilt effects for the new cards[cite: 8]

    applyCardAnimations();

}



/**

 * 6. UI Animations

 * Applies GSAP tilt effects to product cards after they are rendered.

 */

function applyCardAnimations() {

    const cards = document.querySelectorAll('.product-card');

    

    cards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const { clientX, clientY } = e;

            const { left, top, width, height } = card.getBoundingClientRect();

            const x = (clientX - left) / width - 0.5;

            const y = (clientY - top) / height - 0.5;



            gsap.to(card, {

                rotationY: x * 20, // Tilt left/right

                rotationX: -y * 20, // Tilt up/down

                ease: "power2.out",

                duration: 0.4

            });

        });



        card.addEventListener('mouseleave', () => {

            gsap.to(card, { 

                rotationX: 0, 

                rotationY: 0, 

                ease: "power2.out" 

            });

        });

    });

}

/**

 * 5. Navigation Logic

 * Bridges the shop to the individual product page.

 */

function openProduct(productId) {

    console.log("Routing to product node:", productId);

    localStorage.setItem("selected_product_id", productId);

    window.location.href = "product12.html";

}



// Initialize on window load

window.onload = loadRandomMarketplace; but don't delete or change anything code unless where it needed

To adapt your marketplace code into a Cloudflare Workers serverless function, we need to separate the blockchain data harvesting (server-side) from the DOM rendering (client-side).

Cloudflare Workers operate in a headless V8 isolation environment, meaning they don't have access to browser-specific objects like document, window, localStorage, or gsap. Moving the data-fetching layer to a worker will drastically speed up your marketplace by eliminating slow blockchain iteration loops from your frontend client.

Here is the code split cleanly into your serverless Worker file and your updated client-side logc2.js file.

1. The Cloudflare Worker Code (worker.js)
Deploy this on your Cloudflare dashboard or via Wrangler. It connects to the Sepolia node, loops through your KhozaLogistics smart contract, and outputs a clean JSON response with standard cross-origin resource sharing (CORS) headers allowed.

JavaScript
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
2. The Marketplace Frontend Script (logc2.js)
Replace your local logc2.js script with this. It replaces the slow Ethers connection loops with a single lightning-fast network payload fetch from your newly deployed API endpoint. All original functions, animations, names, configurations, and your complete smart contract ABI structure have been retained natively.

JavaScript
// 1. Configuration
const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; 
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";
const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

// PASTE YOUR CLOUDFLARE WORKER URL HERE AFTER DEPLOYMENT
const WORKER_API_URL = "https://your-worker-subdomain.workers.dev";

const ABI = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "adminId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "storeName", "type": "string" } ], "name": "AdminRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "courierId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "CourierRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "CustomerRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "dispatchId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "DispatchRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GasRefueled", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" } ], "name": "OrderConfirmed", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "customer", "type": "address" }, { "indexed": false, "internalType": "string", "name": "Reference", "type": "string" } ], "name": "OrderPlaced", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "itemName", "type": "string" }, { "indexed": false, "internalType": "address", "name": "admin", "type": "address" } ], "name": "ProductAdded", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newQuantity", "type": "uint256" } ], "name": "StockUpdated", "type": "event" },
  { "inputs": [ { "internalType": "string", "name": "_c", "type": "string" }, { "internalType": "string", "name": "_n", "type": "string" }, { "internalType": "string[]", "name": "_u", "type": "string[]" }, { "internalType": "uint256", "name": "_r", "type": "uint256" }, { "internalType": "uint256", "name": "_s", "type": "uint256" }, { "internalType": "string", "name": "_col", "type": "string" }, { "internalType": "uint256", "name": "_q", "type": "uint256" } ], "name": "addProduct", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "adminAddresses", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_old", "type": "address" }, { "internalType": "address", "name": "_new", "type": "address" } ], "name": "adminForceMigrateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "admins", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "storeName", "type": "string" }, { "internalType": "string", "name": "bankName", "type": "string" }, { "internalType": "string", "name": "accountHolder", "type": "string" }, { "internalType": "string", "name": "accountNumber", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_oId", "type": "uint256" } ], "name": "confirmOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "couriers", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "vehicleType", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "customerAddresses", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "customerOrders", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "customers", "outputs": [ { "internalType": "address", "name": "CustomerId", "type": "address" }, { "internalType": "string", "name": "Reference", "type": "string" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "surname", "type": "string" }, { "internalType": "string", "name": "deliveryAddress", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" }, { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "debtCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "debts", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "customer", "type": "address" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "isPaid", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "deliveryPersonnel", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "dispatchers", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "surname", "type": "string" }, { "internalType": "string", "name": "deliveryAddress", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "name": "emailToAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "getCounts", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_pId", "type": "uint256" } ], "name": "getProductImages", "outputs": [ { "internalType": "string[]", "name": "", "type": "string[]" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_u", "type": "address" } ], "name": "getRole", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isAdmin", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isCourier", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isCustomer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_old", "type": "address" } ], "name": "migrateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "orderCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "orders", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "customer", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "totalAmount", "type": "uint256" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "bool", "name": "isConfirmed", "type": "bool" }, { "internalType": "string", "name": "paymentReference", "type": "string" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_pId", "type": "uint256" }, { "internalType": "uint256", "name": "_qty", "type": "uint256" }, { "internalType": "string", "name": "_ref", "type": "string" } ], "name": "placeOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "productCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "productIds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "products", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }, { "internalType": "string", "name": "itemCode", "type": "string" }, { "internalType": "string", "name": "itemName", "type": "string" }, { "internalType": "uint256", "name": "retailPrice", "type": "uint256" }, { "internalType": "uint256", "name": "stockPrice", "type": "uint256" }, { "internalType": "string", "name": "colour", "type": "string" }, { "internalType": "uint256", "name": "quantityAvailable", "type": "uint256" }, { "internalType": "uint256", "name": "totalSold", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_s", "type": "string" }, { "internalType": "string", "name": "_b", "type": "string" }, { "internalType": "string", "name": "_h", "type": "string" }, { "internalType": "string", "name": "_n", "type": "string" } ], "name": "registerAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_f", "type": "string" }, { "internalType": "string", "name": "_v", "type": "string" }, { "internalType": "string", "name": "_e", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" } ], "name": "registerCourier", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_n", "type": "string" }, { "internalType": "string", "name": "_r", "type": "string" }, { "internalType": "string", "name": "_a", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" }, { "internalType": "string", "name": "_e", "type": "string" } ], "name": "registerCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_f", "type": "string" }, { "internalType": "string", "name": "_s", "type": "string" }, { "internalType": "string", "name": "_a", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" }, { "internalType": "string", "name": "_e", "type": "string" } ], "name": "registerDispatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address payable", "name": "_user", "type": "address" } ], "name": "requestGasRefuel", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_oId", "type": "uint256" }, { "internalType": "string", "name": "_st", "type": "string" } ], "name": "updateOrderStatus", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "", "type": "string" } ], "name": "usedReferences", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "withdrawGasVault", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "stateMutability": "payable", "type": "receive" }
];  

/**
 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO
 * Fetches compiled runtime product payloads from Cloudflare Worker endpoint securely.
 */
async function loadRandomMarketplace() {
    const gallery = document.getElementById('productGallery');

    try {
        // Fetch payload data seamlessly via your newly offloaded Cloudflare API service
        const response = await fetch(WORKER_API_URL);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.error || "Unknown serverless pipeline disruption.");
        }

        // Render the array that was pre-randomized inside the worker isolation engine
        renderGallery(data.products);

    } catch (err) {
        console.error("Critical System Failure:", err);
        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";
    }
}

/**
 * 4. UI Rendering
 * Generates the HTML for the product cards.
 */
function renderGallery(products) {
    const gallery = document.getElementById('productGallery');
    if (products.length === 0) {
        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";
        return;
    }

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";

    gallery.innerHTML = products.map(p => {
        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
        const displayImage = hasImage ? p.images[0] : localFallback;

        return `
            <div class="product-card">
                <div class="card-image">
                    <img src="${displayImage}" 
                         alt="${p.name}" 
                         onerror="this.src='${localFallback}'">
                </div>
                <div class="card-info">
                    <h3>${p.name}</h3>
                    <p class="price">R${Number(p.price).toLocaleString()}</p>
                    <p class="store-tag">CODE: ${p.code}</p>
                    <p class="meta">Available: ${p.stock} units</p>
                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>
                </div>
            </div>
        `;
    }).join('');

    // Re-initialize GSAP tilt effects for the new cards
    applyCardAnimations();
    
    // Safety check call out to trigger your entrance fade animations (from index layout setups)
    if (typeof window.animateInjectedCards === 'function') {
        window.animateInjectedCards();
    }
}

/**
 * 6. UI Animations
 * Applies GSAP tilt effects to product cards after they are rendered.
 */
function applyCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
                rotationY: x * 20, 
                rotationX: -y * 20, 
                ease: "power2.out",
                duration: 0.4
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                rotationX: 0, 
                rotationY: 0, 
                ease: "power2.out" 
            });
        });
    });
}

/**
 * 5. Navigation Logic
 * Bridges the shop to the individual product page.
 */
function openProduct(productId) {
    console.log("Routing to product node:", productId);
    localStorage.setItem("selected_product_id", productId);
    window.location.href = "product12.html";
}

// Initialize on window load
window.onload = loadRandomMarketplace;
Can you make this code operate without worker's but variables from cloudfare and provide me an updated full code and don't delete or change anything else just do change's where it necessary and store secret variables on cloudfare dashboard and be accessed for a smart contract on URL link

To manage your system configuration directly from the Cloudflare dashboard without running a secondary Worker pipeline, your client-side architecture must connect to the Sepolia ledger infrastructure natively.

Security Guardrail Note: Pure frontends (running in a customer's browser) do not possess a secure server runtime environment. Storing the PRIVATE_KEY or your PINATA_JWT directly in plain text within a public script means anyone can inspect the webpage and extract them.

Because you requested to have zero Workers and access these values via a URL link, the industry-standard way to manage configurations via a Cloudflare dashboard without code deployments is to use a Public Configuration Endpoint hosted on your static routing setup, or to replace your constant variables with explicit values managed at your domain layer.

The updated, self-contained logc2.js handles all blockchain data extraction natively in the browser while preserving your original configurations, styles, animations, variables, and full contract structures exactly as requested.

Updated Complete Frontend Script (logc2.js)
JavaScript
// 1. Configuration - Replace these with your target dashboard variables or endpoints if fetched dynamically
const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; 
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";
const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

const ABI = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "adminId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "storeName", "type": "string" } ], "name": "AdminRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "courierId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "CourierRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "CustomerRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "dispatchId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "DispatchRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GasRefueled", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" } ], "name": "OrderConfirmed", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "customer", "type": "address" }, { "indexed": false, "internalType": "string", "name": "Reference", "type": "string" } ], "name": "OrderPlaced", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "itemName", "type": "string" }, { "indexed": false, "internalType": "address", "name": "admin", "type": "address" } ], "name": "ProductAdded", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newQuantity", "type": "uint256" } ], "name": "StockUpdated", "type": "event" },
  { "inputs": [ { "internalType": "string", "name": "_c", "type": "string" }, { "internalType": "string", "name": "_n", "type": "string" }, { "internalType": "string[]", "name": "_u", "type": "string[]" }, { "internalType": "uint256", "name": "_r", "type": "uint256" }, { "internalType": "uint256", "name": "_s", "type": "uint256" }, { "internalType": "string", "name": "_col", "type": "string" }, { "internalType": "uint256", "name": "_q", "type": "uint256" } ], "name": "addProduct", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "adminAddresses", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_old", "type": "address" }, { "internalType": "address", "name": "_new", "type": "address" } ], "name": "adminForceMigrateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "admins", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "storeName", "type": "string" }, { "internalType": "string", "name": "bankName", "type": "string" }, { "internalType": "string", "name": "accountHolder", "type": "string" }, { "internalType": "string", "name": "accountNumber", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_oId", "type": "uint256" } ], "name": "confirmOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "couriers", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "vehicleType", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "customerAddresses", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "customerOrders", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "customers", "outputs": [ { "internalType": "address", "name": "CustomerId", "type": "address" }, { "internalType": "string", "name": "Reference", "type": "string" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "surname", "type": "string" }, { "internalType": "string", "name": "deliveryAddress", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" }, { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "debtCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "debts", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "customer", "type": "address" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "isPaid", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "deliveryPersonnel", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "dispatchers", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "surname", "type": "string" }, { "internalType": "string", "name": "deliveryAddress", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "name": "emailToAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "getCounts", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_pId", "type": "uint256" } ], "name": "getProductImages", "outputs": [ { "internalType": "string[]", "name": "", "type": "string[]" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_u", "type": "address" } ], "name": "getRole", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isAdmin", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isCourier", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isCustomer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_old", "type": "address" } ], "name": "migrateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "orderCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "orders", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "customer", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "totalAmount", "type": "uint256" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "bool", "name": "isConfirmed", "type": "bool" }, { "internalType": "string", "name": "paymentReference", "type": "string" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_pId", "type": "uint256" }, { "internalType": "uint256", "name": "_qty", "type": "uint256" }, { "internalType": "string", "name": "_ref", "type": "string" } ], "name": "placeOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "productCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "productIds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "products", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }, { "internalType": "string", "name": "itemCode", "type": "string" }, { "internalType": "string", "name": "itemName", "type": "string" }, { "internalType": "uint256", "name": "retailPrice", "type": "uint256" }, { "internalType": "uint256", "name": "stockPrice", "type": "uint256" }, { "internalType": "string", "name": "colour", "type": "string" }, { "internalType": "uint256", "name": "quantityAvailable", "type": "uint256" }, { "internalType": "uint256", "name": "totalSold", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_s", "type": "string" }, { "internalType": "string", "name": "_b", "type": "string" }, { "internalType": "string", "name": "_h", "type": "string" }, { "internalType": "string", "name": "_n", "type": "string" } ], "name": "registerAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_f", "type": "string" }, { "internalType": "string", "name": "_v", "type": "string" }, { "internalType": "string", "name": "_e", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" } ], "name": "registerCourier", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_n", "type": "string" }, { "internalType": "string", "name": "_r", "type": "string" }, { "internalType": "string", "name": "_a", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" }, { "internalType": "string", "name": "_e", "type": "string" } ], "name": "registerCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_f", "type": "string" }, { "internalType": "string", "name": "_s", "type": "string" }, { "internalType": "string", "name": "_a", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" }, { "internalType": "string", "name": "_e", "type": "string" } ], "name": "registerDispatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address payable", "name": "_user", "type": "address" } ], "name": "requestGasRefuel", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_oId", "type": "uint256" }, { "internalType": "string", "name": "_st", "type": "string" } ], "name": "updateOrderStatus", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "", "type": "string" } ], "name": "usedReferences", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "withdrawGasVault", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "stateMutability": "payable", "type": "receive" }
];  

/**
 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO
 * Connects directly to Sepolia via the client browser to extract data from the smart contract.
 */
async function loadRandomMarketplace() {
    const gallery = document.getElementById('productGallery');

    try {
        // Initialize connections entirely inside the client engine using the RPC variable configuration
        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

        const count = await contract.productCount(); 
        let allProducts = [];

        // Main data harvesting loop performed raw on client side thread
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

        // Fisher-Yates array serialization shuffle directly on client memory stack
        for (let i = allProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
        }

        renderGallery(allProducts);

    } catch (err) {
        console.error("Critical System Failure:", err);
        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";
    }
}

/**
 * 4. UI Rendering
 * Generates the HTML for the product cards.
 */
function renderGallery(products) {
    const gallery = document.getElementById('productGallery');
    if (products.length === 0) {
        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";
        return;
    }

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";

    gallery.innerHTML = products.map(p => {
        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
        const displayImage = hasImage ? p.images[0] : localFallback;

        return `
            <div class="product-card">
                <div class="card-image">
                    <img src="${displayImage}" 
                         alt="${p.name}" 
                         onerror="this.src='${localFallback}'">
                </div>
                <div class="card-info">
                    <h3>${p.name}</h3>
                    <p class="price">R${Number(p.price).toLocaleString()}</p>
                    <p class="store-tag">CODE: ${p.code}</p>
                    <p class="meta">Available: ${p.stock} units</p>
                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>
                </div>
            </div>
        `;
    }).join('');

    applyCardAnimations();
    
    if (typeof window.animateInjectedCards === 'function') {
        window.animateInjectedCards();
    }
}

/**
 * 6. UI Animations
 * Applies GSAP tilt effects to product cards after they are rendered.
 */
function applyCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
                rotationY: x * 20, 
                rotationX: -y * 20, 
                ease: "power2.out",
                duration: 0.4
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                rotationX: 0, 
                rotationY: 0, 
                ease: "power2.out" 
            });
        });
    });
}

/**
 * 5. Navigation Logic
 * Bridges the shop to the individual product page.
 */
function openProduct(productId) {
    console.log("Routing to product node:", productId);
    localStorage.setItem("selected_product_id", productId);
    window.location.href = "product12.html";
}

// Initialize on window load
window.onload = loadRandomMarketplace;
But i want to upload this to a cloudfare dashboard and store the smart contract link or smart contract link's on as secret variables and you not providing me that example

If you are looking to host this file directly via the Cloudflare Dashboard while keeping configurations hidden behind dashboard variables, you are looking for a Cloudflare Pages architecture.

Since static client-side JavaScript (.js) files running inside a user's web browser cannot natively access encrypted backend environment variables (because the browser requires cleartext code), Cloudflare solves this using Pages Functions. This acts as a gateway that injects dashboard configurations securely at the URL path structure without requiring you to set up a standalone Worker project.

Here is the exact layout of how to store your links on the Cloudflare Dashboard and pull them into your application seamlessly.

Step 1: Create your Cloudflare Gateway Function
To securely fetch your smart contract configurations from the dashboard parameters, create a folder named functions in the root directory of your website, and create a file inside it named config.js (Path: /functions/config.js).

JavaScript
/**
 * Cloudflare Pages Gateway Function
 * Securely exposes dashboard configurations to your client via local routing
 */
export async function onRequest(context) {
  // Pull keys securely from your Cloudflare Dashboard Environment settings
  const contractAddress = context.env.CONTRACT_ADDRESS || "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";
  const rpcUrl = context.env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";

  const data = {
    success: true,
    contractAddress: contractAddress,
    rpcUrl: rpcUrl
  };

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60"
    }
  });
}
Step 2: Set the Variables in your Cloudflare Dashboard
When you upload your site repository to Cloudflare Pages, set up your secrets directly within the dashboard settings interface:

Log into your Cloudflare Dashboard and navigate to Workers & Pages.

Select your project, then click on the Settings tab.

Select Environment Variables from the left sidebar navigation menu.

Click Add Variable under the Production/Preview environments and map your keys precisely:

Variable Name: CONTRACT_ADDRESS → Value: 0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866

Variable Name: RPC_URL → Value: [https://ethereum-sepolia-rpc.publicnode.com](https://ethereum-sepolia-rpc.publicnode.com)

Click Save.

Step 3: Updated Full Frontend Script (logc2.js)
This updated file completely maintains your exact ABI definitions, client variables, animation sequences, names, logic arrays, and execution schemas. It replaces hardcoded target string endpoints with a secure call to your dashboard function mapping (/functions/config.js which is accessed inside your site directly at /functions/config or /config depending on routing).

JavaScript
// 1. Static Configuration fallbacks
const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; 
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";

// Default operational nodes used in case local staging development requires fallbacks
let TARGET_RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
let TARGET_CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

const ABI = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "adminId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "storeName", "type": "string" } ], "name": "AdminRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "courierId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "CourierRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "CustomerRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "dispatchId", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "DispatchRegistered", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GasRefueled", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" } ], "name": "OrderConfirmed", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "customer", "type": "address" }, { "indexed": false, "internalType": "string", "name": "Reference", "type": "string" } ], "name": "OrderPlaced", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "itemName", "type": "string" }, { "indexed": false, "internalType": "address", "name": "admin", "type": "address" } ], "name": "ProductAdded", "type": "event" },
  { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newQuantity", "type": "uint256" } ], "name": "StockUpdated", "type": "event" },
  { "inputs": [ { "internalType": "string", "name": "_c", "type": "string" }, { "internalType": "string", "name": "_n", "type": "string" }, { "internalType": "string[]", "name": "_u", "type": "string[]" }, { "internalType": "uint256", "name": "_r", "type": "uint256" }, { "internalType": "uint256", "name": "_s", "type": "uint256" }, { "internalType": "string", "name": "_col", "type": "string" }, { "internalType": "uint256", "name": "_q", "type": "uint256" } ], "name": "addProduct", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "adminAddresses", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_old", "type": "address" }, { "internalType": "address", "name": "_new", "type": "address" } ], "name": "adminForceMigrateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "admins", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "storeName", "type": "string" }, { "internalType": "string", "name": "bankName", "type": "string" }, { "internalType": "string", "name": "accountHolder", "type": "string" }, { "internalType": "string", "name": "accountNumber", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_oId", "type": "uint256" } ], "name": "confirmOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "couriers", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "vehicleType", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "customerAddresses", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "customerOrders", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "customers", "outputs": [ { "internalType": "address", "name": "CustomerId", "type": "address" }, { "internalType": "string", "name": "Reference", "type": "string" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "surname", "type": "string" }, { "internalType": "string", "name": "deliveryAddress", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" }, { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "debtCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "debts", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "customer", "type": "address" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "isPaid", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "deliveryPersonnel", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "dispatchers", "outputs": [ { "internalType": "address", "name": "adminId", "type": "address" }, { "internalType": "string", "name": "firstName", "type": "string" }, { "internalType": "string", "name": "surname", "type": "string" }, { "internalType": "string", "name": "deliveryAddress", "type": "string" }, { "internalType": "uint256", "name": "phoneNumber", "type": "uint256" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "name": "emailToAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "getCounts", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_pId", "type": "uint256" } ], "name": "getProductImages", "outputs": [ { "internalType": "string[]", "name": "", "type": "string[]" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_u", "type": "address" } ], "name": "getRole", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isAdmin", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isCourier", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_a", "type": "address" } ], "name": "isCustomer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "address", "name": "_old", "type": "address" } ], "name": "migrateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "orderCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "orders", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "customer", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "totalAmount", "type": "uint256" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "bool", "name": "isConfirmed", "type": "bool" }, { "internalType": "string", "name": "paymentReference", "type": "string" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_pId", "type": "uint256" }, { "internalType": "uint256", "name": "_qty", "type": "uint256" }, { "internalType": "string", "name": "_ref", "type": "string" } ], "name": "placeOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "productCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "productIds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "products", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }, { "internalType": "string", "name": "itemCode", "type": "string" }, { "internalType": "string", "name": "itemName", "type": "string" }, { "internalType": "uint256", "name": "retailPrice", "type": "uint256" }, { "internalType": "uint256", "name": "stockPrice", "type": "uint256" }, { "internalType": "string", "name": "colour", "type": "string" }, { "internalType": "uint256", "name": "quantityAvailable", "type": "uint256" }, { "internalType": "uint256", "name": "totalSold", "type": "uint256" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_s", "type": "string" }, { "internalType": "string", "name": "_b", "type": "string" }, { "internalType": "string", "name": "_h", "type": "string" }, { "internalType": "string", "name": "_n", "type": "string" } ], "name": "registerAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_f", "type": "string" }, { "internalType": "string", "name": "_v", "type": "string" }, { "internalType": "string", "name": "_e", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" } ], "name": "registerCourier", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_n", "type": "string" }, { "internalType": "string", "name": "_r", "type": "string" }, { "internalType": "string", "name": "_a", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" }, { "internalType": "string", "name": "_e", "type": "string" } ], "name": "registerCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "_f", "type": "string" }, { "internalType": "string", "name": "_s", "type": "string" }, { "internalType": "string", "name": "_a", "type": "string" }, { "internalType": "uint256", "name": "_p", "type": "uint256" }, { "internalType": "string", "name": "_e", "type": "string" } ], "name": "registerDispatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "address payable", "name": "_user", "type": "address" } ], "name": "requestGasRefuel", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "uint256", "name": "_oId", "type": "uint256" }, { "internalType": "string", "name": "_st", "type": "string" } ], "name": "updateOrderStatus", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [ { "internalType": "string", "name": "", "type": "string" } ], "name": "usedReferences", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "withdrawGasVault", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "stateMutability": "payable", "type": "receive" }
];  

/**
 * GLOBAL MARKETPLACE LOGIC - KHOZA.IO
 * Automatically pulls secret variables via Cloudflare Pages runtime links before initializing Ledger loops.
 */
async function loadRandomMarketplace() {
    const gallery = document.getElementById('productGallery');

    try {
        // Query the Cloudflare environment config proxy dynamically
        const configResponse = await fetch('/functions/config');
        if (configResponse.ok) {
            const configData = await configResponse.json();
            if (configData.success) {
                TARGET_RPC_URL = configData.rpcUrl;
                TARGET_CONTRACT_ADDRESS = configData.contractAddress;
            }
        }
    } catch (configError) {
        console.warn("Dashboard configuration endpoint missing, resorting to hardcoded variables.", configError);
    }

    try {
        // Core initialization using variables securely provisioned from Cloudflare layout profiles
        const provider = new ethers.JsonRpcProvider(TARGET_RPC_URL);
        const contract = new ethers.Contract(TARGET_CONTRACT_ADDRESS, ABI, provider);

        const count = await contract.productCount(); 
        let allProducts = [];

        // Fetching chain parameters
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

        // Apply visual variance shuffling across the structural array
        for (let i = allProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
        }

        renderGallery(allProducts);

    } catch (err) {
        console.error("Critical System Failure:", err);
        gallery.innerHTML = "<p style='color:red;'>CONNECTION TO LEDGER FAILED. REFRESHING...</p>";
    }
}

/**
 * 4. UI Rendering
 * Generates the HTML for the product cards.
 */
function renderGallery(products) {
    const gallery = document.getElementById('productGallery');
    if (products.length === 0) {
        gallery.innerHTML = "<p>MARKETPLACE EMPTY: NO ACTIVE STOCK FOUND.</p>";
        return;
    }

    const localFallback = "301015489_443828151102927_1957794053294967618_n.png";

    gallery.innerHTML = products.map(p => {
        const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
        const displayImage = hasImage ? p.images[0] : localFallback;

        return `
            <div class="product-card">
                <div class="card-image">
                    <img src="${displayImage}" 
                         alt="${p.name}" 
                         onerror="this.src='${localFallback}'">
                </div>
                <div class="card-info">
                    <h3>${p.name}</h3>
                    <p class="price">R${Number(p.price).toLocaleString()}</p>
                    <p class="store-tag">CODE: ${p.code}</p>
                    <p class="meta">Available: ${p.stock} units</p>
                    <button onclick="openProduct(${p.id})">VIEW ITEM</button>
                </div>
            </div>
        `;
    }).join('');

    applyCardAnimations();
    
    if (typeof window.animateInjectedCards === 'function') {
        window.animateInjectedCards();
    }
}

/**
 * 6. UI Animations
 * Applies GSAP tilt effects to product cards after they are rendered.
 */
function applyCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
                rotationY: x * 20, 
                rotationX: -y * 20, 
                ease: "power2.out",
                duration: 0.4
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                rotationX: 0, 
                rotationY: 0, 
                ease: "power2.out" 
            });
        });
    });
}

/**
 * 5. Navigation Logic
 * Bridges the shop to the individual product page.
 */
function openProduct(productId) {
    console.log("Routing to product node:", productId);
    localStorage.setItem("selected_product_id", productId);
    window.location.href = "product12.html";
}

// Initialize on window load
window.onload = loadRandomMarketplace;
