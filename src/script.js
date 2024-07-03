// Initialize Web3
let web3;
let contract;
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';
const contractABI = [/* YOUR_CONTRACT_ABI_HERE */];

async function init() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            document.getElementById('walletAddress').innerText = `Connected: ${accounts[0]}`;

            // Initialize contract instance
            contract = new web3.eth.Contract(contractABI, contractAddress);
        } catch (error) {
            console.error('User rejected the request.');
        }
    } else {
        alert('Please install MetaMask!');
    }
}

// Mint tokens
async function mintTokens() {
    const address = document.getElementById('mintAddress').value;
    const amount = document.getElementById('mintAmount').value;
    console.log(`Minting ${amount} tokens to ${address}`);
    // Add your minting logic here
}

// Transfer tokens
async function transferTokens() {
    const address = document.getElementById('transferTo').value;
    const amount = document.getElementById('transferAmount').value;
    console.log(`Transferring ${amount} tokens to ${address}`);
    // Add your transfer logic here
}

// Burn tokens
async function burnTokens() {
    const amount = document.getElementById('burnAmount').value;
    console.log(`Burning ${amount} tokens`);

    if (!contract) {
        console.error('Contract not initialized.');
        return;
    }

    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.burn(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
        console.log(`Successfully burned ${amount} tokens`);
    } catch (error) {
        console.error('Error burning tokens:', error);
    }
}

// Get total supply
async function getTotalSupply() {
    console.log('Getting total supply');
    if (!contract) {
        console.error('Contract not initialized.');
        return;
    }

    try {
        const totalSupply = await contract.methods.totalSupply().call();
        console.log('Total Supply:', web3.utils.fromWei(totalSupply, 'ether'));
    } catch (error) {
        console.error('Error getting total supply:', error);
    }
}

// Connect to the wallet and initialize the contract
window.onload = init;
