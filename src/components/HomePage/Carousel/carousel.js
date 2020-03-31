import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../buttonGames.css';
import cityban from '../imgmainPage/city@2x.png';
import tackle from '../imgmainPage/tackle@2x.png'
import titleGeo from '../imgmainPage/titleGeo.png';
import nonogram from '../imgmainPage/provisional_nonogram.png';

const CarouselHome = (props) => {
  return (

<div id="test">
  <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imagecarousel"
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
          className="d-block w-100 imagecarousel"
          src={titleGeo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <button className='myButton'>
            <Link to='geochallange' className='jugartext'> Jugar
            </Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imagecarousel"
          src={tackle}
          alt="Third slide"
        />
        <Carousel.Caption>
          <button className='myButton'>
            <Link to='tacleclick' className='jugartext'> Jugar
            </Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nonogram}
          alt="NONOGRAM"
        />

        <Carousel.Caption>
          <button className='myButton'>
            <Link to='nonogram' className='jugartext'> Jugar
            </Link></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  </div>
)

}

export default CarouselHome
