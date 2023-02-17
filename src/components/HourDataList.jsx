import React, { useEffect, useMemo, useState } from 'react'
import HourData from './HourData'

const HourDataList = ({hoursData, localTime, timeZone}) => {
    
    const [dataArr,setDataArr] = useState([])
    const [currentHour, setCurrentHour] = useState("")

    useEffect(()=>{
        const arr = []
        const dtFormat = new Intl.DateTimeFormat('en-GB', {
            timeStyle: 'short',
            timeZone: timeZone,
        })
        const hour = parseInt(dtFormat.format(new Date(localTime * 1e3)).slice(0,2))
        setCurrentHour(hour)
        
        for (let i = hour; i < hour+ 6; i++) {
            if (typeof hoursData[i] !== 'undefined'){
               arr.push(hoursData[i])
            }
            //arr.push(hoursData[i])
        }
        setDataArr(arr)
    },[localTime])
    
    return (
        <div className='flex flex-row mb-3'>
            {dataArr.map((data, i) => <HourData timeZone={timeZone} key={i} data={data}/>)}
        </div>
    )
}
export default HourDataList