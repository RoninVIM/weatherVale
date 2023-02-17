import { useEffect, useState } from 'react'
import Current from './components/Current'
import SearchBar from './components/SearchBar'
import HourData from './components/HourData'
import HourDataList from './components/HourDataList'
import AirConditions from './components/AirConditions'
import SevenDays from './components/SevenDays'

const API_KEY ='e520f74187dc4b5ca2185315232101'



function App() {
  
  const [searhInput, setSearchInpit] = useState("Prague")
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=e520f74187dc4b5ca2185315232101&q=${searhInput}&days=7&aqi=yes&alerts=no
    `).then(response => response.json())
      .then(json => {
        setData(json)
        setLoaded(true)
      })
  }, [searhInput])

  console.log(data)
  return (
    
    <div className="flex h-screen justify-center items-center">
      <div className='grid grid-cols-11 gap-4  p-6  rounded-lg h-600  m-32  bg-black-blue container  '>
        
        
        
        <div className=' col-span-7'>
          <SearchBar setSearchInpit={setSearchInpit}/>
          {(loaded)?<Current city={searhInput} currentData={data.current}/>:"loading"}
          
          <div className='bg-menu-color text-gray-500 p-1 rounded-lg mb-2'>
            <h3 className=' text-sm ml-6 mb-3'>TODAY FORECAST</h3>
            {(loaded)?<HourDataList timeZone={data.location.tz_id} localTime={data.location.localtime_epoch} hoursData={data["forecast"]["forecastday"][0]["hour"]}/>:"loading"}
            
          </div>
          {(loaded)?<AirConditions sunset={data.forecast.forecastday[0].astro.sunset} data={data.current}/>:"loading"}
          
        </div>

        <div className='bg-menu-color rounded-lg col-span-4 text-gray-500 '>
          <h3 className=' text-sm ml-6 mt-4 mb-3'>7-DAY FORECAST</h3>
          
          {(loaded)?<SevenDays  timeZone={data.location.tz_id} sevenDaysData={data.forecast.forecastday}/>:"loading"}

        </div>
      </div>
    </div>
  )
}

export default App
