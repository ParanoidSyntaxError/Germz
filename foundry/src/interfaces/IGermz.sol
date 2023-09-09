// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/token/ERC721/extensions/IERC721Enumerable.sol";

interface IGermz is IERC721Enumerable {
    event SetOffChainImageBase(
        string base,
        address sender
    );

    event SetTokenSvgOverride(
        bool value,
        uint256 tokenId,
        address sender
    );

    function mint(address receiver) external payable returns (uint256);
    function setOffchainImageBase(string memory uri) external;
    function setTokenSvgOverride(uint256 tokenId, bool value) external;
 
    function maxSupply() external view returns (uint256);
    function exists(uint256 tokenId) external view returns (bool);
    function mintPrice() external view returns (uint256);
    function offchainImageBase() external view returns (string memory);
    function tokenSvgOverride(uint256 tokenId) external view returns (bool);
    function tokenSvgImage(uint256 tokenId) external view returns (string memory);
    function tokenOffchainImage(uint256 tokenId) external view returns (string memory);
    function tokenImage(uint256 tokenId) external view returns (string memory);
    function tokenAttributes(uint256 tokenId) external view returns (string memory);
    function isTokenImageSvg(uint256 tokenId) external view returns (bool);
}