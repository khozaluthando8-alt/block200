/**
 * KHOZA.IO CART UTILITY
 * 
 */

/**
 * KHOZA.IO CART UTILITY - Updated Key
 */
const KHOZA_CART_KEY = "khoza_cart"; // Changed from khoza_market_cart to match HTML

function getCart() {
    const cart = localStorage.getItem(KHOZA_CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(KHOZA_CART_KEY, JSON.stringify(cart));
}
// ... rest of functions stay the same



function addToCart(product) {
    let cart = getCart();
    // Check if item already exists to increment quantity
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }
    
    saveCart(cart);
    alert(`${product.name} added to Node Cart.`);
}

function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartPage(); // Refresh the UI
}

function clearCart() {
    localStorage.removeItem(KHOZA_CART_KEY);
}

function calculateCartTotals() {
    const cart = getCart();
    if (!cart || cart.length === 0) {
        return { subtotal: 0, delivery: 0, grandTotal: 0, totalQty: 0 };
    }

    let subtotal = 0;
    let totalQty = 0;

    cart.forEach(item => {
        // CLEANING THE PRICE: Remove "R", commas, or spaces so "R400" becomes 400
        let cleanPrice = 0;
        if (item.price) {
            cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, ''));
        }
        
        let q = parseInt(item.quantity) || 0;
        
        subtotal += (cleanPrice * q);
        totalQty += q;
    });

    // Determine Delivery Area
    const primaryLocation = cart[0].location || "Standard";
    const rates = { 
        "Durban CBD": [40, 60, 100, 180], 
        "Parlock": [50, 70, 110, 190], 
        "Pinetown": [70, 100, 170, 230], 
        "Standard": [60, 100, 180, 240] 
    };
    
    const s = rates[primaryLocation] || rates["Standard"];
    let delivery = s[0];
    if (totalQty > 4) delivery = s[1];
    if (totalQty > 10) delivery = s[2];
    if (totalQty > 20) delivery = s[3];

    return {
        subtotal: subtotal,
        delivery: delivery,
        grandTotal: subtotal + delivery,
        totalQty: totalQty,
        location: primaryLocation
    };
}