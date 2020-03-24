import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../ButtonGames/buttonGames.css';
import cityban from '../imgmainPage/city@2x.png';
import tackle from '../imgmainPage/tackle@2x.png'


//CARROUSEL
/*  <Fragment>
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsUqRYnCvLDweQUDT96a2AkKgTccxvS12zPLupryRPMhiZ1S1N"
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
    </Fragment>*/


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
    <div id="grad-header">
      <h1 id="grad-title">Juega ahora !</h1>
    </div>
    
<div class="cards-list">

    <Link to='cityplay' className='jugartext'>
      <div class="carda 1">
          <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
            <div class="card_title title-white">
              <p>City Play</p>
            </div>
      </div>  
    </Link>

    <Link to='geochallange' className='jugartext'>
        <div class="carda 2">
            <div class="card_image">
              <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
              </div>
            <div class="card_title title-white">
              <p>Geo Challenge</p>
            </div>
        </div>
      </Link>

      <Link to='tacleclick' className='jugartext'>
        <div class="carda 3">     
            <div class="card_image">
              <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
            </div>
            <div class="card_title">
              <p>Tacle Click</p>
            </div>
        </div>
      </Link>
    

  </div>
</div>
    )
}
export default ButtonGames