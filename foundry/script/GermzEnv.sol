// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import "../src/Germz.sol";

contract GermzEnv is Test {
    address internal constant GERMZ_OWNER = address(1);
    string internal constant INIT_OFFCHAIN_IMAGE_BASE = "https://germz.world/metadata/";
    uint256 internal constant MINT_PRICE = 0.5 ether;
    uint256 internal constant MAX_SUPPLY = 9;

    Germz public germz;

    function setUp() public {
        germz = new Germz(GERMZ_OWNER, INIT_OFFCHAIN_IMAGE_BASE, MINT_PRICE, MAX_SUPPLY);
    }
}