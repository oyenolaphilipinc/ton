const About = () => {
  return (
    <div className="bg-[#3f3022]">
        <div className="pb-16 pt-12 flex justify-between">
            <div className="ml-32">
                <h1 className="text-5xl text-white font-bold mb-4">Tokenosupply</h1>
                <p className="text-gray-400 text-lg">Total Supply: <span className="font-bold text-white">17,000,000</span></p>
            </div>
            <div className="mr-56">
                <h1 className="text-2xl text-white mb-2 font-bold">Contact Address</h1>
                <button className="border pr-4 pl-2 border-gray-400 py-1 rounded-md text-yellow-500 font-bold">0x3FEB4fEA51326656636637Ede450786822c6d</button>
            </div>
        </div>
        <div className="pb-12 ml-24 flex">
            <div className="border w-3/12 ml-12 rounded-md bg-[#0b0b26] border-[#3f3022]">
                <img src="https://i.pinimg.com/564x/8b/2c/89/8b2c8924f3e5052e51bec9caabd9c026.jpg" width={80} height={80} className="mt-12 mx-auto rounded-full" />
                <h1 className="text-2xl text-white font-bold text-center pt-6 mb-2">Liquidity locked</h1>
                <p className="text-gray-400 text-center mb-4">$TON fix the money and host the cup<br/> like a beast. $ton is the world leading<br/> meme coin in the industry</p>
            </div>
            <div className="border w-3/12 ml-12 rounded-md bg-[#0b0b26] border-[#3f3022]">
                <img src="https://i.pinimg.com/564x/8b/2c/89/8b2c8924f3e5052e51bec9caabd9c026.jpg" width={80} height={80} className="mt-12 mx-auto rounded-full" />
                <h1 className="text-2xl text-white font-bold text-center pt-6 mb-2">Ownership Guaranteed</h1>
                <p className="text-gray-400 text-center mb-4">$TON fix the money and host the cup<br/> like a beast. $ton is the world leading<br/> meme coin in the industry</p>
            </div>
            <div className="border w-3/12 ml-12 rounded-md bg-[#0b0b26] border-[#3f3022]">
                <img src="https://i.pinimg.com/564x/8b/2c/89/8b2c8924f3e5052e51bec9caabd9c026.jpg" width={80} height={80} className="mt-12 mx-auto rounded-full" />
                <h1 className="text-2xl text-white font-bold text-center pt-6 mb-2">Not a Scam</h1>
                <p className="text-gray-400 text-center mb-4">$TON fix the money and host the cup<br/> like a beast. $ton is the world leading<br/> meme coin in the industry</p>
            </div>
        </div>
    </div>
  )
}

export default About