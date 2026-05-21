/**
 * KHOZA.IO - ADMIN DASHBOARD LOGIC
 * Synchronized with cfw14_3.sol[cite: 14, 16]
 */

let provider;
let signer;
let contract;

// 1. WEB3 INITIALIZATION
async function initAdminWeb3() {
    if (window.ethereum) {
        try {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
            console.log("Admin Ledger: Connected[cite: 16]");
            
            // Start listeners and data loading
            loadDashboardStats();
            listenForOrders();
            loadInventoryList();
        } catch (error) {
            console.error("Web3 Connection Error:", error);
            document.getElementById('ledgerStatus').innerText = "DISCONNECTED";
        }
    } else {
        alert("Please install MetaMask to manage the KHOZA Network.");
    }
}

// 2. DETAILED ORDER LISTENER[cite: 14, 15]
// Captures Size, Color, and Address from the updated event
function listenForOrders() {
    contract.on("OrderPlaced", (orderId, customer, ref, desc, qty, addr) => {
        const tableBody = document.getElementById('adminOrderBody');
        
        // desc contains "Size: X | Colour: Y" from cart.js logic
        const newRow = `
            <tr id="order-${orderId}">
                <td><strong>${ref}</strong></td>
                <td>${desc}</td>
                <td>${qty}</td>
                <td style="font-size:0.7rem;">${addr}</td>
                <td>R pending</td>
                <td><span class="status-badge">PENDING</span></td>
                <td>
                    <button onclick="confirmOrder(${orderId})" class="action-btn" style="padding:5px 10px;">CONFIRM</button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('afterbegin', newRow);
        updateStatCounters();
    });
}

// 3. ADD PRODUCT TO LEDGER[cite: 14, 16]
// Maps to: addProduct(itemCode, itemName, urls, retail, stockPrice, colour, qty)
async function addNewProduct() {
    const code = document.getElementById('itemCode').value;
    const name = document.getElementById('itemName').value;
    const colour = document.getElementById('pColour').value;
    const retail = document.getElementById('pRetail').value;
    const stock = document.getElementById('pStock').value;
    const qty = document.getElementById('pQty').value;
    const img = document.getElementById('pImg').value;

    if (!code || !name || !retail) return alert("Missing required fields.");

    try {
        document.getElementById('ledgerStatus').innerText = "UPLOADING...";
        
        // imageUrls is a string array in the contract
        const tx = await contract.addProduct(
            code, 
            name, 
            [img], 
            ethers.parseUnits(retail.toString(), 0), 
            ethers.parseUnits(stock.toString(), 0), 
            colour, 
            qty
        );
        
        await tx.wait();
        alert(`Product ${name} successfully deployed to blockchain!`);
        document.getElementById('ledgerStatus').innerText = "SYNCED";
        document.getElementById('inventoryForm').reset();
        
    } catch (error) {
        console.error("Product Listing Failed:", error);
        alert("Ledger Error: Check console for details.");
    }
}

// 4. ORDER CONFIRMATION
async function confirmOrder(orderId) {
    try {
        const tx = await contract.confirmOrder(orderId);
        await tx.wait();
        alert("Order Confirmed. Stock levels updated automatically.");
        location.reload(); // Refresh to update status badges
    } catch (error) {
        alert("Confirmation Failed: " + error.reason);
    }
}

// 5. DASHBOARD STATS
async function loadDashboardStats() {
    const totalOrders = await contract.orderCount();
    const totalProds = await contract.productCount();
    
    document.getElementById('totalItems').innerText = totalOrders.toString();
    // Revenue logic would involve looping through orders or checking contract balance
}

// --- UTILITY: SECTION TOGGLE[cite: 15] ---
function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
    
    document.getElementById(id).classList.add('active');
    const btn = document.getElementById('btn-' + id);
    if(btn) btn.classList.add('active');
}

window.addEventListener('load', initAdminWeb3);