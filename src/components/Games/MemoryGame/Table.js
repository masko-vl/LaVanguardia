import React, { createFactory } from 'react';
import Card from './Card';
import './Table.css';

class Table extends React.Component {
    render() {
        return(
            <div className="table">
                {
                    this.props.baraja.map((card)=> <span><Card icono={card.icono}/></span>)
                }
            </div>
        )
    }
}

export default Table