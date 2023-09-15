// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../script/GermzHelper.sol";

contract GermzTest is GermzHelper {
    function test_mint() public {
        newMinter();
    }

    function test_insufficient_mint() public {
        address minter = newAddress();
        uint256 minterFunds = MINT_PRICE / 2;
        vm.deal(minter, minterFunds);

        vm.expectRevert();
        germz.mint{value: minterFunds}(minter);
    }

    function test_initialOffchainImageBase() public {
        assertEq(INIT_OFFCHAIN_IMAGE_BASE, germz.offchainImageBase());
    }

    function test_setOffchainImageBase() public {
        string memory newOffchainImageBase = "https://germz.nft/metadata/";

        vm.prank(GERMZ_OWNER);
        germz.setOffchainImageBase(newOffchainImageBase);

        assertEq(newOffchainImageBase, germz.offchainImageBase());
    }

    function test_unauthorized_setOffchainImageBase() public {
        string memory newOffchainImageBase = "rekt.you/";

        vm.expectRevert();
        germz.setOffchainImageBase(newOffchainImageBase);
    }

    function test_mintPrice() public {
        assertEq(germz.mintPrice(), MINT_PRICE);
    }
}