import React, { useEffect, useMemo, useState } from 'react'
import HourData from './HourData'

const HourDataList = ({hoursData, localTime}) => {
  
  //new Date(localTime*1000).getHours()

  let currentHour = new Date(localTime*1000).getHours()
 
 
  console.log(localTime)
  console.log(currentHour)  
  const dataArr = []

  for (let i = currentHour; i < currentHour+ 6; i++) {
    dataArr.push(hoursData[i])
  }
  

  return (
    <div className='flex flex-row mb-3'>
              
              {dataArr.map((data, i) => <HourData key={i} data={data}/>)}
              
              
    </div>
  )
}

export default HourDataList