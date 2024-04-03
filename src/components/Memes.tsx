import meme1 from "../assets/meme1.png"
import meme2 from "../assets/meme2.png"
import meme3 from "../assets/meme3.png"
import meme4 from "../assets/meme4.png"
import meme5 from "../assets/meme5.png"
const Memes = () => {
  return (
    <div className="pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">wall of memes</h1>
        <p className="text-xl font-bold ml-12 mb-2 md:text-center">Phoenix Dog</p>
        <img src={meme1} width={350} height={350} className="rounded-md mx-auto mb-6"/><hr/>
        <p className="text-xl font-bold ml-12 mb-2 md:text-center">Phoenix Dog</p>
        <img src={meme2} width={350} height={350} className="rounded-md mx-auto mb-6 mt-3"/><hr/>
        <p className="text-xl font-bold ml-12 mb-2 md:text-center">Phoenix Dog</p>
        <img src={meme3} width={350} height={350} className="rounded-md mx-auto mb-6 mt-3"/><hr/>
        <p className="text-xl font-bold ml-12 mb-2 md:text-center">Phoenix Dog</p>
        <img src={meme4} width={350} height={350} className="rounded-md mx-auto mb-6 mt-3"/><hr/>
        <p className="text-xl font-bold ml-12 mb-2 md:text-center">Phoenix Dog</p>
        <img src={meme5} width={350} height={350} className="rounded-md mx-auto mb-6 mt-3"/>
    </div>
  )
}

export default Memes;