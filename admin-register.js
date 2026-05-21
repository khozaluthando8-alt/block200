// 1. Configuration - Replace with your details
const PRIVATE_KEY = "0x38c7c4a5de74883af146fd14cc61d6f89313bbce1ad6c931b25dd1efcfb86a9d"; // Must be funded with testnet ETH
  // Use your existing RPC and Contract configuration[cite: 3]
              const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"; 
       // const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";
        const CONTRACT_ADDRESS = "0x5FC196d4379A8c555866d665191f58a02982c6b3";


// Pinata API Keys (Get these for free at pinata.cloud)
//const PINATA_JWT = "d62d60c7b04b6416be93";


// Pinata API Keys (Get these for free at pinata.cloud)
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
        "indexed": false,
        "internalType": "string",
        "name": "variation",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "colour",
        "type": "string"
      }
    ],
    "name": "ItemQuantity",
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
        "internalType": "address",
        "name": "customer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_reference",
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
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "ProductAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_itemCode",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_itemName",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_urls",
        "type": "string[]"
      },
      {
        "internalType": "uint256",
        "name": "_retail",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_stockPrice",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_colour",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_qty",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_size",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getProduct",
    "outputs": [
      {
        "components": [
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
            "internalType": "string[]",
            "name": "imageUrls",
            "type": "string[]"
          },
          {
            "internalType": "uint256",
            "name": "retailPrice",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
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
          },
          {
            "internalType": "string[]",
            "name": "size",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          }
        ],
        "internalType": "struct KhozaLogistics.Product",
        "name": "",
        "type": "tuple"
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
        "internalType": "string",
        "name": "status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Reference",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "deliveryAddress",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
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
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_addr",
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
        "internalType": "string",
        "name": "description",
        "type": "string"
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
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_store",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bank",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_holder",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_acc",
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
        "name": "_ref",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_fn",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_sn",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_addr",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_ph",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_em",
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
  }
];
    // 1. Real-time ID Generation
    function updateIdentity() {
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const idBox = document.getElementById('idBox');
        const walletAddr = document.getElementById('walletAddr');

        if(email.length > 5 && pass.length > 5) {
            // Generate the address from the credentials
            const address = ethers.computeAddress(ethers.id(email + pass + "KHOZA_SALT"));
            walletAddr.innerText = address;
            idBox.style.display = "block";
        } else {
            idBox.style.display = "none";
        }
    }

    // 2. Blockchain Submission
    async function submitToBlockchain() {
        const status = document.getElementById('status');
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        try {
            status.innerText = "Initializing Provider...";
            const provider = new ethers.JsonRpcProvider(RPC_URL);
            const userWallet = new ethers.Wallet(ethers.id(email + pass + "KHOZA_SALT"), provider);

            // Step A: Fund the newly generated ID so it can pay for its own registration
            status.innerText = "Requesting Gas for " + userWallet.address.substring(0,6) + "...";
            const master = new ethers.Wallet(PRIVATE_KEY, provider);
            const fundTx = await master.sendTransaction({
                to: userWallet.address,
                value: ethers.parseEther("0.005")
            });
            await fundTx.wait();

            // Step B: Call the Smart Contract
            status.innerText = "Registering ID on-chain...";
            const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, userWallet);
            
            const tx = await contract.registerAdmin(
                document.getElementById('storeName').value,
                document.getElementById('bankName').value,
                document.getElementById('accHolder').value,
                document.getElementById('accNum').value
            );
            await tx.wait();

            status.innerText = "SUCCESS: Profile linked to " + userWallet.address;
                saveSession(userWallet.privateKey);

    
        } catch (e) {
            status.innerText = "Error: " + (e.reason || e.message);
        }
    }


     //38c7c4a5de74883af146fd14cc61d6f89313bbce1ad6c931b25dd1efcfb86a9d
        function saveSession(key) {
            localStorage.setItem("admin_session_key", key);
            localStorage.setItem("user_role", "admin");
            setTimeout(() => { window.location.href = "inventory8.html"; }, 2000);
        }
