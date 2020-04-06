import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../HomePage/buttonGames.css';
import cityban from './imgmainPage/cover_cp@2x.png';
import citybanmini from './imgmainPage/cityplaymini-100.png'
import tackle from './imgmainPage/imagen_home_tt@2x.png'
import titleGeo from './imgmainPage/imagen_home_gc@2x.png';
import nonogram from './imgmainPage/provisional_nonogram.png';
import CarouselHome from './Carousel/carousel'
import Category from '../Categories/category'

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
        <Category />
      </div>
      <div className="gameSectionContainer">
        <div>
          <div>
            <div className="headerText">
              <h2>Juegos gratuitos en línea de La Vanguardia</h2>
              <p>Bienvenidos a La Vanguardia Juegos blaasdkfaisodfjkasñdfjkladsñfjklasdñfjkasdñlfjkasdklfjañsdlkfjasdljkfasdñkfljasñdlfkjasdñklfjasñdlkfjañsdlkfjasñkldfjañslkdfjañlsdkfjalñsdkfjañlsdkfjañlsdkfjañlskdfjañlksdfjasñlkdfjañsdfjasdñfjkasdfjklañslkdfjañsdlkfjasñdklfjasdñfjklasdkñfjladfjañdfjaksdjlfasdkfasdjkf</p>
            </div>
            <div>
              <div>
                <Link to='cityplay' className=''>
                  <img
                    className="mainCardGame"
                    src={cityban}
                    alt="First slide"
                  />
                </Link>
              </div>
            </div>

          </div>
          <div>
            <h4 className="titleFeatured">Destacados de la Semana</h4>
            <div className="featuredGames">
              <div className="cardFeatured">
                <Link to='cityplay' className=''>
                  <img
                    className="imgFeatured"
                    src={tackle}
                    alt="First slide"
                  />
                </Link>
                <p>Compite entre tus equipos de fútbol favoritos y déjate llevar por la adrenalina solo los más rápidos ganarán!</p>

                <button className="buttonFeatured"> JUGAR AHORA </button>
              </div>
              <div className="cardFeatured">
                <Link to='cityplay' className=''>
                  <img
                    className="imgFeatured"
                    src={citybanmini}
                    alt="First slide"
                  />
                </Link>
                <p>Compite entre tus equipos de fútbol favoritos y déjate llevar por la adrenalina solo los más rápidos ganarán!</p>

                <button className="buttonFeatured"> JUGAR AHORA </button>
              </div>
              <div className="cardFeatured">
                <Link to='cityplay' className=''>
                  <img
                    className="imgFeatured"
                    src={titleGeo}
                    alt="First slide"
                  />
                </Link>
                <p>Compite entre tus equipos de fútbol favoritos y déjate llevar por la adrenalina solo los más rápidos ganarán!</p>

                <button className="buttonFeatured"> JUGAR AHORA </button>
              </div>
              <div className="cardFeatured">
                <Link to='cityplay' className=''>
                  <img
                    className="imgFeatured"
                    src={tackle}
                    alt="First slide"
                  />
                </Link>
                <p>Compite entre tus equipos de fútbol favoritos y déjate llevar por la adrenalina solo los más rápidos ganarán!</p>

                <button className="buttonFeatured"> JUGAR AHORA </button>
              </div>
            </div>




          </div>

        </div>

      </div>
    </div>
    )
}
export default ButtonGames
