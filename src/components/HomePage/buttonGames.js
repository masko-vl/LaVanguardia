import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../HomePage/buttonGames.css';
import cityban from './imgmainPage/city@2x.png';
import tackle from './imgmainPage/tackle@2x.png'
import titleGeo from './imgmainPage/titleGeo.png';
import nonogram from './imgmainPage/provisional_nonogram.png';
import CarouselHome from './Carousel/carousel'

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
      <div>
        <CarouselHome />
      </div>
      <div id="test">
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
    </div>
    )
}
export default ButtonGames
