/**
 * STANDALONE BLOCKCHAIN INVENTORY LOGIC
 * Replaces script3.js | No Supabase
 */

// 1. Configuration - Replace with your details
//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";
//const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH
//const CONTRACT_ADDRESS = "0xf519Ac521f1d683b518BB07F5Bf9D3d3f7Fe25A5";

// Pinata API Keys (Get these for free at pinata.cloud)
//const PINATA_JWT = "d62d60c7b04b6416be93";


// Pinata API Keys (Get these for free at pinata.cloud)
//const PINATA_JWT = "d62d60c7b04b6416be93";
// ABI for the KhozaLogistics functions
//const ABI = const CONTRACT_ADDRESS = "0x5CE863517D9dafca81cEe5FaC6daa37F476eB4Ef";

// Pinata API Keys (Get these for free at pinata.cloud)
//const PINATA_JWT = "d62d60c7b04b6416be93";


// Pinata API Keys (Get these for free at pinata.cloud)
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";
// ABI for the KhozaLogistics functions

       const ABI=  [
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


//const provider = new ethers.JsonRpcProvider(RPC_URL);
//const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

//const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);   

/**
 * Uploads images to IPFS via Pinata
 */
/**async function uploadToIPFS(file) {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: { Authorization: `Bearer ${PINATA_JWT}` },
        body: formData
    });
    
    const json = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${json.IpfsHash}`;
}**/



/**async function uploadProductStandalone() {
    const btn = document.querySelector('button[type="submit"]');
    
    try {
        btn.disabled = true;
        btn.innerText = "Processing Variations...";

        // 1. Get Custom Colors
        const colorInput = document.getElementById('colorNames').value;
        const colors = colorInput.split(',').map(c => c.trim()).filter(c => c !== "");

        // 2. Get Selected Sizes
        const sizeCheckboxes = document.querySelectorAll('.size-opt:checked');
        const sizes = Array.from(sizeCheckboxes).map(s => s.value);

        if (colors.length === 0 || sizes.length === 0) {
            throw new Error("Please provide at least one color and select one size.");
        }

        // 3. Upload Images (Existing logic)
        const inputs = document.querySelectorAll('.product-image-input');
        const uploadedUrls = [];
        for (const input of inputs) {
            if (input.files[0]) {
                const url = await uploadToIPFS(input.files[0]);
                uploadedUrls.push(url);
            }
        }

        // 4. Loop and Sync to Blockchain
        // We create one ledger entry per combination to keep stock tracking accurate
        for (const color of colors) {
            const sizeList = sizes.join('/'); // e.g., "S/M/L"
            const itemCode = document.getElementById('itemCode')?.value || "GEN";
            const itemName = document.getElementById('itemName').value;
            const price = ethers.parseUnits(document.getElementById('price').value, 0);
            const stock_price = ethers.parseUnits(document.getElementById('price').value, 0);

            const qty = ethers.parseUnits(document.getElementById('qtyPerSize').value, 0);

            // Metadata includes the specific named color and the size range
            const displayTitle = `${itemName} [Color: ${color}] [Sizes: ${sizeList}]`;

            btn.innerText = `Syncing ${color}...`;
            
            const tx = await contract.addProduct(
                itemCode, 
                displayTitle, 
                uploadedUrls, 
                price,
                stock_price, 
 
                qty
            );
            await tx.wait();
        }

        alert(`Success! Successfully added ${colors.length} color variations to the blockchain.`);
        location.reload();

    } catch (err) {
        console.error(err);
        alert(err.message);
        btn.disabled = false;
        btn.innerText = "Upload Product";
    }
}**/

/** * CONFIGURATION 
 * Get your JWT from https://app.pinata.cloud/ 
 */

/**
 * Helper: Uploads a single file to IPFS
 */
/**async function uploadToIPFS(file) {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${PINATA_JWT}`
        },
        body: formData
    });

    if (!res.ok) throw new Error("IPFS Upload Failed");

    const json = await res.json();
    // This returns the public gateway link to the image
    return `https://gateway.pinata.cloud/ipfs/${json.IpfsHash}`;
}**/
/**
 * Main function: Updated to handle multiple IPFS uploads
 */
/**
 * STANDALONE BLOCKCHAIN INVENTORY LOGIC
 */

// 1. Configuration
//const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";
const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; 
//const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";
//const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE"; // Note: Ensure this is your full JWT, not just the API Key

//const provider = new ethers.JsonRpcProvider(RPC_URL);
// wallet = new ethers.Wallet(PRIVATE_KEY, provider);
//const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

/**
 * Uploads a file to IPFS via Pinata
 */
  // Use your existing RPC and Contract configuration[cite: 3]
        const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
        const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

// 1. AUTOMATIC WALLET SELECTION
// Retrieves the key saved during registration
const SESSION_KEY = localStorage.getItem("admin_session_key");

if (!SESSION_KEY) {
    alert("No active session found. Please login/register.");
    window.location.href = "register4.html";
}

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(SESSION_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

// 2. AUTHENTICATION GUARD
async function checkAdminAccess() {
    try {
        const userAddress = wallet.address; 
        console.log("Checking access for dynamic wallet:", userAddress);
        
        const role = await contract.getRole(userAddress);
        
        if (role !== "admin") {
            alert("Access Denied: Wallet " + userAddress + " is not a registered Admin.");
            localStorage.removeItem("admin_session_key"); // Clear invalid key
            window.location.href = "register4.html";
            return false;
        }

        const profile = await contract.admins(userAddress);
        const storeDisplay = document.getElementById('storeDisplayName');
        if(storeDisplay) storeDisplay.innerText = profile.storeName;

        return true;
    } catch (error) {
        console.error("Auth Check Failed:", error);
        return false;
    }
}

// Initial Run
checkAdminAccess();



async function uploadToIPFS(file) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: { Authorization: `Bearer ${PINATA_JWT}` },
        body: formData
    });
    const json = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${json.IpfsHash}`;
}

async function syncInventoryToBlockchain(e) {
    e.preventDefault();
    const btn = document.querySelector('button[type="submit"]');
    
    try {
        btn.disabled = true;
        btn.innerText = "Processing...";

        const itemCode = document.getElementById('itemCode').value;
        const itemName = document.getElementById('itemName').value;
        const colors = document.getElementById('colorNames').value.split(',').map(c => c.trim());
        const sizes = Array.from(document.querySelectorAll('.size-opt:checked')).map(s => s.value);
        const retail = BigInt(document.getElementById('retailPrice').value);
        const stock = BigInt(document.getElementById('stockPrice').value);
        const qty = BigInt(document.getElementById('qtyPerSize').value);

        const imageInputs = document.querySelectorAll('.product-image-input');
        let urls = [];
        for (let input of imageInputs) {
            if (input.files[0]) {
                const url = await uploadToIPFS(input.files[0]);
                urls.push(url);
            }
        }

        for (let color of colors) {
            btn.innerText = `Syncing ${color}...`;
            const tx = await contract.addProduct(itemCode, `${itemName} (${sizes.join('/')})`, urls, retail, stock, color, qty);
            await tx.wait();
        }

        alert("Inventory Synced Successfully!");
        location.reload();
    } catch (err) {
        alert("Error: " + (err.reason || err.message));
        btn.disabled = false;
        btn.innerText = "Sync to Blockchain";
    }
}

// Initialize
window.addEventListener('load', async () => {
    const hasAccess = await checkAdminAccess();
    if (hasAccess) {
        document.getElementById('addItemForm').addEventListener('submit', syncInventoryToBlockchain);
    }
});