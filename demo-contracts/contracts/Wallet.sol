//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract Wallet {
    address public owner;
    uint public dailyLimit;
    mapping (address => uint) public balances;
    mapping(address => uint) public lastWithdrawTime;
    
    constructor(uint _dailyLimit){
        owner = msg.sender;
        dailyLimit = _dailyLimit;

    }
    receive() external payable {
        balances[msg.sender] += msg.value;
    }
    function withdraw(uint amount) external {
        require(amount <= balances[msg.sender],"Insufficient Balance");
        require(block.timestamp >= lastWithdrawTime[msg.sender] + 1 days,"Wait 24 Hours");

        require(amount <= dailyLimit,"Exceeds Daily Limit");
        balances[msg.sender]-= amount;
        lastWithdrawTime[msg.sender]= block.timestamp;
        payable(msg.sender).transfer(amount);

    }
    function setDailyLimit(uint _limit) external{
        require(msg.sender == owner,"Not the Owner");
        dailyLimit = _limit;

    }
    function getMybalance() external view returns (uint){
        return balances[msg.sender];
    }
}