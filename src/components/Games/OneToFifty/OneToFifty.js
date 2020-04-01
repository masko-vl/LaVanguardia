import React, { useState, useEffect } from 'react';
import './OneToFifty.scss';
import { Button } from 'reactstrap';

export default function OneToFifty() {

    // ---STATES---
    const [numbersList, changenumbersList] = useState({
        numbers: []
    });
    // ---END OF STATES---
    let gridSize = 12;
    let cell=[];
    for (let i = 0; i < gridSize; i++) {
        cell.push(<div className="col-3" key={i}><div className="cellNumber alignCenter justifyCenter">hola</div></div>)
    }
    return (
        <div className="OneToFifty container-fluid">
            <div className="row timeAndActualNumber alignCenter">
                <div className="col-6">
                    <p>Tiempo</p>
                </div>
                <div className="col-6">
                    <p>Numero actual</p>
                </div>
            </div>
            <div className="row numbersGrid">
                {cell}
            </div>
            <Button id="button">Restart</Button>
        </div>
    )
}