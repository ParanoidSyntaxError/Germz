// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./GermzEnv.sol";

contract GermzHelper is GermzEnv {
    uint256 private _addrNonce;

    function newAddress() public returns (address) {
        _addrNonce++;
        return vm.addr(_addrNonce);
    }

    function newMinter() public returns (address minter, uint256 tokenId) {
        minter = newAddress();
        vm.deal(minter, MINT_PRICE);

        tokenId = germz.mint{value: MINT_PRICE}(minter);
    }
}