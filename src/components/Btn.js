import React from 'react'

const Btn = ({start, status, stop, reset, resume, mark}) => {


    return (
        <div className="btnWrapper">
            {status === 0
            ? <button onClick={start}> <span>&#9658;</span> </button>
            : null
            }

            {status === 1
            ? <div className="btnWrapper">
                <button onClick={mark}> <span>&#10004;</span> </button>
                <button onClick={stop}> <span>&quot;</span> </button>
                
                
            </div>
            : null
            }

            {status === 2
            ? <div className="btnWrapper">
                <button onClick={reset}> <span>&#x25A0;</span> </button>
                <button onClick={resume}> <span>&#9658;</span> </button>   
            </div>
            : null
            }
  
        </div>
    )
}

export default Btn
