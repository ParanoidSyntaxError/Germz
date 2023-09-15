// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
 
import "@openzeppelin/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/access/Ownable.sol";
import "@openzeppelin/utils/Base64.sol";
import "@openzeppelin/utils/Strings.sol";
 
import "./interfaces/IGermz.sol";

contract Germz is IGermz, ERC721Enumerable, Ownable {
    struct Germ {
        bytes tokenHash;
        string coords;
        string species;
        string name;
    }
    
    string private _offchainImageBase;
 
    uint256 private immutable _mintPrice;

    uint256 private immutable _maxSupply;
 
    constructor(address owner, string memory base, uint256 price, uint256 maxTokenId) ERC721("Germz", "GERMZ") {
        _transferOwnership(owner);
        _offchainImageBase = base;
        _mintPrice = price;
        _maxSupply = maxTokenId;
    }

    receive() external payable {}

    function mint(address receiver) external payable returns (uint256 tokenId) {
        tokenId = totalSupply();        
        require(tokenId < _maxSupply);
        require(msg.value >= _mintPrice);

        _safeMint(receiver, tokenId);
    }

    function setOffchainImageBase(string memory base) external override onlyOwner() {
        _offchainImageBase = base;

        emit SetOffChainImageBase(base, _msgSender());
    }
 
    function maxSupply() external view returns (uint256) {
        return _maxSupply;
    }

    function exists(uint256 tokenId) external view returns (bool) {
        return _exists(tokenId);
    }

    function mintPrice() external view returns (uint256) {
        return _mintPrice;
    }

    function offchainImageBase() external view returns (string memory) {
        return _offchainImageBase;
    }

    function tokenSvgImage(uint256 tokenId) external view override returns (string memory) {
        _requireMinted(tokenId);

        Germ memory germ = _germ(tokenId);
        return _tokenSvg(germ.tokenHash);
    }

    function tokenOffchainImage(uint256 tokenId) external view override returns (string memory) {
        _requireMinted(tokenId);

        return _tokenOffchainImage(tokenId);
    }

    function tokenImage(uint256 tokenId) external view override returns (string memory) {
        _requireMinted(tokenId);
        
        Germ memory germ = _germ(tokenId);
        return _tokenImage(tokenId, germ.tokenHash);
    }

    function tokenAttributes(uint256 tokenId) external view override returns (string memory) {
        _requireMinted(tokenId);

        Germ memory germ = _germ(tokenId);
        return _tokenAttributes(germ.coords, germ.species, germ.name);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireMinted(tokenId);
 
        Germ memory germ = _germ(tokenId);
        
        string memory image = _tokenImage(tokenId, germ.tokenHash);
        if(_isImageSvg()) {
            image = string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(image))));
        }

        return string(abi.encodePacked(
            'data:application/json;base64,',
            Base64.encode(abi.encodePacked(
                '{"name":"Germ #',
                Strings.toString(tokenId),
                '","description":"Germz are based","image":"',
                image,
                '","attributes":',
                _tokenAttributes(germ.coords, germ.species, germ.name),
                '}'
            ))
        ));
    }

    function _tokenSvg(bytes memory tokenHash) internal pure returns (string memory) {
        return string(abi.encodePacked(
            "<svg id='germz-svg' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 16 16'><style>#germz-svg{shape-rendering: crispedges;}.w0{fill:#000000}.w1{fill:#FFFFFF}.w2{fill:#FF0000}.w3{fill:#00FF00}.w4{fill:#0000FF}.w5{fill:#00FFFF}.w6{fill:#FFFF00}.w7{fill:#FF00FF}</style>", 
            "<rect class='w", 
            _tokenBackgroundColor(tokenHash), 
            "' x='00' y='00' width='16' height='16'/>", 
            _tokenRects(tokenHash), 
            "</svg>"
        ));
    }

    function _tokenOffchainImage(uint256 tokenId) internal view returns (string memory) {
        return string(abi.encodePacked(_offchainImageBase, Strings.toString(tokenId)));
    }

    function _tokenImage(uint256 tokenId, bytes memory tokenHash) internal view returns (string memory) {
        if(_isImageSvg()) {
            return _tokenSvg(tokenHash);
        }
 
        return _tokenOffchainImage(tokenId);
    }

    function _isImageSvg() internal view returns (bool) {
        if(bytes(_offchainImageBase).length == 0) {
            return true;
        }

        return false;
    }

    function _tokenAttributes(string memory coords, string memory species, string memory name) internal pure returns (string memory) {
        string memory attributes = string(abi.encodePacked(
            '{"trait_type":"Coordinates","value":"',
            coords,
            '"},',
            '{"trait_type":"Species","value":"',
            species,
            '"},',
            '{"trait_type":"Name","value":"',
            name,
            '"}'
        ));

        return string(abi.encodePacked("[", attributes, "]"));
    }

    function _tokenBackgroundColor(bytes memory tokenHash) internal pure returns (string memory) {
        return Strings.toString(uint8(tokenHash[0]));
    }

    function _tokenRects(bytes memory tokenHash) internal pure returns (string memory rects) {
        uint256 rectCount = (tokenHash.length - 1) / 3;

        for(uint256 i; i < rectCount; i++) {
            uint256 bytesIndex = (i * 3) + 1;

            uint256 color = uint8(tokenHash[bytesIndex]);
            (uint256 x, uint256 y) = _bytesToVector(tokenHash[bytesIndex + 1]);
            (uint256 width, uint256 height) = _bytesToVector(tokenHash[bytesIndex + 2]);

            rects = string(abi.encodePacked(
                rects, 
                "<rect class='w", 
                Strings.toString(color), 
                "' x='", 
                Strings.toString(x), 
                "' y='", 
                Strings.toString(y), 
                "' width='", 
                Strings.toString(width), 
                "' height='", 
                Strings.toString(height), 
                "'/>"
            ));
        }
    }

    function _bytesToVector(bytes1 value) internal pure returns (uint256, uint256) {
        uint256 integer = uint8(value);
        return (integer % 16, integer / 16);
    }

    function _germ(uint256 tokenId) internal pure returns (Germ memory) {
        if(tokenId == 0) {
            return Germ(
                hex"06032221034311032D21034C1103544802931102A221029C1102AD2102851202953102C611028912029A3102C911029712026421026B21025311023311024412025614024A12023C11025C11016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 1) {
            return Germ(
                hex"03073311073C11074458079411079B1107A31107B22107AC1107BD21043516045331047421045C31047B21049712048611048911049A2104B91104952104B611015512015912",
                "",
                "",
                ""
            );
        } else if(tokenId == 2) {
            return Germ(
                hex"05033411033B1103452603644807461407441107551107641107732107941107A52107C61107921107A121075A11076B11077C21079B1107AA2107C911079614079D1107AE21017512017912074B11",
                "",
                "",
                ""
            );
        } else if(tokenId == 3) {
            return Germ(
                hex"02043211043D1104753604A41104B31104AB1104BC11053311053C1105741105851105961105A712059911058A11057B11059B1105AC1105A31105941105A52105C61105AA2105C91104433A054411054B11053516055C21055321016512016912",
                "",
                "", 
                ""
            );
        } else if(tokenId == 4) {
            return Germ(
                hex"04074211074D1107356607533A079712064411063511064B11063A11062614066D11066211067311067C1106841206961106A51106A712069911068A12068D4106CC1106824106C31106AA11016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 5) {
            return Germ(
                hex"0605323C072131072212073411072E31072C12073B11072516075212075C1205654605A624076441076B41078C11077D11079D1107831107721107921107A51107B61107C71207B91107AA1107B42107D51107BB2107DA11016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 6) {
            return Germ( 
                hex"0704434A048516034411033516034B11039712038911038B11035C31035331038411038611039A3103953103C61103C911039C1103AD1103931103A211016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 7) {
            return Germ(
                hex"03054458053311053C11023411023B11024516024C4102434102841102931102A22102C31102952102B611028611029712028911029A2102B911028B11029C1102AD2102BD2002CC11016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 8) {
            return Germ(
                hex"05043468047C21047321042411042B1104952104B611049A2104B911022311022C11023614023B21025C21027D21027221025321023421029312029611028712029911029B1202AD3102A23102D31102DC11016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 9) {
            return Germ(
                hex"0207446807A61107A911033311033C11033516034411034B11035331035C31038421038B2103971203A51103B61103B91103AA1103A32103C41103AC2103CB11016512016912",
                "",
                "",
                ""
            );
        } else if(tokenId == 10) {
            return Germ(
                hex"07064448063516062411062B11052511052A11053614054B11055C31054411055331058411057512058712057912058B1105952105B611059A2105B911059C3105CB1105933105C411015512015912",
                "",
                "",
                ""
            );
        } else if(tokenId == 11) {
            return Germ(
                hex"0406553606871206431A063211063D11023413024712023913024D11025B12026B11025312026411024211027511028611027712028911027A11028B2102AA1102842102A51102625102B311026D5102BC11015512015912",
                "",
                "",
                ""
            );
        }

        return Germ(
            hex"07005251009312007312005312005651005A51005711006811007711008821005B11006C11007B11008C21",
            "ERROR",
            "ERROR",
            "ERROR"
        );
    }
}