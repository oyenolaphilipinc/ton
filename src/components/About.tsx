import pic from "../assets/asset-pdhero.png"
const About = () => {
  return (
    <div className="md:flex md:justify-between font-day pb-12 pt-12">
        <div className="md:ml-32">
            <img src={pic} width={500} height={500} />
        </div>
        <div className="md:mr-52 mt-16">
            <h1 className="text-5xl font-bold mb-12 text-center">about</h1>
            <p className="text-lg font-semibold text-center mb-8">Imagine TON, but it's like your secret club's handshake -<br/> TCN, or Total Closed Network, is like TON's cool cousin<br/> that keeps everything locked down tight.<br/> It's like a VIP lounge for your messages and transactions,<br/> where only the chosen few are invited to party.<br/> So, if TON is the open bar,<br/> TCN is the exclusive rooftop bar with a velvet rope –<br/> only the cool kids allowed!<br/>
            Tokenomics:
            Let’s go 75% LP 20% marketing and 5%CEX</p>
        </div>
    </div>
  )
}

export default About