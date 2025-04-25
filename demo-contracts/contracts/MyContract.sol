//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public message = "hello,World!";
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}