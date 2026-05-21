let signer;
let contract;

// REPLACE THESE with your actual deployment details from Remix
const contractAddress = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const abi = [
    "function addData(string _name, string _image, uint256 _price, string _size, string _Item_code, string _colour, uint256 _id) public",
    "function getMyRecord() public view returns (tuple(string name, string size, string colour, string Item_code, uint256 id, uint256 price, string image, bool isActive))"
];

// Connect using Private Key
async function connectWallet() {
    const pk = document.getElementById("privateKey").value;
    if (!pk) return alert("Please enter a private key.");

    try {
        // Connect to Ethereum Testnet (Sepolia)
        const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth_sepolia");
        signer = new ethers.Wallet(pk, provider);
        contract = new ethers.Contract(contractAddress, abi, signer);
        
        document.getElementById("walletAddress").innerText = "Logged in as: " + signer.address;
        document.getElementById("status").innerText = "Connected";
        document.getElementById("status").style.color = "green";
    } catch (err) {
        console.error(err);
        alert("Login failed. Check your private key and network.");
    }
}


// Replace with your Pinata API keys (get them for free at pinata.cloud)
const pinataApiKey = "YOUR_API_KEY";
const pinataSecretKey = "YOUR_SECRET_KEY";

async function uploadToIPFS() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) return alert("Select a file first!");

    const formData = new FormData();
    formData.append('file', file);

    const status = document.getElementById('ipfsStatus');
    status.innerText = "Uploading to IPFS...";

    try {
        const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                'pinata_api_key': pinataApiKey,
                'pinata_secret_api_key': pinataSecretKey
            },
            body: formData
        });

        const result = await response.json();
        const ipfsHash = result.IpfsHash; // This is the CID (e.g., Qm...)
        
        // Auto-fill your form's "image" field with the hash
        document.getElementById("image").value = ipfsHash;
        status.innerText = "IPFS Hash: " + ipfsHash;
        
    } catch (error) {
        console.error("IPFS Upload Error:", error);
        status.innerText = "Upload failed.";
    }
}

// Write/Update Data (Push to Blockchain)
async function writeData() {
    if (!contract) return alert("Connect wallet first!");

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const size = document.getElementById("size").value;
    const code = document.getElementById("code").value;
    const colour = document.getElementById("colour").value;
    const id = document.getElementById("id").value;

    try {
        document.getElementById("status").innerText = "Transaction pending...";
        // Call the addData function [cite: 4]
        const tx = await contract.addData(name, image, price, size, code, colour, id);
        await tx.wait(); // Wait for confirmation
        document.getElementById("status").innerText = "Update Successful!";
    } catch (err) {
        console.error(err);
        document.getElementById("status").innerText = "Error updating record.";
    }
}

// Read Data (Pull from Blockchain)
async function readData() {

// Inside your readData() function:
const gateway = "https://gateway.pinata.cloud/ipfs/";
const fullUrl = gateway + data.image; // data.image is the CID stored in Solidity


    if (!contract) return alert("Connect wallet first!");

    try {
        const data = await contract.getMyRecord();
        
        if (!data.isActive) {
            document.getElementById("result").innerText = "No data found for this address.";
            return;
        }


        
document.getElementById("resultDisplay").innerHTML = `
    <strong>Name:</strong> ${data.name}<br>
    <a href="${fullUrl}" target="_blank">View Large File on IPFS</a>
    <img src="${fullUrl}" style="max-width: 200px; display:block;">
`;

        // Displaying the retrieved struct [cite: 2]
        document.getElementById("result").innerHTML = `
            <strong>Name:</strong> ${data.name}<br>
            <strong>ID:</strong> ${data.id}<br>
            <strong>Price:</strong> ${data.price}<br>
            <strong>Size:</strong> ${data.size}<br>
            <strong>Color:</strong> ${data.colour}<br>
            <strong>Code:</strong> ${data.Item_code}<br>
            <img src="${data.image}" style="max-width: 150px; display:block; margin-top:10px;">
        `;
    } catch (err) {
        console.error(err);
        alert("Error fetching data.");
    }
}