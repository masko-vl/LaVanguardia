import React from 'react';
import './LavanguardiaPage.css'

function LavanguardiaPage() {
    return(
        <div>
            <div className="header-profile">
                <div className="header-profile__wrapper">
                    <div className="navbarRow">
                                <a className="header-profile__logo" href="https://www.lavanguardia.com">
                            <figure className="header-profile__figure" alt="La Vanguardia">
                                <img src="https://rsc.lavanguardia.com/img/logo-image-v1000486.svg" className="img-responsive" alt="La Vanguardia" rel="logo"></img>
                            </figure>
                            </a>
                    </div>
                </div>
            </div>
            <nav className="header-menu">
                <div className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-list-item">Al minuto</li>
                        <li className="nav-list-item">Internacional</li>
                        <li className="nav-list-item">Política</li>
                        <li className="nav-list-item">Opinión</li>
                        <li className="nav-list-item">Vida</li>
                        <li className="nav-list-item">Deportes</li>
                        <li className="nav-list-item">Economía</li>
                        <li className="nav-list-item">Local</li>
                        <li className="nav-list-item">Gente</li>
                        <li className="nav-list-item">Cultura</li>
                        <li className="nav-list-item">Sucesos</li>
                        <li className="nav-list-item">Temas</li>
                    </ul>
                </div>
            </nav>
            <div>
                <div className="main">
                    
                </div>
            </div>
        </div>
    )
}

export default LavanguardiaPage