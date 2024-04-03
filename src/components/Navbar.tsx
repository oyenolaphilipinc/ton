import ton from "../assets/ton.jpg";

const Navbar = () => {
  return (
    // Navbar for Ton
    <div className="md:flex md:justify-between">
        <div className="ml-3">
            <img src={ton} alt={"Ton Logo"} width={60} height={60} className="rounded-full mx-auto"/>
        </div>
        <div className="mb-8 mt-3">
            <ul className="flex gap-6 justify-center">
                <li><a href='#about' className="text-xl text-white">about</a></li>
                <li><a href='#about' className="text-xl text-white">how to buy</a></li>
                <li><a href='#about' className="text-xl text-white">wall of memes</a></li>
            </ul>
        </div>
        <div className="text-center">
            <button className="border px-6 py-3 rounded-lg text-xl mr-8 bg-[#ed462f] border-[#004aad] text-white font-bold mb-8">buy $ton</button>
        </div>
    </div>
  )
}

export default Navbar;