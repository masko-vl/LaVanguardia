import React from 'react';
import './Card.css';
import Flipcard from "react-flipcard-2";

class Card extends React.Component {

    render() {
        return(
            <div className="item-card">
                <Flipcard>
                    <div className="portada">

                    </div>
                    <div className="contenido">
                        <i className={`fa ${this.props.icono} fa-5x`}></i>
                    </div>
                </Flipcard>              
            </div>
        )
    }
}

export default Card