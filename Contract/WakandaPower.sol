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

    function transferWithUsage(address recipient, uint256 amount /*, uint256 usage*/) public {
        transfer(recipient, amount);
        // Additional logic to record energy usage can be added here
    }

    function airdrop(address[] calldata recipients, uint256[] calldata amounts) public onlyOwner {
        require(recipients.length == amounts.length, "Unequal recipients and amounts");
        for (uint256 i = 0; i < recipients.length; i++) {
            transfer(recipients[i], amounts[i]);
        }
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
