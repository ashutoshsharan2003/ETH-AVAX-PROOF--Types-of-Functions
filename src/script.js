// script.js

// Connect to the Ethereum wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            document.getElementById('walletAddress').innerText = `Connected: ${accounts[0]}`;
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
    // Add your burning logic here
}

// Get total supply
async function getTotalSupply() {
    console.log('Getting total supply');
    // Add your logic to get total supply here
}
