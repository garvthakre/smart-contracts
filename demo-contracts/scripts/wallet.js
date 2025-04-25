const { ethers } = require("hardhat");

async function main() {
  const Wallet = await ethers.getContractFactory("Wallet");
  const wallet = await Wallet.deploy(ethers.parseEther("1")); // daily limit = 1 ETH
  await wallet.waitForDeployment();

  console.log("Wallet deployed to:", await wallet.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
