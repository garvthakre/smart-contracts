const { ethers } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy(); // deploys the contract
  await myContract.waitForDeployment(); // use this in latest Hardhat instead of .deployed()

  console.log("Contract deployed to:", await myContract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
