    const CONTRACT_ADDRESS = "0x0E763c0d3bCdFa4f744B9DE3355B67B3A9b262Ba";
        const ABI = [
            {"inputs":[{"internalType":"string","name":"_itemCode","type":"string"},{"internalType":"string","name":"_itemName","type":"string"},{"internalType":"string[]","name":"_urls","type":"string[]"},{"internalType":"uint256","name":"_retail","type":"uint256"},{"internalType":"uint256","name":"_stockPrice","type":"uint256"},{"internalType":"string","name":"_colour","type":"string"},{"internalType":"uint256","name":"_qty","type":"uint256"},{"internalType":"string[]","name":"_size","type":"string[]"},{"internalType":"string","name":"_category","type":"string"}],"name":"addProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"products","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"string","name":"itemCode","type":"string"},{"internalType":"string","name":"itemName","type":"string"},{"internalType":"uint256","name":"retailPrice","type":"uint256"},{"internalType":"uint256","name":"stockPrice","type":"uint256"},{"internalType":"string","name":"colour","type":"string"},{"internalType":"uint256","name":"quantityAvailable","type":"uint256"},{"internalType":"uint256","name":"totalSold","type":"uint256"},{"internalType":"string[]","name":"size","type":"string[]"},{"internalType":"string","name":"category","type":"string"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"productCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
        ];

        let contract;
        let signer;

        async function init() {
            if (window.ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                signer = await provider.getSigner();
                contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
                document.getElementById('ledgerStatus').innerText = "LEDGER: CONNECTED";
                loadInventory();
            } else {
                alert("MetaMask required");
            }
        }

        async function syncProductToChain() {
            const btn = document.getElementById('submitBtn');
            btn.disabled = true;
            btn.innerText = "UPLOADING TO BLOCKCHAIN...";

            try {
                const sizes = document.getElementById('itemSizes').value.split(',').map(s => s.trim());
                const tx = await contract.addProduct(
                    document.getElementById('itemCode').value,
                    document.getElementById('itemName').value,
                    [document.getElementById('imageUrl').value],
                    ethers.parseUnits(document.getElementById('retailPrice').value, 18),
                    ethers.parseUnits(document.getElementById('stockPrice').value, 18),
                    document.getElementById('itemDesc').value, // colour field used for description
                    document.getElementById('initialQty').value,
                    sizes,
                    document.getElementById('itemCategory').value
                );
                await tx.wait();
                alert("Product Successfully Registered on Blockchain!");
                location.reload();
            } catch (err) {
                console.error(err);
                alert("Transaction Failed. Check MetaMask.");
                btn.disabled = false;
                btn.innerText = "RETRY UPDATE";
            }
        }

        async function loadInventory() {
            const count = await contract.productCount();
            const list = document.getElementById('inventoryList');
            list.innerHTML = "";

            for (let i = 1; i <= count; i++) {
                const p = await contract.products(i);
                if (p.itemName === "") continue;
                list.innerHTML += `
                    <tr>
                        <td>#${p.id}</td>
                        <td>${p.itemCode}</td>
                        <td>${p.itemName}</td>
                        <td>${p.quantityAvailable}</td>
                        <td>R${ethers.formatUnits(p.retailPrice, 18)}</td>
                        <td>${p.category}</td>
                    </tr>
                `;
            }
        }

        function showSection(id) {
            document.getElementById('inventory').style.display = id === 'inventory' ? 'block' : 'none';
            document.getElementById('orders').style.display = id === 'orders' ? 'block' : 'none';
        }

        window.onload = init;