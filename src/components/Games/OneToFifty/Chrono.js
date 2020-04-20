import React, { useState, useEffect } from 'react';


function Chrono () {
    // presentTime = currentTime - startTime (restamosla hora actual a la hora en la que se ha empezado a jugar)
    let [currentTime, setCurrentTime] = useState({});
    let [startTime, setStartTime] = useState({});
    let[presentTime, setPresentTime] = useState({
        minutos: 0,
        segundos : 0,
        milisegundos: 0
    });

    let x = new Date();
    let y = new Date();

    useEffect(()=>{
      setStartTime({
            minutos: x.getMinutes(),
            segundos: x.getSeconds(),
            milisegundos: x.getMilliseconds()
        }) 
        setInterval(rightNow(),1000); 
    },[])
      
    async function rightNow() {
        await setCurrentTime({
            minutos: y.getMinutes(),
            segundos: y.getSeconds(),
            milisegundos: y.getMilliseconds()
        });
        
        setPresentTime({
            minutos: Number(currentTime.minutos) - Number(startTime.minutos),
            segundos: Number(currentTime.segundos) - Number(startTime.segundos) ,
            milisegundos: Number(currentTime.milisegundos) - Number(startTime.milisegundos)
        })
        console.log(currentTime.minutos)
        console.log(presentTime.minutos)
    }

    return (
        <div className="col-12 col-md-6">
            <div className="row justifyCenter">
                <p> {
                `Tiempo : ${presentTime.minutos} : ${presentTime.segundos} : ${presentTime.milisegundos}`
                } </p>
            </div>          
        </div>
    )
}

export default Chrono;