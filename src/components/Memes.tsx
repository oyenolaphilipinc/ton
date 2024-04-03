import message from "../assets/message.svg"

const memes = () => {
  return (
    <div className="text-center mt-12">
        <h1 className="text-4xl font-bold mb-4">How To Buy</h1>
        <div className="relative">
            <button className="border border-black pl-4 py-3 flex text-md rounded-md mb-4 w-11/12 cursor-pointer md:w-5/12 md:mx-auto"><img src={message} className="mr-3"/>Tap the contract button to get started and improve your experience</button>
            <div className="absolute hidden inset-y-0 md:right-72 md:flex items-center pl-3 pointer-events-none">
        </div>
        </div>
        <div className="relative">
            <button className="border border-black pl-4 py-3 flex text-md rounded-md mb-4 w-11/12 cursor-pointer md:w-5/12 md:mx-auto"><img src={message} className="mr-3"/>Sign up and create an account and get the possible experience from it</button>
            <div className="absolute hidden inset-y-0 md:right-72 md:flex items-center pl-3 pointer-events-none">
        </div>
        </div>
        <div className="relative">
            <button className="border border-black pl-4 py-3 flex text-md rounded-md mb-4 w-11/12 cursor-pointer md:w-5/12 md:mx-auto"><img src={message} className="mr-3"/>Select the $TON and tap any amount to buy and voila you buy directly.</button>
            <div className="absolute hidden inset-y-0 md:right-72 md:flex items-center pl-3 pointer-events-none">
        </div>
        </div>
    </div>
  )
}

export default memes