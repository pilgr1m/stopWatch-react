import React from 'react'
import {re, reHour} from './Display'

const Mark = ({isMark, markTime}) => {

    console.log(markTime) 

    const odds = (ms, sec, min, hour) => {
        let h = hour * 36000
        let m = min * 600
        let s = sec * 100
        
        let num = ms + s + m + h
        return num
    }


    return (
        <>
            {isMark === true 
            ? <>
                {markTime.map((item,index) => {
                    console.log(item)
                    console.log((item-1))
                    const {ms,s,m,h} = item
                    return  <div key={index}>
                                <span>{index+1} ---</span>
                                <span> +{odds(ms,s,m,h)} 

                                - {odds((item-1).ms,(item-1).s,(item-1).m,(item-1).h)} 
                                - {odds((item).ms,(item).s,(item).m,(item).h)} 
                                
                                ---</span>
                                {reHour(item.h)} 
                                <span> {re(item.m)} </span>:
                                <span> {re(item.s)} </span>.
                                <span> {re(item.ms)} </span>

                            </div>
                })}
                </>
            : null
            }
        </>
    )
}
export default Mark

