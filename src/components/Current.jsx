import React from 'react'

const Current = ({city,currentData}) => {
 
  
  return (
    <div className='text-white py-1 px-6 mb-2'>
            
            <div className='flex justify-between items-center'>
              <div>
                <div className='my-4'>
                  <div className='text-2xl'>
                    {city}
                  </div>
                  <div className='text-gray-500'>
                    {currentData.condition.text}
                  </div>
                </div>
        
                <div className='text-2xl'>
                  {currentData.temp_c}°
                </div>
              </div>

              <div>
                <img src={currentData.condition.icon} alt="icon" width="100%" height="100%"/>
              </div>
            </div>
          </div>
  )
}

export default Current