/**
 * DYNAMIC BLOCKCHAIN INVENTORY LOGIC + IPFS
 */

//const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
//const CONTRACT_ADDRESS = "0x2139e2C85cbD38cCf774D624604d73ff42552fc7";
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmExODhkYy01ZGJmLTQwMjItOTliMC0wNmFiNTk4Nzg2NjMiLCJlbWFpbCI6Imtob3phbHV0aGFuZG84QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2M5YTA2ZmU0ZDM5YjZmMDg4ZCIsInNjb3BlZEtleVNlY3JldCI6ImE3YTY2NWI2ODBiYWJmNjIyNmZkYjdkNGIzMTc4Y2JhMGVmZjUwNTBkNzhlNjg3ZDZhODUxMmY3Y2I0MGU5NTUiLCJleHAiOjE4MDg2NjA3OTF9.KCYCXSVX8-qNzoeXVYsDt3Fn1OZeEAnkSC5cLOxthkE";

// 1. DYNAMIC WALLET LOADING
const SESSION_KEY = localStorage.getItem("admin_session_key");

if (!SESSION_KEY) {
    alert("No session found. Please register or login first.");
    window.location.href = "register4.html";
}

      // 1. Configuration
     
        const MASTER_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; 

      const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";




// Pinata API Keys (Get these for free at pinata.cloud)
//const PINATA_JWT = "d62d60c7b04b6416be93";


// Pinata API Keys (Get these for free at pinata.cloud)
//const PINATA_JWT = "d62d60c7b04b6416be93";
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
 
   
  
        
    
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(SESSION_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);
/** * CONFIGURATION 
 * Get your JWT from https://app.pinata.cloud/ 
 */
//const PINATA_JWT = "YOUR_PINATA_JWT_TOKEN"; 

/**
 * Helper: Uploads a single file to IPFS
 */
async function uploadToIPFS(file) {
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
}

/**
 * Main function: Updated to handle multiple IPFS uploads
 */
async function syncInventoryToBlockchain(e) {
    e.preventDefault();
    const btn = document.querySelector('button[type="submit"]');
    const imageInputs = document.querySelectorAll('.product-image-input');
    const uploadedUrls = [];

    try {
        btn.disabled = true;
        btn.innerText = "Uploading to IPFS...";

        // 1. Loop through the file inputs and upload to IPFS
        for (const input of imageInputs) {
            if (input.files[0]) {
                const ipfsUrl = await uploadToIPFS(input.files[0]);
                uploadedUrls.push(ipfsUrl);
                console.log("Uploaded:", ipfsUrl);
            }
        }

        if (uploadedUrls.length === 0) {
            throw new Error("Please select at least one image.");
        }

        // 2. Collect other form data
        const colors = document.getElementById('colorNames').value.split(',').map(c => c.trim());
        const retailPrice = ethers.parseUnits(document.getElementById('retailPrice').value, 0);
        const stockPrice = ethers.parseUnits(document.getElementById('stockPrice').value, 0);

        // 3. Logic for variation sync (as discussed previously)
        for (const color of colors) {
            btn.innerText = `Syncing ${color} to Ledger...`;
            
            // This sends the ARRAY of IPFS links directly to your Smart Contract
            const tx = await contract.addProduct(
                document.getElementById('itemCode').value,
                `${document.getElementById('itemName').value} (${color})`,
                uploadedUrls, // The array of IPFS links
                retailPrice,
                stockPrice,
                ethers.parseUnits(document.getElementById('qtyPerSize').value, 0)
            );
            await tx.wait();
        }

        alert("Success! Images are live on IPFS and the Ledger is updated.");
        location.reload();

    } catch (err) {
        console.error(err);
        alert("Upload Error: " + err.message);
        btn.disabled = false;
        btn.innerText = "Upload Product & Sync Chain";
    }
}

// Function to generate the UI for individual size/color stock
function generateStockGrid() {
    const colorInput = document.getElementById('colorNames').value;
    const colors = colorInput.split(',').map(c => c.trim()).filter(c => c !== "");
    const selectedSizes = Array.from(document.querySelectorAll('.size-opt:checked')).map(s => s.value);
    const matrixContainer = document.getElementById('stockMatrix');

    if (colors.length === 0 || selectedSizes.length === 0) {
        matrixContainer.innerHTML = '<p style="font-size: 0.8rem; color: #888;">Enter colors and select sizes to set stock levels.</p>';
        return;
    }

    let html = '<table style="width:100%; border-collapse: collapse; font-size: 0.8rem;">';
    html += '<tr><th>Variant</th><th>Quantity</th></tr>';

    colors.forEach(color => {
        selectedSizes.forEach(size => {
            const id = `qty_${color}_${size}`;
            html += `
                <tr>
                    <td style="padding: 5px;">${color} - ${size}</td>
                    <td><input type="number" class="variant-qty" data-variant="${color}-${size}" id="${id}" value="0" min="0" style="margin:2px; padding:5px;"></td>
                </tr>`;
        });
    });

    html += '</table>';
    matrixContainer.innerHTML = html;
}

// Update your existing addItemForm submit listener
document.getElementById('addItemForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // 1. Sum up all individual quantities to get the Total Quantity for the Contract
    let totalQty = 0;
    const variantInputs = document.querySelectorAll('.variant-qty');
    const stockDetails = []; // To store breakdown for Pinata/Metadata

    variantInputs.forEach(input => {
        const val = parseInt(input.value) || 0;
        totalQty += val;
        stockDetails.push({
            variant: input.getAttribute('data-variant'),
            qty: val
        });
    });

    if (totalQty <= 0) {
        alert("Total quantity must be greater than 0");
        return;
    }

    // 2. Proceed with your existing Blockchain Sync logic
    // Use 'totalQty' as the value for quantityAvailable in your contract call
    console.log("Total Stock to Sync:", totalQty);
    console.log("Variant Breakdown:", stockDetails);
    
    // ... rest of your ethers.js contract.addItem logic ...
});

// 3. AUTHENTICATION GUARD
async function checkAdminAccess() {
    try {
        const userAddress = wallet.address;
        console.log("Checking dynamic wallet:", userAddress);

        // Check the role using your contract's logic
        const role = await contract.getRole(userAddress);
        
        if (role !== "admin") {
            alert("Access Denied: Wallet " + userAddress + " is not registered.");
            window.location.href = "register4.html";
            return false;
        }

        const profile = await contract.admins(userAddress);
        const storeDisplay = document.getElementById('storeDisplayName');
        if (storeDisplay) storeDisplay.innerText = profile.storeName;
        return true;
    } catch (error) {
        console.error("Auth Failed:", error);
        return false;
    }
}



// 5. INITIALIZE
window.addEventListener('load', async () => {
    const hasAccess = await checkAdminAccess();
    if (hasAccess) {
        const form = document.getElementById('addItemForm');
        if (form) form.addEventListener('submit', syncInventoryToBlockchain);
    }
});