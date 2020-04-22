import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header className="memory-header">
                <h1 className="title">
                    Memory de presidentes
                </h1>

                <div>
                {this.props.gameFinished 
                    ? 
                        <div>
                        <button className="winner-reinit-button" onClick={this.props.resetGame}>
                        <p className="memoryResult">13/ 10 puntos !</p>
                            INTÉNTALO OTRA VEZ !
                        </button>
                        </div>
                        
                    : <div>
                        <p className="memoryResult">intentos: {this.props.tryes}</p>
                        <button className="reinit-button" onClick={this.props.resetGame}>
                            reiniciar
                        </button>
                    </div>
                }
                </div>
            </header>
        )
    }
}

export default Header