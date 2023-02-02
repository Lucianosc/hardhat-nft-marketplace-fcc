const networkConfig = {
  31337: {
    name: "localhost",
    ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    mintFee: "10000000000000000", // 0.01 ETH
    callbackGasLimit: "500000", // 500,000 gas
  },
  5: {
    name: "goerli",
    subscriptionId: "8028",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    wethToken: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    callbackGasLimit: "500000", // 500,000 gas
    lendingPoolAddressesProvider: "0x5E52dEc931FFb32f609681B8438A51c675cc232d",
    daiEthPriceFeed: "0xb4c4a493AB6356497713A78FFA6c60FB53517c63",
    daiToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    mintFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
  },
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const frontEndContractsFile =
  "../nextjs-nft-marketplace-fcc/constants/networkMapping.json";
const frontEndAbiLocation =
  "../nextjs-nft-marketplace-fcc/constants/";

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  frontEndContractsFile,
  frontEndAbiLocation,
};
