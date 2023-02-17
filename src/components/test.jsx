import React, { useEffect, useMemo, useState } from 'react'
import HourData from './HourData'

const HourDataList = ({hoursData, localTime}) => {
    
    const [dataArr,setDataArr] = useState([])

    useEffect(()=>{
        let currentHour = new Date(localTime*1000).getHours()
        const arr = []

        for (let i = currentHour; i < currentHour+ 6; i++) {
            arr.push(hoursData[i])
        }
        setDataArr(arr)
    },[localTime])

    return (
        <div className='flex flex-row mb-3'>

            {dataArr.map((data, i) => <HourData key={i} data={data}/>)}


        </div>
    )
}
export default HourDataList