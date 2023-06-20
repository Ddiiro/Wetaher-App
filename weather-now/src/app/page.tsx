export default function Home() {
  return (
    <div>
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
    </div>
  )
}
