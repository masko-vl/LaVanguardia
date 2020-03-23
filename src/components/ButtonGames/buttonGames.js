import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../ButtonGames/buttonGames.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import cityban from '../imgmainPage/city@2x.png';
import tackle from '../imgmainPage/tackle@2x.png';
import titleGeo from '../imgmainPage/titleGeo.png';
import './buttonGames.css'



// const ButtonGames =(props)=>{
//     return (
//         <div>
//         <button>
// <Link to='cityplay'> Jugar
// </Link></button>
//       <button>
// <Link to='tacleclick'> Jugar
// </Link></button>
// </div>
//     )
// }

const ButtonGames = (props)=>{
    return(
        <div>
        <Fragment>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cityban}
      alt="First slide"
    />
    <Carousel.Caption>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={titleGeo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Geo Challange</h3>
      <p className="geoCarouselText">Cuánto sabes de banderas!</p>
      <button className='myButton'>
        <Link to='geochallange' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tackle}
      alt="Third slide"
    />

    <Carousel.Caption>
      <button className='myButton'>
        <Link to='tacleclick' className='jugartext'> Jugar
        </Link></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Fragment>
<Fragment>
<CardDeck className='cardcarousel'>
  <Card>
    <Card.Img variant="top" src={cityban}
/>
    <Card.Body>
      <Card.Title>City Play</Card.Title>
      <Card.Text>
      Descubre las capitales del mundo!
      </Card.Text>
      <button className='myButton'>
        <Link to='cityplay' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={titleGeo}
 />
    <Card.Body>
      <Card.Title>Geo Challange</Card.Title>
      <Card.Text>
      Cuánto sabes de banderas!
      </Card.Text>
      <button className='myButton'>
        <Link to='geochallange' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={tackle}
 />
    <Card.Body>
      <Card.Title>Tacle Click</Card.Title>
      <Card.Text>
        Da una paliza a tu adversario!
      </Card.Text>
      <button className='myButton'>
        <Link to='tacleclick' className='jugartext'> Jugar
        </Link></button>
    </Card.Body>
  </Card>

</CardDeck>
</Fragment>
</div>
    )
}
export default ButtonGames
