import React, { useEffect, useState } from 'react'

const HourData = (props) =>{
  const [hour, setHour] = useState(0)
  console.log()

  useEffect(()=>{
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
      timeStyle: 'short',
      timeZone: props.timeZone,
    })
    const hour = parseInt(dtFormat.format(new Date(props.data.time_epoch * 1e3)).slice(0,2))
    setHour(hour)
  },[props])


  return (
    <div className='w-1/6 flex flex-col items-center gap-2'>
    <div>{hour}:00</div>
        <div><img src={props.data.condition.icon} alt="icon" /></div>
    <div>{props.data.temp_c}</div>
    </div>
  )
}

export default HourData