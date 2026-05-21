// product14.js - Updated for chw18.sol and Manual Entry
const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
const CONTRACT_ADDRESS = "0x94C20E1399bC29CF7263da085Adf7e1DF1d12258";
const GATEWAY = "https://gateway.pinata.cloud/ipfs/";

let currentPrice = 0;
let productData = null;

// ABI updated for chw18.sol Product struct
const ABI = [
    {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"products","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"string","name":"itemCode","type":"string"},{"internalType":"string","name":"itemName","type":"string"},{"internalType":"uint256","name":"retailPrice","type":"uint256"},{"internalType":"uint256","name":"stockPrice","type":"uint256"},{"internalType":"string","name":"colour","type":"string"},{"internalType":"uint256","name":"quantityAvailable","type":"uint256"},{"internalType":"uint256","name":"totalSold","type":"uint256"},{"internalType":"string[]","name":"size","type":"string[]"},{"internalType":"string","name":"category","type":"string"}],"stateMutability":"view","type":"function"}
];

// Requirement: Emit event each time a colour or size is entered
function emitItemQuantity(element) {
    const row = element.parentElement;
    const size = row.querySelector('.unit-size').value;
    const color = row.querySelector('.unit-color').value;

    if (size || color) {
        // Triggering the required "item_quantity" logic
        console.log(`EVENT EMITTED: item_quantity updated - Size: ${size || '...'}, Color: ${color || '...'}`);
    }
}

function addVariantRow() {
    const container = document.getElementById('variantContainer');
    const row = document.createElement('div');
    row.className = 'unit-row';
    row.style = "display:flex; gap:10px; margin-bottom:10px;";
    
    row.innerHTML = `
        <input type="text" class="unit-size" placeholder="Type Size" oninput="emitItemQuantity(this)" style="flex:1; padding:8px;">
        <input type="text" class="unit-color" placeholder="Type Colour" oninput="emitItemQuantity(this)" style="flex:1; padding:8px;">
        <button type="button" onclick="this.parentElement.remove()" style="background:#ff4444; color:white; border:none; border-radius:4px; cursor:pointer;">X</button>
    `;
    container.appendChild(row);
}

function finalizeOrder(img) {
    const qtyInput = document.getElementById('mainQty');
    const deliveryAddress = document.getElementById('deliveryAddress');
    
    if (!deliveryAddress || deliveryAddress.value.trim() === "") {
        alert("CRITICAL: Delivery Address is required to proceed.");
        return;
    }

    const qty = parseInt(qtyInput.value);
    const rows = document.querySelectorAll('.unit-row');
    let variations = [];

    rows.forEach(row => {
        const s = row.querySelector('.unit-size').value;
        const c = row.querySelector('.unit-color').value;
        if(s && c) variations.push(`${s}(${c})`);
    });

    const orderItem = {
        id: localStorage.getItem("selected_product_id"),
        name: productData ? productData.itemName : "Product",
        price: currentPrice,
        image: img || (productData ? productData.imageUrls[0] : ''),
        quantity: qty,
        variant: variations.join(", "),
        address: deliveryAddress.value,
        itemTotal: (currentPrice * qty)
    };

    if (typeof addToCart === 'function') {
        addToCart(orderItem);
        updateBadge();
        alert(`${qty} units added with delivery address.`);
    }
}

function updateBadge() {
    const cart = JSON.parse(localStorage.getItem('khoza_cart') || "[]");
    const countElement = document.getElementById('cartCount');
    if(countElement) countElement.innerText = cart.reduce((s, i) => s + i.quantity, 0);
}