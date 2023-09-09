// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./GermzHelper.sol";

contract GermzURI is GermzHelper {
    function run() public {
        (,uint256 tokenId) = newMinter();

        console.log(germz.tokenSvgImage(tokenId));
    }
}