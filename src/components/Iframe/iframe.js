
import React from 'react';
import '../HomePage/buttonGames.css'
import './iframe.css';


const items = ["carousel", "tacleclick","nonogram", "cityplay"]

const displayRandomItem = () => {
  const randomItem = items[Math.floor(Math.random()*items.length)]
  return randomItem
}

const Iframe = () => {
  return (
  <div>
    <iframe src="//localhost:3000/snake"

        width="330px"
        height="260px"
        id="test"
        className="myClassname"
        display="initial"
        position="relative"
        />
  </div>
  )
}

export default Iframe


// <iframe src={"//localhost:3000/" + displayRandomItem()}
