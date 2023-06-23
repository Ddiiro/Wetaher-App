import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" grid justify-items-stretch">
      <nav className="flex p-8 place-content-between h-32 text-white">

        <div>
          <h1 className="text-3xl">
            WeatherToday
          </h1>
        </div>
      
        <div className="place-content-between h-48 text-white">
          <ul className=" flex gap-8 text-xl">
            <li className='hover:border-b-2 p-1 rounded-lg'><Link href="/about">Today</Link></li>
            <li className='hover:border-b-2 p-1 rounded-lg'><Link href="/about">This Week</Link></li>
            <li className='hover:border-b-2 p-1 rounded-lg'><Link href="/about">Next Week</Link></li>
          </ul>
        </div>
    </nav>

    <div className="flex gap-20 justify-self-center justify-items-stretch">
        <div className=" grid justtify-self-start place-content-center w-96 
        justify-items-stretch min-h-[20rem] bg-cyan-300 text-white rounded-lg hover:border-4">
          <h2 className="text-2xl">Kampala</h2>

          <h5>Uganda</h5>

          <h3 className="text-4xl">Rainy</h3>

          <Image
            src="/rainy.png"
            className='rounded-lg'
            width={350}
            height={450}
            alt="rainy season"
          />

          <div>
            <p>17</p>
          </div>
          <button className="rounded-full justify-self-center p-2 bg-black w-1/2 hover:bg-cyan-400"><Link href="/about">See More</Link></button>
        </div>
        <div className=" grid justify-self-center place-content-center w-96 min-h-[40rem] bg-rose-600 text-white rounded-lg hover:border-4">
          <h2 className="text-2xl">Nairobi</h2>

          <h5>Kenya</h5>

          <h3 className="text-4xl">Winter</h3>

          <Image
            src="/snow.png"
            className='rounded-lg'
            width={350}
            height={450}
            alt="winter season"
          />

          <div>
            <p>-2</p>
          </div>
          <button className="rounded-full justify-self-center p-2 bg-black w-1/2 hover:bg-rose-400"><Link href="/about">See More</Link></button>
        </div>
        <div className=" grid justify-self-end place-content-center w-96 min-h-[40rem] bg-yellow-600 text-white rounded-lg hover:border-4">
          <h2 className="text-2xl">Cairo</h2>

          <h5>Egypt</h5>

          <h3 className="text-4xl">Sunny</h3>

          <Image
            src="/sun.png"
            className='rounded-lg'
            width={350}
            height={450}
            alt="Sunny season"
          />

          <div>
            <p>32</p>
          </div>
          <button className="rounded-full justify-self-center p-2 bg-black w-1/2 hover:bg-yellow-400"><Link href="/about">See More</Link></button>
        </div>
        
    </div>
    </div>
  )
}
