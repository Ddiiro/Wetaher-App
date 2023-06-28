import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")

  return response.json()

  
}
console.log(getData())
export default async  function Home() {
  
  return (
    <div className=" grid justify-items-stretch relative h-screen">
      <div className='absolute inset-0'>
            <Image
                src='https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                fill={true}
                alt='weather image'
            />
        </div>
        <div className='relative z-10 h-96'>
      <nav className="flex p-8 place-content-between h-32 text-white">

        <div>
          <h1 className="text-3xl">
            WeatherToday
          </h1>
        </div>
      
        <div className="place-content-between h-48 text-white">
          <ul className=" flex gap-8 text-xl">
            <li className='hover:border-2 p-1 rounded-lg'><Link href="/">Today</Link></li>
            <li className='hover:border-2 p-1 rounded-lg'><Link href="/thisWeek">This Week</Link></li>
            <li className='hover:border-2 p-1 rounded-lg'><Link href="/nextWeek">Next Week</Link></li>
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
    <footer className=" justify-self-center gap-4 border-t-2 mt-28 flex text-white">
      <p>Ddiiro Joseph</p>
      <p> 2023</p>
    </footer>
    </div>
  )
}
