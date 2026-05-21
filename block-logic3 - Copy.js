const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/apnIC4FVlS_hAusqPQkDb"
);

const contractAddress = "0xDb596D99f403590eE04dF4109472fB22290d0Aed";

const contractABI = [ /* same ABI */ ];

let wallet;
let contract;

// 🔐 Connect Wallet
async function connectWallet() {
  try {
    const privateKey = document.getElementById("privateKey").value.trim();

    if (!privateKey.startsWith("0x") || privateKey.length < 60) {
      throw new Error("Invalid private key format");
    }

    wallet = new ethers.Wallet(privateKey, provider);
    contract = new ethers.Contract(contractAddress, contractABI, wallet);

    document.getElementById("walletAddress").innerText =
      "✅ Connected: " + wallet.address;

  } catch (error) {
    document.getElementById("walletAddress").innerText =
      "❌ Connection failed";
    console.error(error);
  }
}

// ➕ Add Stock
async function addStock() {
  try {
    if (!contract) throw new Error("Connect wallet first");

    const name = document.getElementById("name").value.trim();
    const image = document.getElementById("image").value.trim();
    const price = document.getElementById("price").value;
    const size = document.getElementById("size").value.trim();
    const code = document.getElementById("code").value.trim();
    const colour = document.getElementById("colour").value.trim();
    const id = document.getElementById("id").value;

    if (!name || !price || !id) {
      throw new Error("Missing required fields");
    }

    document.getElementById("status").innerText =
      "⏳ Preparing transaction...";

    // ⛽ Estimate Gas
    const gasEstimate = await contract.estimateGas.addData(
      name, image, price, size, code, colour, id
    );

    const tx = await contract.addData(
      name, image, price, size, code, colour, id,
      {
        gasLimit: gasEstimate.mul(2)
      }
    );

    document.getElementById("status").innerText =
      "📤 Sending transaction...";

    await tx.wait();

    document.getElementById("status").innerText =
      "✅ Stock Added Successfully!";
      
  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText =
      "❌ " + error.message;
  }
}
</script>