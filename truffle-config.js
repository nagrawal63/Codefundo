var defaultnode = "https://elections.blockchain.azure.com:3200/YbXiinv_KzDFEE6Sy9FUvBpW";   
var azureNode = "https://blockie.blockchain.azure.com:3200/2GhqdUicWMqpLJe8GRQj3mVT"
var Web3 = require("web3");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    azure:{
      provider: new Web3.providers.HttpProvider(defaultnode),
      network_id: "*",
      gasPrice:0,
      gas: 450000000,
      type: "quorum"
    },
    azure2:{
      provider: new Web3.providers.HttpProvider(defaultnode),
      network_id: "*",
      gasPrice:0,
      gas: 450000000,
      type: "quorum"
    }
  },
  compilers: {
    solc: {
      version: "0.5.4"
    }
  }
};
