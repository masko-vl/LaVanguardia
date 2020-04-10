import React from 'react';
import './category.css';
import logoProfile from './user_info.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



//Navbar Categories in the game section page
const Category = (props) => {
  return (
    <div>
      <div className="navCategories">
        <button className="buttonCategories">Palabras</button>
        <button className="buttonCategories">Arcade</button>
        <button className="buttonCategories">Puzzles</button>
        <button className="buttonCategories">Cartas</button>
        <button className="buttonCategories">Casino</button>
        <button className="buttonCategories">Todos</button>
        <input className="buttonCategories" type="text" placeholder="Search.."/>
        <div className="userProfileLogo">
          <img src={logoProfile} className="imageUserLogin"/>
          <p>Iniciar Sesión</p>
        </div>
      </div>

    </div>
  )
}

export default Category
