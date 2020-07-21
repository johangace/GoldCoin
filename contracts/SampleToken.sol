// pragma solidity >=0.4.21 <0.7.0;

// import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

// contract SampleToken is ERC20 {
//     string private name = "goodcoin";
//     string private symbol = "gco";
//     uint8 private decimals = 18;

//     constructor public Erc20(
//         string memory _name,
//         string memory _symbol,
//         uint8 _decimals
//     ) public {
//         name = _name;
//         symbol = _symbol;
//         decimals = _decimals;
//     }
// }

pragma solidity ^0.6.0;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20 {
    constructor(uint256 _initialSupply) public ERC20("GoldCoin", "GOC") {
        _mint(msg.sender, _initialSupply);
        _setupDecimals(5);
    }
}
