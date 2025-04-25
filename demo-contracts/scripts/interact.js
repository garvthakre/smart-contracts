const {ethers} = require("hardhat");

 async function main(){
    const ContractAddress =  "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
    const MyContract = await ethers.getContractFactory("MyContract");
    const contract = await MyContract.attach(ContractAddress);
    const message = await contract.message();
    console.log("current message:",message);
    const tx = await contract.setMessage("HI BACK IN BUSSINESS");
    await tx.wait();
    const newMessage = await contract.message();
    console.log("Updated Message:",newMessage);

 }
 main().catch((error)=>{
    console.error(error);
    process.exitCode=1;

 })