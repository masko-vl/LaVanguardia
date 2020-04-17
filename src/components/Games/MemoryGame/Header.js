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
                    intentos: {this.props.tryes}
                </div>
            </header>
        )
    }
}

export default Header