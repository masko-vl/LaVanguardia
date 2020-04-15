import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="title">
                    Memory game
                </div>
                <div>
                    <button className="reinit-button">
                        reinit
                    </button>
                </div>
                <div className="title">
                    intentos:
                </div>
            </header>
        )
    }
}

export default Header