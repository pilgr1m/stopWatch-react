import React from 'react'

export const re = (value) => {
    return value >= 10 ? value : `0${value}`
}

export const reHour = (h) =>{
    if(h === 0 ){
        return null
    } else {
       return `<span> ${re(h)} </span>:` 
    }
}

const Display = ({time}) => {

    const {ms,s,m,h} = time

    return (
        <div>
            {reHour(h)} 
            <span> {re(m)} </span>:
            <span> {re(s)} </span>.
            <span> {re(ms)} </span>
        </div>
    )
}

export default Display
