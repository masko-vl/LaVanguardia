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
              <h2>Juegos en línea de La Vanguardia</h2>
              <hr></hr>
              <p>¡Bienvenidos a la sección de juegos de La Vanguardia! Una amplia selección de juegos online gratis para que lleves la diversión a otro nivel. Sin necesidad de descarga, juega online y sin preocupaciones a nuestros juegos: TacleClik, Nonogram, CityPlay, GeoChallenge y OneToFifty.</p>
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
            <h3 className="titleFeatured">Destacados de la Semana</h3>
            <hr></hr>
            <div className="featuredGames">
              <div className="cardFeatured">
                <Link to='tacleclick' className=''>
                  <img
                    className="imgFeatured"
                    src={tackle}
                    alt="First slide"
                  />
                </Link>
                  <p>Compite entre tus equipos de fútbol favoritos y déjate llevar por la adrenalina, solo los más rápidos ganarán!</p>
                <Link to='tacleclick' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='cityplay' className=''>
                  <img
                    className="imgFeatured"
                    src={citybanmini}
                    alt="First slide"
                  />
                </Link>
                  <p>Con CityPlay adivina las capítales tendrás el increíble desafío de responder un quiz sobre los países y sus capitales ¡No podrás parar de jugar!</p>
                <Link to='cityplay' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='geoChallenge' className=''>
                  <img
                    className="imgFeatured"
                    src={titleGeo}
                    alt="First slide"
                  />
                </Link>
                  <p>Descubre distintos lugares con Geo Challenge, un juego desafiante que te llevará a recorrer el mundo y te mantendrá ocupado por horas!</p>
                <Link to='geoChallenge' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='nonogram' className=''>
                  <img
                    className="imgFeatured"
                    src={nonogram}
                    alt="First slide"
                  />
                </Link>
                   <p>Con este juego adictivo pasarás horas coloreando filas y columnas, este novedoso juego pondrá a prueba tu lógica</p>
                <Link to='nonogram' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
            </div>




          </div>

        </div>

      </div>
    </div>
    )
}
export default ButtonGames
