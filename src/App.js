import React, {useState} from 'react'
import Btn from './components/Btn'
import Display from './components/Display'
import './App.css'
import Mark from './components/Mark'

const App =()=> {

	const [time, setTime] = useState({
		ms:0,
		s:0,
		m:0,
		h:0
	})
	const [interv, setInterv] = useState()
	const [status, setStatus] = useState(0)
	//0- not started
	//1- started
	//2- stopped

	const [isMark, setIsMark] = useState(false)
	const [markTime, setMarkTime] = useState([])


	const start = () => {
		run()
		setStatus(1)
		setInterv(setInterval(run, 10))
	}

	let updateMs = time.ms, 
		updateS = time.s, 
		updateM = time.m, 
		updateH = time.h
		
	const run = () => {
		if(updateM === 60){
			updateH++
			updateM = 0
		}
		if(updateS === 60){
			updateM++
			updateS = 0
		}
		if(updateMs === 99){
			updateS++
			updateMs = -1
		}
		updateMs++
		return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
	}

	const stop = () => {
		clearInterval(interv)
		setStatus(2)
	}

	const reset = () => {
		clearInterval(interv)
		setStatus(0)
		setTime({ms:0, s:0, m:0, h:0})
		setMarkTime([])
		setIsMark(false)
	}

	const resume = () => start()

	const mark = () => {
		setIsMark(true)
		let obj = {
			ms: time.ms,
			s: time.s,
			m: time.m,
			h: time.h,
		}
		setMarkTime([...markTime, obj])
	}

  return (
    <div className="app">
		<header>
			<h2 className="header">
				stop<span>W</span>atch
			</h2>
		</header>
	   
       		<Display 
			   	time={time}
				isMark={isMark}   
			/>
		
			<Mark 
				isMark={isMark} 
				markTime={markTime}
			/>
	   
			<Btn 
				start={start} 
				status={status}
				stop={stop}
				reset={reset}
				resume={resume}
				mark={mark}
			/>
		<footer> 
			<span>app by <a href="https://www.linkedin.com/in/vanja-volokha/">Ivan Volokha</a> </span>
		</footer>
    </div>
  )
}
export default App
