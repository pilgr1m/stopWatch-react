import React from 'react'
import {re, reHour} from './Display'

const Mark = ({isMark, markTime}) => {

    const timeToNum = (ms, sec, min, hour) => {
        let h = hour * 360000
        let m = min * 6000
        let s = sec * 100
        let num = ms + s + m + h

        return num
    }

    return (
        <>
            {isMark === true 
            ? <div className="markWrapper">
                {markTime.map((item,index) => {
                    const {ms,s,m,h} = item
                    let prev = index > 0 ? markTime[index - 1]: item
                    let currentValue = timeToNum(ms,s,m,h)
                    let previousValue = timeToNum(prev.ms, prev.s, prev.m, prev.h)
                    let summ = currentValue - previousValue

                    return  <div key={index} className="markFlex">
                                <div>
                                    <span className="material-icons-round" id="marks"> done </span> 
                                    <span className="numOfMark"> 
                                        {re(index+1)} 
                                    </span>
                                </div>

                                <div>
                                    <span className="different">
                                        +{reHour(Math.floor(summ / 360000))}
                                        {re(Math.floor(summ / 6000) % 60)}: 
                                        {re(Math.floor(summ / 100) % 60)}.
                                        {re(summ % 100)}
                                    </span> 
                                </div>

                                <div>
                                    <span >
                                        {reHour(h)}
                                        {re(item.m)}:{re(item.s)}.{re(item.ms)} 
                                    </span>
                                </div>
                               
                            </div>
                })}
                </div>
            : null
            }
        </>
    )
}
export default Mark

