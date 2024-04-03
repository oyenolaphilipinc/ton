import Navbar from "./Navbar"
import ton from "../assets/ton.jpg"
import asset from "../assets/asset-man.png"
import telegram from "../assets/tg.svg"
import twitter from "../assets/twitter.svg"

const Header = () => {
  return (
    <div className="bg-[#004aad] font-day">
        <div className="container mx-auto px-4 pt-8 bg-[#004aad] mb-12">
        <Navbar />
        </div>
        <div className="flex justify-center gap-2">
            <img src={ton} width={200} height={10} className="rounded-full hidden md:flex"/>
            <div className="ml-2">
            <h1 className="text-6xl text-white mt-16 font-bold md:text-7xl">$ton</h1>
            <p className="text-white text-2xl">Mek billiones tons of memes</p>
            </div>
            <img src={asset} width={200} height={200} className="hidden md:flex" />
        </div>
        <div className="mt-16 flex justify-center gap-4 pb-12">
            <a href="/"><p className="text-white text-xl flex gap-2"><img src={telegram} width={30} height={40} />telegram</p></a>
            <a href="/"><p className="text-white text-xl flex gap-2"><img src={twitter} width={30} height={40} />twitter</p></a>
        </div>
    </div>
  )
}

export default Header;