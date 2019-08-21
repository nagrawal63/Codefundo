var Migrations = artifacts.require("./Migrations.sol");
const Web3 = require('web3');

// const TruffleConfig = require('../truffle');

// var Migrations = artifacts.require("./Migrations.sol");


module.exports = function(deployer, network, addresses) {
  // const config = TruffleConfig.networks[network];
  // var defaultnode = "https://elections.blockchain.azure.com:3200/YbXiinv_KzDFEE6Sy9FUvBpW";
  //   const web3 = new Web3(new Web3.providers.HttpProvider(defaultnode));

  //   // console.log('>> Unlocking account ' + config.from);
  //   web3.eth.personal.unlockAccount(web3.eth.getCoinbase(), "Dog2cat**frog", 36000);

  console.log('>> Deploying migration');
  deployer.deploy(Migrations);
};

// module.exports = function(deployer) {
//   deployer.deploy(Migrations);
// };
