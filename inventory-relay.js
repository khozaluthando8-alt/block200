/**
 * STANDALONE BLOCKCHAIN INVENTORY LOGIC
 * Replaces script3.js | No Supabase
 */



// 1. Configuration - Replace with your details
const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb";
const PRIVATE_KEY = "0xe8de15cf25e972c28a220f003230e577b50542dd7b0406030041428d8ab741bb"; // Must be funded with testnet ETH
const CONTRACT_ADDRESS = "0xc08d3869d2C11AadE44962261431B52A186C95E3";

// Pinata API Keys (Get these for free at pinata.cloud)
const PINATA_JWT = "d62d60c7b04b6416be93";

// ABI for the KhozaLogistics functions
const ABI = [
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
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "confirmOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productId",
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
        "name": "_accHolder",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_accNum",
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
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_vehicleType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phoneNumber",
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
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_ref",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_address",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phone",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_email",
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
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_surname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_address",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phoneNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_email",
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
    "inputs": [],
    "name": "withdrawGasVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
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
    "inputs": [],
    "name": "getAdminCount",
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
    "inputs": [],
    "name": "getCustomerCount",
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
        "name": "_user",
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
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

/**
 * Uploads images to IPFS via Pinata
 */
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



async function uploadProductStandalone() {
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
}



async function syncInventoryToBlockchain(e) {
    e.preventDefault();
    const btn = document.querySelector('button[type="submit"]');
    
    try {
        btn.disabled = true;
        btn.innerText = "Processing Variations...";

        const colors = document.getElementById('colorNames').value.split(',').map(c => c.trim()).filter(c => c !== "");
        const sizes = Array.from(document.querySelectorAll('.size-opt:checked')).map(s => s.value);
        const retailPrice = ethers.parseUnits(document.getElementById('retailPrice').value, 0);
        const stockPrice = ethers.parseUnits(document.getElementById('stockPrice').value, 0);
        const qty = ethers.parseUnits(document.getElementById('qtyPerSize').value, 0);
        const itemCode = document.getElementById('itemCode').value;
        const itemName = document.getElementById('itemName').value;

        // ... image upload logic stays the same ...

        for (const color of colors) {
            const sizeList = sizes.join('/');
            const displayTitle = `${itemName} [${color}] [${sizeList}]`;

            btn.innerText = `Syncing ${color}...`;
            
            // Sending BOTH retail and stock prices to the ledger
            const tx = await contract.addProduct(
                itemCode, 
                displayTitle, 
                uploadedUrls, 
                retailPrice, 
                stockPrice, 
                qty
            );
            await tx.wait();
        }

        alert("Inventory synced with dual pricing!");
        location.reload();
    } catch (err) {
        console.error(err);
        btn.disabled = false;
        btn.innerText = "Upload Product";
    }
}
/**
 * Main function: Uploads images and then registers product on Blockchain
 */

// Bind to form
document.getElementById('addItemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    uploadProductStandalone();
});