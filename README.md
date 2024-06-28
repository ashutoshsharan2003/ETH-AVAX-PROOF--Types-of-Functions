 # WakandaPower  ERC2
 This is a Solidity smart contract called "WakandaPower" that inherits from the OpenZeppelin ERC20 and Ownable contracts. 


## Functions
>>transferWithUsage: This function is used to transfer tokens to a recipient. It calls the standard ERC20 transfer function and can be extended to include additional logic for recording energy usage.
>>airdrop: This function allows the contract owner to airdrop tokens to multiple recipients at once. It checks that the number of recipients and amounts are equal, and then transfers the specified amounts to each recipient.

### Description
WakandaPower is a decentralized ERC20 token designed to facilitate the exchange of energy resources in a secure and transparent manner. Built on the Ethereum blockchain, WakandaPower aims to revolutionize the energy sector by providing a platform for efficient and equitable distribution of energy-related assets.

>>Key Features

    1.ERC20 Compatibility: WakandaPower adheres to the ERC20 token standard, ensuring compatibility with a wide range of Ethereum-based applications and wallets.
    2.Ownership and Control: The contract owner has the ability to perform administrative tasks such as airdropping tokens to multiple recipients simultaneously.
    3.Energy Usage Tracking: The transferWithUsage function allows for the recording of energy usage, enabling the tracking and management of energy consumption.
    4.Decentralized Exchange: WakandaPower facilitates the decentralized exchange of energy resources, promoting transparency and fairness in the energy market.

>>Benefits

    1.Transparency: The decentralized nature of the Ethereum blockchain ensures transparency in energy transactions and resource allocation.
    2.Efficiency: WakandaPower streamlines energy distribution processes, reducing overhead costs and improving overall efficiency.
    3.Accessibility: The token provides access to energy resources for underserved communities and individuals, promoting energy equity.
    4.Innovation: By leveraging blockchain technology, WakandaPower fosters innovation in the energy sector, paving the way for new business models and applications.

#### Getting Started

##### Executing program
>>Deployment

    1.Compile the Contract: Compile the WakandaPower Solidity contract using a Solidity compiler, such as the one provided by Remix IDE 
    2.Deploy the Contract: Deploy the compiled contract to the Ethereum network. During deployment, the contract owner's address should be provided as a constructor parameter.

>>Interacting with the Contract

    1.Mint Tokens: The contract owner can mint the initial TOTAL_SUPPLY of tokens to their own address during the contract deployment.
    2.Transfer Tokens: Users can call the transferWithUsage function to transfer tokens to other addresses. This function can be extended to include additional logic for recording energy usage.
    3.Airdrop Tokens: The contract owner can call the airdrop function to distribute tokens to multiple recipients at once. This function takes an array of recipient addresses and an array of corresponding token amounts.
>>Interaction with FrontEnd

    1. Always click connect wallet button whenever the page relodes.
    2.Add buyers in queue using request tokens, you can check active queue by clicking Get Customer Requests.
    3.Using the owner account click Mint Tokens. After transaction check supply using Get Total Supply.
    4.For burn tokens switch to the account you want to burn token of, enter the address of the same account and amount and click Burn Tokens.
    5.For Transfer token switch to account you want to transfer from, enter from , to address and amount then click Transfer Tokens.
    6.You can check all the transaction and address on sepolia ether scan.



```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WakandaPower is ERC20, Ownable {
    uint256 public TOTAL_SUPPLY;

    constructor(address _owner) ERC20("WakandaPower", "WKN") Ownable(_owner) {
        TOTAL_SUPPLY = 100000000 * 10**uint256(decimals());
        _mint(_owner, TOTAL_SUPPLY);
    }
function transferWithUsage(address recipient, uint256 amount /*,uint256 usage*/) public {
    

        transfer(recipient, amount);
        // Additional logic to record energy usage can be added here
    }

    function airdrop(address[] calldata recipients, uint256[] calldata amounts) public onlyOwner {
        require(recipients.length == amounts.length, "Unequal recipients and amounts");
        for (uint256 i = 0; i < recipients.length; i++) {
            transfer(recipients[i], amounts[i]);
        }
    }
}
```

###### Author
Ashutosh Sharan 
(https://www.linkedin.com/in/ashutosh-sharan-177630249/)
 ###### License
 This  WakandaPower  is licensed under the MIT License