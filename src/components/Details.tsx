import pdf from "../assets/asset-pdika.png"
const Details = () => {
  return (
    <div className="bg-[#004aad] md:flex md:justify-around pt-12">
        <div>
            <div className="ml-6 mb-10">
                <h1 className="text-white font-bold text-3xl pt-12">how to buy</h1>
                <p className="text-white text-lg font-bold">Presale is ended, but $TON is not available to<br/> buy yet. Follow on twitter or telegram to get<br/> notified first!</p>
            </div>
            <div className="ml-6 mb-10">
                <h1 className="text-white font-bold text-3xl pt-12">CREATE A WALLET</h1>
                <p className="text-white text-lg font-bold">Download Tonkeeper or your wallet of choice from the<br/> app store or google play for free. Desktop users,<br/> download the Google Chrome extension by going to<br/> Tonkeeper.</p>
            </div>
            <div className="ml-6 mb-10">
                <h1 className="text-white font-bold text-3xl pt-12">GET YOUR TON READY</h1>
                <p className="text-white text-lg font-bold">Buy or bridge TON into your wallet to buy $DUREV,<br/> when it's available. Use TonKeeper or TonSpace.</p>
            </div>
            <div className="ml-6 mb-10">
                <h1 className="text-white font-bold text-3xl pt-12">WHERE TO BUY TON?</h1>
                <p className="text-white text-lg font-bold">Buy TON with a card in wallets TonKeeper or TonSpace.<br/> Alternatively, use CEXes such as OKX, Bybit, HTX,<br/> KuCoin, etc. Or you can use Uniswap (ETH) or<br/> PancakeSwap (BSC). Full list of exchanges is available<br/> on CoinMarketCap.</p>
            </div>
            <div className="ml-6 mb-10">
                <h1 className="text-white font-bold text-3xl pt-12">HOW TO BRIDGE TON?</h1>
                <p className="text-white text-lg font-bold">Bridge from any chain to TON using bridge.ton.org,<br/> rocketx or changenow or a CEX</p>
            </div>
        </div>
        <div className="pb-12 md:pt-12">
            <img src={pdf} width={450} height={450} className="rounded-md mx-auto" />
        </div>
    </div>
  )
}

export default Details