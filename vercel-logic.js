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
