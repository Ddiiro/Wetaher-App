export default function Home() {
  return (
    <div className="grid justify-items-stretch">
      <nav className="flex p-8 place-content-between h-60 text-white">

        <div>
          <h1 className="text-3xl">
            WeatherToday
          </h1>
        </div>
      
        <div className="place-content-between h-48 text-white">
          <ul className=" flex gap-6 text-xl">
            <li>Today</li>
            <li>This Week</li>
            <li>Next Week</li>
          </ul>
        </div>
    </nav>

    <div className=" grid justify-self-center place-content-center w-96 min-h-[40rem] bg-cyan-300 text-white rounded-lg">
      <section>
        <div className="">
          <h2 className="text-xl">Kampala</h2>

          <h5>Uganda</h5>

          <h3>Sunny</h3>

          <img src="" alt="" />

          <div>
            <p>50</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
