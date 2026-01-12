// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract OrganizationRegistry is Ownable {
    
    struct Organization {
        string name;
        bool isVerified;
        uint256 reputationScore;
        // Mapping from Category ID to bool not supported in struct in simple way, 
        // managing via separate mapping or array.
        // We will store supported categories in a separate mapping for the organization.
    }

    mapping(address => Organization) public organizations;
    mapping(address => mapping(uint256 => bool)) public authorizedCategories;
    mapping(address => bool) public isOrg;

    event OrganizationAdded(address indexed orgAddress, string name);
    event CategoryAuthorized(address indexed orgAddress, uint256 categoryId);

    constructor() Ownable(msg.sender) {}

    function addOrganization(address _org, string memory _name, uint256[] memory _categories) public onlyOwner {
        require(!isOrg[_org], "Already registered");
        
        organizations[_org] = Organization({
            name: _name,
            isVerified: true,
            reputationScore: 100
        });
        isOrg[_org] = true;

        for(uint256 i=0; i < _categories.length; i++) {
            authorizedCategories[_org][_categories[i]] = true;
            emit CategoryAuthorized(_org, _categories[i]);
        }

        emit OrganizationAdded(_org, _name);
    }

    function isOrganization(address _org) public view returns (bool) {
        return isOrg[_org];
    }

    function isAuthorized(address _org, uint256 _categoryId) public view returns (bool) {
        if (!isOrg[_org]) return false;
        return authorizedCategories[_org][_categoryId];
    }
    
    function vouchForOrganization(address _org) public {
        // Placeholder for Logic 2: Trust Staking
    }
}
