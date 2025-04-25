const { ethers } = require("hardhat");

async function main() {
  const [owner, user1] = await ethers.getSigners();
  const walletAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const Wallet = await ethers.getContractFactory("Wallet");
  const wallet = await Wallet.attach(walletAddress);

  // Send 2 ETH to wallet from user1
  const tx = await user1.sendTransaction({
    to: walletAddress,
    value: ethers.parseEther("2")
  });
  await tx.wait();

  console.log("Deposited 2 ETH to wallet.");

  // Check user1 balance
  const balance = await wallet.connect(user1).getMybalance();
  console.log("User1 Wallet Balance:", ethers.formatEther(balance));

  // Try to withdraw 1 ETH
  const withdrawTx = await wallet.connect(user1).withdraw(ethers.parseEther("1"));
  await withdrawTx.wait();

  console.log("User1 successfully withdrew 1 ETH.");
}

main().catch(console.error);
