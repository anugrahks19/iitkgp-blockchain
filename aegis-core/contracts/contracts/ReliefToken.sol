// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./OrganizationRegistry.sol";

contract ReliefToken is ERC1155, Ownable {
    uint256 public constant FOOD = 1;
    uint256 public constant MEDICAL = 2;
    uint256 public constant SHELTER = 3;

    OrganizationRegistry public registry;

    constructor(address _registryAddress) ERC1155("https://api.aegis.relief/item/{id}.json") Ownable(msg.sender) {
        registry = OrganizationRegistry(_registryAddress);
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    // Override safeTransferFrom to enforce registry rules
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override {
        // Validation Logic:
        // If the receiver is a Vendor (i.e. Organization), check if they are authorized for this token category.
        // We assume 'to' might be a beneficiary sending to a vendor.
        
        // Check if 'to' is a registered organization
        if (registry.isOrganization(to)) {
             require(registry.isAuthorized(to, id), "Aegis: Vendor not authorized for this category");
        }

        super.safeTransferFrom(from, to, id, amount, data);
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public override {
         if (registry.isOrganization(to)) {
             for (uint256 i = 0; i < ids.length; i++) {
                 require(registry.isAuthorized(to, ids[i]), "Aegis: Vendor not authorized for one or more categories");
             }
         }
        super.safeBatchTransferFrom(from, to, ids, amounts, data);
    }
}
