import ton from "../assets/ton.jpg";

const Nav = () => {
  return (
    <div className="logo flex font-poppins justify-between pt-2 bg-gradient-to-r from-[#4b2c8d] to-[#304af6]">
        <div>
            <img src={ton} width={60} height={60} alt="Jpeg Resource" className="rounded-full ml-3" />
        </div>
        <div className="hidden md:flex">
            <ul className="flex gap-6 pt-2">
                <li><a href="/" className="hover:text-[#3f3022] text-gray-300">Home</a></li>
                <li><a href="/" className="hover:text-[#3f3022] text-gray-300">About</a></li>
                <li><a href="/" className="hover:text-[#3f3022] text-gray-300">Uniswap</a></li>
                <li><a href="/" className="hover:text-[#3f3022] text-gray-300">Chart</a></li>
            </ul>
        </div>
        <div className="mr-8">
            <button className="border px-6 py-2 border-[#3f3022] rounded-full text-gray-300 font-bold">Contract</button>
        </div>
    </div>
  )
}

export default Nav