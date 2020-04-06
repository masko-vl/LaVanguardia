import React from 'react';
import './category.css'

const Category = (props) => {
  return (
    <div>
      <div className="navCategories">
        <button className="buttonCategories">Palabras</button>
        <button className="buttonCategories">Rompecabezas</button>
        <button className="buttonCategories">Arcade</button>
        <button className="buttonCategories">Cartas</button>
        <button className="buttonCategories">Casino</button>
        <button className="buttonCategories">Todos</button>
        <input type="text" placeholder="Search.."/>
      </div>

    </div>
  )
}

export default Category
