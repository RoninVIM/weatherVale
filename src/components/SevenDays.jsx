import React from 'react'
import Day from './Day'

function SevenDays(props) {
  return (
    <div>
        {props.sevenDaysData.map((dayData, i) => <Day timezone={props.timezone} key={i} dayData={dayData}/>)}
        
    </div>
  )
}

export default SevenDays