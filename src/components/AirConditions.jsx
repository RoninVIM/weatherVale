import React from 'react'

const AirConditions = (data) => {
  
  return (
    <div className='bg-menu-color text-gray-500 p-2 rounded-lg mb-4'>
            <div className='flex justify-between '>
              <h3 className=' text-sm ml-6 mb-3'>AIR CONDITIONS</h3>
              <button>See more</button>
            </div>

            <div className='grid grid-cols-2 gap-2'>

              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-3'>
                  <img width="30px" height="30px" src="src/icons/temperature.svg" alt="icon" /> 
                  <span className='text-lg text-white'>Real Feel</span>
                </div>
                <div className='text-lg text-white'>{data.data.feelslike_c}°</div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-3'>
                  <img width="30px" height="30px" src="src/icons/wind.svg" alt="icon" /> 
                  <span className='text-lg text-white'>Wind</span>
                </div>
                <div className='text-lg text-white' >{data.data.wind_kph} km</div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-3'>
                  <img width="30px" height="30px" src="src/icons/sunset.svg" alt="icon" /> 
                  <span className='text-lg text-white'>Sunset</span>
                </div>
                <div className='text-lg text-white' >{data.sunset}</div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-3'>
                  <img width="30px" height="30px" src="src/icons/sun.svg" alt="icon" /> 
                  <span className='text-lg text-white'>UV Index</span>
                </div>
                <div className='text-lg text-white' >{data.data.uv}</div>
              </div>

            </div>
          </div>
  )
}

export default AirConditions