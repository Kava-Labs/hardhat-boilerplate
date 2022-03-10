require("@nomiclabs/hardhat-waffle");
require("./tasks/faucet");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 31337
    },
    kava_evm: {
      url: "https://evm.evm-alpha.kava.io",
      accounts: [`${process.env.KAVA_EVM_PRIVATE_KEY}`],
      chainId: 2221,
      tags: ["kava"],
  },
  }
};
