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
