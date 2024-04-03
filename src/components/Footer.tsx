import ton from "../assets/ton.jpg";
import telegram from "../assets/tg.svg"
import twitter from "../assets/twitter.svg"

const Footer = () => {
  return (
    <div>
        <div className="bg-[rgb(0,74,173)] pt-12 md:flex md:justify-between">
            <div className="ml-3">
            <img src={ton} width={60} height={60} className="rounded-full mx-auto md:flex" />
            </div>
            <div className="flex justify-center gap-4 pb-12 mr-16">
                <a href="/"><p className="text-white text-xl flex gap-2"><img src={telegram} width={30} height={40} />telegram</p></a>
                <a href="/"><p className="text-white text-xl flex gap-2"><img src={twitter} width={30} height={40} />twitter</p></a>
            </div>
        </div>
        <div className="text-center text-white bg-black pb-12 pt-12">
        <p className="font-bold text-2xl">$TON has no association with Phoenix Dragon. This token is simply a<br/> meme coin with no intrinsic value or expectation of financial return.<br/>
        (c) 2024 by phoneix dragon $TON. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer