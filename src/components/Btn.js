import React from 'react'

const Btn = ({start, status, stop, reset, resume, mark}) => {


    return (
        <div className="btnWrapper">
            {status === 0
            ? <span>
                    <span 
                    className="material-icons-round" 
                    id="btnStart" 
                    onClick={start}
                    >
                    play_arrow 
                    </span>
                </span>
            : null
            }

            {status === 1
            ? <div className="btnWrapper">
                    <span>
                        <span 
                        className="material-icons-round" 
                        id="btnMark" 
                        onClick={mark}
                        >
                        check
                        </span>
                    </span>

                    <span>
                        <span 
                        className="material-icons-round" 
                        id="btnStop" 
                        onClick={stop}
                        >
                        pause
                        </span>
                    </span>
            </div>
            : null
            }

            {status === 2
            ? <div className="btnWrapper">
                <span>
                    <span 
                    className="material-icons-round" 
                    id="btnReset" 
                    onClick={reset}
                    >
                    stop 
                    </span>
                </span>
                <span>
                    <span 
                    className="material-icons-round" 
                    id="btnResume" 
                    onClick={resume}
                    >
                    play_arrow 
                    </span>
                </span>               
            </div>
            
            : null
            }
  
        </div>
    )
}

export default Btn
