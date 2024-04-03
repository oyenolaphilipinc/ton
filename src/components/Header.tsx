import ton from "../assets/ton.jpg";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#4b2c8d] to-[#304af6] pt-24 font-poppins flex justify-between">
        <div className="pl-32 pb-32 pt-12">
            <h1 className="text-7xl font-bold text-white mb-4">$TON 2.0</h1>
            <p className="text-xl text-gray-400 mb-4">Missed $TON? Here is your<br/> second chance</p>
            <button className="border-[#304af6] px-4 py-2 bg-yellow-500 rounded-full">Get Invitation</button>
        </div>
        <div className="mr-4 pb-24">
            <img src={ton} width={400} height={400} className="rounded-full"/>
        </div>
    </div>
  )
}

export default Header