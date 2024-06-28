let web3;
let contract;
let accounts;

const contractAddress = "";
const contractABI = [];

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(contractABI, contractAddress);
    } else {
        alert('Please install MetaMask!');
    }
});

async function connectWallet() {
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('walletAddress').innerText = Connected: ${accounts[0]};
    } catch (error) {
        console.error(error);
        alert('Failed to connect wallet.');
    }
}

async function mintTokens() {
    const toAddress = document.getElementById("mintAddress").value;
    const amount = document.getElementById("mintAmount").value;

    try {
        await contract.methods.mint(toAddress, amount).send({ from: accounts[0] });
        alert("Tokens minted successfully!");
    } catch (err) {
        console.error(err);
        alert("Error minting tokens.");
    }
}

async function transferTokens() {
    const toAddress = document.getElementById("transferTo").value;
    const amount = document.getElementById("transferAmount").value;

    try {
        await contract.methods.transfer(toAddress, amount).send({ from: accounts[0] });
        alert("Tokens transferred successfully!");
    } catch (err) {
        console.error(err);
        alert("Error transferring tokens.");
    }
}

async function burnTokens() {
    const amount = document.getElementById("burnAmount").value;

    try {
        await contract.methods.burn(amount).send({ from: accounts[0] });
        alert("Tokens burned successfully!");
    } catch (err) {
        console.error(err);
        alert("Error burning tokens.");
    }
}

async function getTotalSupply() {
    try {
        const supply = await contract.methods.totalSupply().call();
        document.getElementById("totalSupply").innerText = Total Supply: ${supply};
    } catch (err) {
        console.error(err);
        alert("Error getting total supply.");
    }
}