import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../ButtonGames/buttonGames.css';
import cityban from '../imgmainPage/city@2x.png';
import tackle from '../imgmainPage/tackle@2x.png'
import titleGeo from '../imgmainPage/titleGeo.png';
import nonogram from '../imgmainPage/provisional_nonogram.png';

//CARROUSEL

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
          <h3>Geo Challange</h3>
          <p>Cuánto sabes de banderas!</p>
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
    </Fragment>


<div className="cards-list">
    <Link to='cityplay' className='jugartext'>
      <div className="carda">
          <div className="card_image"> <img src={cityban} /> </div>
      </div>
    </Link>
    <Link to='geochallange' className='jugartext'>
        <div className="carda">
            <div className="card_image">
              <img src={titleGeo} />
              </div>
        </div>
      </Link>
      <Link to='tacleclick' className='jugartext'>
        <div className="carda">
            <div className="card_image">
              <img src={tackle} />
            </div>
        </div>
      </Link>

     {/*  <Link to='nonogram' className='jugartext'>
        <div class="carda 3">
            <div class="card_image">
              <img src={nonogram} />
            </div>
        </div>
      </Link> */}


  </div>
</div>
    )
}
export default ButtonGames
