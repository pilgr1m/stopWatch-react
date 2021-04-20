import React from 'react'

export const re = (value) => {
    return value >= 10 ? value : `0${value}`
}

export const reHour = (h) =>{
    if(h === 0 ){
        return null
    } else {
       return (
           <span>
               <span> {re(h)} </span>: 
           </span>
       )
    }
}

const Display = ({time, isMark}) => {
   
    let withMarks = isMark ? "withMarks" : ""
    const text = `Current time`
        
    

    const {ms,s,m,h} = time

    return (
        <div className={`displayWrapper ${withMarks}` }>
            {reHour(h)} 
            <span> {re(m)} </span>:
            <span> {re(s)} </span>.
            <span> {re(ms)} </span>
            <div className="textMark"> {isMark ? text : null} </div>
        </div>
    )
}

export default Display
