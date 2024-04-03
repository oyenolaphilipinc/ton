const Navbar = () => {
  return (
    <div className="bg-[#24071e] pt-12 flex justify-between pb-12">
        <div className="ml-24">
            <h1 className="text-5xl text-white font-bold mb-8 border-b-4 px-1 border-b-purple-500">About $TON</h1>
            <p className="text-gray-300 mb-4 text-lg">Imagine TON, but it's like your secret club's handshake -<br/>
            TCN, or Total Closed Network, is like TON's cool cousin<br/>
            that keeps everything locked down tight.</p>
            <p className="text-gray-300 text-lg mb-4">It's like a VIP lounge for your messages and transactions,<br/>
            where only the chosen few are invited to party.</p>
            <p className="text-gray-300 text-lg">So, if TON is the open bar,
            TCN is the exclusive<br/> rooftop bar with a velvet rope –
            only the cool kids<br/> allowed!</p>
        </div>
        <div className="mr-8">
            <img src="https://img.freepik.com/free-photo/colorful-unicorn-with-rainbow-mane-word-unicorn-it_1340-41455.jpg" width={500} height={500} className="rounded-md" />
        </div>
    </div>
  )
}

export default Navbar