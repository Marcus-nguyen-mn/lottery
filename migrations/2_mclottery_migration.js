

const LotteryContract = artifacts.require("McLottery")

module.exports = function (deployer) {
  deployer.deploy(LotteryContract)
}
