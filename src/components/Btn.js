import React from 'react'

const Btn = ({start, status, stop, reset, resume, mark}) => {


    return (
        <div>
            {status === 0
            ? <button onClick={start}> Start </button>
            : null
            }

            {status === 1
            ? <div>
                <button onClick={stop}> Stop </button>
                <button onClick={mark}> Mark </button>
                
            </div>
            : null
            }

            {status === 2
            ? <div>
                <button onClick={resume}> Resume </button>
                <button onClick={reset}> Reset </button>
            </div>
            : null
            }
  
        </div>
    )
}

export default Btn
