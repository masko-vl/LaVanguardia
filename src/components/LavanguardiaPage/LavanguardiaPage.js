import React from 'react';
import './LavanguardiaPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import firstrow from './images/firstrow.png';
import firstrowseccol from './images/firstrowseccol.png';
import firstrowtercol from './images/firstrowtercol.png';
import secrowfircol from './images/secrowfircol.png';
import secrowfircolsec from './images/secrowfircolsec.png';
import secrowtercol from './images/secrowtercol.png';
import secrowseccolsec from './images/secrowseccolsec.png';
import terrowfircol from './images/terrowfircol.png';
import terrowseccol from './images/terrowtercol.png';
import terrowtercol from './images/terrowtercol.png';

const items = ["tacleclick", "cityplay"]

const displayRandomItem = () => {
  const randomItem = items[Math.floor(Math.random()*items.length)]
  return randomItem
}

function LavanguardiaPage() {
    return(
        <div>
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
                <Container className="main">
                <Row>
                    <Col md="6">
                        <img className="main-img" src={firstrow}/>
                    </Col>
                    <Col md="3">
                         <img className="main-img"src={firstrowseccol}/>
                    </Col>
                    <Col md="3">
                        <img className="main-img"src={firstrowtercol}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <img className="main-img"src={secrowfircol}/>
                        <img className="main-img"src={secrowfircolsec}/>
                    </Col>
                    <Col md="4">
                        <img className="main-img"src={secrowtercol}/>
                        <img className="main-img"src={secrowseccolsec}/>
                    </Col>
                    <Col md="4">
                      <iframe src="//localhost:3000/carousel"
                          title="carousel"
                          width="330px"
                          height="260px"
                          id="test"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          />
                      <iframe src={"//localhost:3000/" + displayRandomItem()}
                          title="carousel"
                          width="330px"
                          height="240px"
                          id="test"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          />

                    </Col>
                </Row>
                <Row>
                     <Col md="4">
                        <img className="main-img"src={terrowfircol}/>
                    </Col>
                    <Col md="4">
                        <img className="main-img"src={terrowseccol}/>
                    </Col>
                    <Col md="4">
                        <img className="main-img"src={terrowtercol}/>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default LavanguardiaPage