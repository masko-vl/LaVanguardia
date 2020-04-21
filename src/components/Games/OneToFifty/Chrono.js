import React, { useState, useEffect } from 'react';


function Chrono () {

    let [timer, setTimer] = useState();

    let milliseconds = 0;
    let minutes = 0;
    let seconds = 0;
    function startTime (){
        milliseconds++
        if (milliseconds > 999) {
            milliseconds = 0
            seconds++
        }
        if (seconds > 59) {
            seconds = 0
            minutes++
        }
        setTimer(`${minutes}:${seconds}:${milliseconds}`)
    }

    return (
        <div className="col-12 col-md-6">
            <div className="row justifyCenter">
                <p>Tiempo: {timer}</p>
            </div>          
        </div>

    )
}

export default Chrono;