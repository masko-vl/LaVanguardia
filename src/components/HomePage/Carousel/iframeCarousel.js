import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../buttonGames.css';
import cityban from '../imgmainPage/city@2x.png';
import tackle from '../imgmainPage/tackle@2x.png'
import titleGeo from '../imgmainPage/titleGeo.png';
import nonogram from '../imgmainPage/provisional_nonogram.png';

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
    autoPlaySpeed={50000}
    responsive={responsive}>
    <div>
      <Link to='cityplay' className='jugartext'>
        <img
          className="d-block w-100 imagecarousel"
          src={cityban}
          alt="First slide"
        />
      </Link>

      <p className="textCarouseliFrame">Test texto card</p>
    </div>
    <div>
      <Link to='geochallange' className='jugartext'>
        <img
          className="d-block w-100 imagecarousel"
          src={titleGeo}
          alt="Third slide"
        />
      </Link>
      <p className="textCarouseliFrame">Test texto card</p>
    </div>
    <div>
      <Link to='tacleclick' className='jugartext'>
        <img
          className="d-block w-100 imagecarousel"
          src={tackle}
          alt="Third slide"
        />
      </Link>
    <p className="textCarouseliFrame">Test texto card</p>
    </div>
    <div>
      <Link to='nonogram' className='jugartext'>
        <img
          className="d-block w-100"
          src={nonogram}
          alt="NONOGRAM"
        />
      </Link>
      <p className="textCarouseliFrame">Test texto card</p>
    </div>
  </Carousel>


  </div>
)

  }

export default IframeCarousel
