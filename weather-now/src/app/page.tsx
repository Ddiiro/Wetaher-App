import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" grid justify-items-stretch">
      <nav className="flex p-8 place-content-between h-24 text-white">

        <div>
          <h1 className="text-3xl">
            WeatherToday
          </h1>
        </div>
      
        <div className="place-content-between h-48 text-white">
          <ul className=" flex gap-8 text-xl">
            <li className='group/item hover:bg-rose-600 p-1 rounded-lg'><Link href="/about">Today</Link></li>
            <li className='group/item hover:bg-rose-600 p-1 rounded-lg'><Link href="/about">This Week</Link></li>
            <li className='group/item hover:bg-rose-600 p-1 rounded-lg'><Link href="/about">Next Week</Link></li>
          </ul>
        </div>
    </nav>

    <div className="flex gap-20 justify-self-center justify-items-stretch">
        <div className=" grid justtify-self-start place-content-center w-96 
        justify-items-stretch min-h-[20rem] bg-cyan-300 text-white rounded-lg m-0 group/item hover:bg-slate-950">
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
        </div>
        <div className=" grid justify-self-center place-content-center w-96 min-h-[40rem] bg-rose-600 text-white rounded-lg group/item hover:bg-slate-950">
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
        </div>
        <div className=" grid justify-self-end place-content-center w-96 min-h-[40rem] bg-yellow-600 text-white rounded-lg group/item hover:bg-slate-950">
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
          <button className="rounded-full bg-slate-300">Save Changes</button>
        </div>
        
    </div>
    </div>
  )
}
