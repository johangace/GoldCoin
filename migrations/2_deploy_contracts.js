var SampleToken = artifacts.require('SampleToken');

module.exports = function (deployer) {
  deployer.deploy(SampleToken, 10000 * 10 ** 5);
};
