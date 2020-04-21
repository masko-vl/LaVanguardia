import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header className="memory-header">
                <div className="title">
                    Juego de memoria
                </div>
                <div>
                    <button className="reinit-button" onClick={this.props.resetGame}>
                        reiniciar
                    </button>
                </div>
                <div className="title">
                {this.props.gameFinished 
                    ? <div><h1>{` Resultado: ${ Math.round(10 / this.state.tryes * 100) }/ 100 puntos !`}</h1></div>
                    : <h2>intentos: {this.props.tryes}</h2>
                }
                </div>
            </header>
        )
    }
}

export default Header