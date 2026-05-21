   const RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
       // const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";
   
           const CONTRACT_ADDRESS = "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";

        const GATEWAY = "https://gateway.pinata.cloud/ipfs/";
        
        let currentPrice = 0;
        let totalImages = 0;
        let productData = null;

        const ABI = [
            {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"products","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"string","name":"itemCode","type":"string"},{"internalType":"string","name":"itemName","type":"string"},{"internalType":"uint256","name":"retailPrice","type":"uint256"},{"internalType":"uint256","name":"stockPrice","type":"uint256"},{"internalType":"string","name":"colour","type":"string"},{"internalType":"uint256","name":"quantityAvailable","type":"uint256"},{"internalType":"uint256","name":"totalSold","type":"uint256"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"uint256","name":"_pId","type":"uint256"}],"name":"getProductImages","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"}
        ];

        async function loadDetails() {
            const productId = localStorage.getItem("selected_product_id");
            if (!productId) return;

            try {
                const provider = new ethers.JsonRpcProvider(RPC_URL);
                const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
                const [p, rawImages] = await Promise.all([
                    contract.products(productId),
                    contract.getProductImages(productId)
                ]);

                productData = p;
                currentPrice = Number(p.retailPrice);
                const images = rawImages.filter(i => i).map(i => i.startsWith('http') ? i : `${GATEWAY}${i}`);
                totalImages = images.length;

                document.getElementById('productDetail').innerHTML = `
                    <div class="product-grid">
                        <div class="media-side">
                            <div class="slider-viewport">
                                <div class="slider-wrapper" id="sliderWrapper">
                                    ${images.map(src => `<div class="slider-item"><img src="${src}"></div>`).join('')}
                                </div>
                            </div>
                        </div>

                        <div class="info-side">
                            <h1 style="margin:0">${p.itemName}</h1>
                            <div class="price-tag">R${currentPrice.toLocaleString()}</div>
                            
                            <label style="font-size:0.7rem; font-weight:bold">ORDER QUANTITY</label>
                            <input type="number" id="mainQty" value="1" min="1" oninput="generateConfigs(); updateTotals();" style="margin-bottom:20px">

                            <label style="font-size:0.7rem; font-weight:bold">UNIT CONFIGURATION</label>
                            <div class="config-container" id="configList">
                                <!-- Unit rows injected here -->
                            </div>

                            <label style="font-size:0.7rem; font-weight:bold">LOGISTICS ZONE</label>
                            <select id="location" onchange="updateTotals()">
                                <option value="Standard">Standard SA</option>
                                <option value="Durban CBD">Durban CBD</option>
                                <option value="Parlock">Parlock</option>
                                <option value="Pinetown">Pinetown</option>
                            </select>

                            <div style="margin:20px 0; border-top:1px solid #eee; padding-top:15px">
                                <div style="display:flex; justify-content:space-between"><span>Logistics:</span><span id="shipFee">R 0.00</span></div>
                                <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:1.2rem; color:var(--accent-blue)">
                                    <span>GRAND TOTAL:</span><span id="finalTotal">R 0.00</span>
                                </div>
                            </div>

                            <button class="buy-button" onclick="finalizeOrder('${images[0] || ''}')">COMMIT TO CART</button>
                        </div>
                    </div>
                `;
                generateConfigs();
                updateTotals();
                updateBadge();
            } catch (err) { console.error(err); }
        }

        function generateConfigs() {
            const qty = parseInt(document.getElementById('mainQty').value) || 1;
            const list = document.getElementById('configList');
            list.innerHTML = "";

            for (let i = 1; i <= qty; i++) {
                list.innerHTML += `
                    <div class="unit-row" data-unit="${i}">
                        <span style="font-size:0.6rem; color:#888">#${i}</span>
                        <select class="unit-size">
                            <option>S</option><option selected>M</option><option>L</option><option>XL</option><option>2XL</option>
                        </select>
                        <select class="unit-color">
                            <option>Black</option><option>White</option><option>Navy</option><option>Grey</option>
                        </select>
                    </div>
                `;
            }
        }

        function updateTotals() {
            const qty = parseInt(document.getElementById('mainQty').value) || 1;
            const loc = document.getElementById('location').value;
            const rates = { "Durban CBD": [40, 60, 100, 180], "Parlock": [50, 70, 110, 190], "Pinetown": [70, 100, 170, 230], "Standard": [60, 100, 180, 240] };
            const s = rates[loc] || rates["Standard"];
            
            let ship = s[0];
            if (qty > 4) ship = s[1];
            if (qty > 10) ship = s[2];
            if (qty > 20) ship = s[3];

            document.getElementById('shipFee').innerText = `R ${ship.toLocaleString()}`;
            document.getElementById('finalTotal').innerText = `R ${(currentPrice * qty + ship).toLocaleString()}`;
        }


// Keep all your existing RPC_URL, ABI, and initialization logic

/**
 * 1. Populates the dropdowns in a row with data from the blockchain
 */
function populateRowOptions(row) {
    const colorSelect = row.querySelector('.unit-color');
    const sizeSelect = row.querySelector('.unit-size');
    
    // Clear existing
    colorSelect.innerHTML = '<option value="">Select Colour</option>';
    sizeSelect.innerHTML = '<option value="">Select Size</option>';

    // Use productData fetched from contract
    if (productData) {
        // Add Color (Based on current product)
        const colOpt = document.createElement('option');
        colOpt.value = productData.colour;
        colOpt.textContent = productData.colour;
        colorSelect.appendChild(colOpt);

        // Add Sizes (Parsed from string array)
        productData.size.forEach(sz => {
            const opt = document.createElement('option');
            opt.value = sz;
            opt.textContent = sz;
            sizeSelect.appendChild(opt);
        });
    }
}

/**
 * 2. Add a new row and refresh totals
 */
document.getElementById('addUnitBtn').addEventListener('click', () => {
    const container = document.getElementById('unitRowsContainer');
    const firstRow = document.querySelector('.unit-row');
    const newRow = firstRow.cloneNode(true);
    
    // Reset selections
    newRow.querySelector('.unit-color').value = "";
    newRow.querySelector('.unit-size').value = "";
    
    container.appendChild(newRow);
    updateGlobalQty();
});

function removeUnitRow(btn) {
    const rows = document.querySelectorAll('.unit-row');
    if (rows.length > 1) {
        btn.parentElement.remove();
        updateGlobalQty();
    }
}

/**
 * 3. Auto-update quantity based on row count
 */
function updateGlobalQty() {
    const rows = document.querySelectorAll('.unit-row');
    const total = rows.length;
    
    document.getElementById('autoQtyDisplay').innerText = total;
    document.getElementById('purchaseQty').value = total;
}

/**
 * 4. Modified stageOrder to collect from all rows
 */
function stageOrder() {
    const rows = document.querySelectorAll('.unit-row');
    let variants = [];
    let isValid = true;

    rows.forEach(row => {
        const c = row.querySelector('.unit-color').value;
        const s = row.querySelector('.unit-size').value;
        if (!c || !s) isValid = false;
        variants.push(`${s}(${c})`);
    });

    if (!isValid) {
        alert("Please select a Colour and Size for all rows.");
        return;
    }

    const qty = rows.length;
    const imgPath = (productData && productData.imageUrls) ? productData.imageUrls[0] : '';

    const orderItem = {
        id: localStorage.getItem("selected_product_id"),
        name: productData ? productData.itemName : "Product",
        price: currentPrice,
        image: imgPath,
        quantity: qty,
        variant: variants.join(", "),
        itemTotal: (currentPrice * qty)
    };

    addToCart(orderItem);
    updateBadge(); // Updates the [0] in header
    alert(`${qty} variants added to your configuration.`);
}
 // Updated finalizeOrder function in product14.js
function finalizeOrder(img) {
    // 1. FIRST, define the qtyInput variable by selecting the element
    const qtyInput = document.getElementById('mainQty'); 
    
    // 2. NOW you can check if it exists or is defined
    if (!qtyInput) {
        console.error("Quantity input not found!");
        return;
    }
    
    // 3. Now safely get the value
    const qty = parseInt(qtyInput.value);
    
    const rows = document.querySelectorAll('.unit-row');
    const loc = document.getElementById('location').value; 
    let variations = [];

    const imgPath = img || (productData && productData.imageUrls ? productData.imageUrls[0] : ''); 

    rows.forEach(row => {
        const size = row.querySelector('.unit-size').value;
        const color = row.querySelector('.unit-color').value;
        variations.push(`${size}(${color})`);
    });

    const orderItem = {
        id: localStorage.getItem("selected_product_id"),
        name: productData ? productData.itemName : "Unknown Product",
        price: currentPrice,
        image: imgPath,
        quantity: qty,
        variant: variations.join(", "),
        location: loc, 
        itemTotal: (currentPrice * qty)
    };

    if (typeof addToCart === 'function') {
        addToCart(orderItem);
        updateBadge();
        alert(`${qty} units staged for delivery via ${loc}. Check cart for final shipping totals.`);
    }
}

function updateBadge() {
    // Ensure this matches the key in cart-logic.js
    const cart = JSON.parse(localStorage.getItem('khoza_cart') || "[]");
    document.getElementById('cartCount').innerText = cart.reduce((s, i) => s + i.quantity, 0);
}

  window.onload = () => {
    loadDetails(); // This loads the product info from the blockchain
    updateBadge(); // This updates the [0] in your header
};