import React, { useState, useEffect } from 'react'

function Day(props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day, setDay] = useState("")
    
    useEffect(()=>{
        
        const d = new Date(props.dayData.date_epoch * 1e3)
        const dayName = days[d.getDay()];
        setDay(dayName)
      },[props])

  return (
    <div className='flex justify-between items-center px-4'>

        <div>{day}</div>
        <img src={props.dayData.day.condition.icon} alt='icon'></img>
        <div>{props.dayData.day.maxtemp_c}/{props.dayData.day.mintemp_c}</div>
    </div>
  )
}

export default Day