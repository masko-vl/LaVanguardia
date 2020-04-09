import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../HomePage/buttonGames.css';
import cityban from '../HomePage/imgmainPage/city@2x.png';
import tackle from '../HomePage/imgmainPage/imagen_home_tt@2x.png'
import titleGeo from '../HomePage/imgmainPage/imagen_home_gc@2x.png';
import nonogram from '../HomePage/imgmainPage/provisional_nonogram.png';

const IframeCarousel = (props) => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  };

  return (

<div id="testiframe">

  <Carousel showDots autoPlay dotListClass infinite
    autoPlaySpeed={10000}
    responsive={responsive}>
    <div>
      <Link to='cityplay' className='jugartext'>
        <img
          className="imagecarousel"
          src={cityban}
          alt="First slide"
        />
      </Link>

      <p className="textCarouseliFrame">Juega a citiplay y pon a prueba tus conocimientos sobre capitales de todo el mundo</p>
    </div>
    <div>
      <Link to='geochallenge' className='jugartext'>
        <img
          className="imagecarousel"
          src={titleGeo}
          alt="Third slide"
        />
      </Link>
      <p className="textCarouseliFrame">Adivina de que país es la bandera en GeoChallenge</p>
    </div>
    <div>
      <Link to='tacleclick' className='jugartext'>
        <img
          className="imagecarousel"
          src={tackle}
          alt="Third slide"
        />
      </Link>
    <p className="textCarouseliFrame">Dale una paliza a tu rival!</p>
    </div>
    <div>
      <Link to='nonogram' className='jugartext'>
        <img
          className="imagecarousel"
          src={nonogram}
          alt="NONOGRAM"
        />
      </Link>
      <p className="textCarouseliFrame">Nonogram text</p>
    </div>
  </Carousel>


  </div>
)

  }

export default IframeCarousel
