
// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Swap{
     mapping(address => uint256) public reserves; // 代币储备

    event Swapped(address indexed user,address tokenA,address tokenB,uint256 amount);
    event LiquidityAdded(address indexed user, uint256 amountA, uint256 amountB);
    // 添加流动性（存入 tokenA 和 tokenB）
    function addLiquidity(address tokenA, address tokenB, uint256 amountA, uint256 amountB) external {
        // 存入 tokenA
        require(
            IERC20(tokenA).transferFrom(msg.sender, address(this), amountA),
            "TokenA deposit failed"
        );

        // 存入 tokenB
        require(
            IERC20(tokenB).transferFrom(msg.sender, address(this), amountB),
            "TokenB deposit failed"
        );

        // 更新储备
        reserves[tokenA] += amountA;
        reserves[tokenB] += amountB;

        emit LiquidityAdded(msg.sender, amountA, amountB);
    }
    function swap(address tokenA,address tokenB,uint256 amount) external{

        require(IERC20(tokenA).transferFrom(msg.sender, address(this), amount),"transfer from failed");

        require(IERC20(tokenB).transfer(msg.sender, amount),"tokenb Approval failed");
        // require(IERC20(tokenB).transferFrom(address(this), tokenB, amount), "swap failed");

        // 更新储备
        reserves[tokenA] += amount;
        reserves[tokenB] -= amount;

        // IERC20(tokenB).mint(msg.sender,amount);
        emit Swapped(msg.sender, tokenA, tokenB, amount);
    }
    function getBalance(address token) public view returns (uint256){
        return reserves[token];
    }
 
    receive() external payable {}
}