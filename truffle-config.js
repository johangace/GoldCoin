const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = 'f90512467c884c30b734605609ca29df';
//
// const fs = require('fs');
const mnemonic =
  'simple derive supply captain educate upgrade area kite accuse van middle title';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 9545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
      from: '0x4ec016f0a610a07e5d63bd5c9a0b3435b73dc3b5',
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.

    rinkeby: {
      // provider: () => new HDWalletProvider(mnemonic, `${infuraKey}`),
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      from: '0x4ec016f0a610a07e5d63bd5c9a0b3435b73dc3b5',
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.2', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
