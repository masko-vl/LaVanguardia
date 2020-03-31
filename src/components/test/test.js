
import React from 'react';
import '../HomePage/buttonGames.css'
import './test.css';

const items = ["carousel", "tacleclick", "geochallenge", "cityplay"]

const displayRandomItem = () => {
  const randomItem = items[Math.floor(Math.random()*items.length)]
  return randomItem
}

const Test = () => {
  return (
  <div>
    <iframe src={"//localhost:3000/" + displayRandomItem()}
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

export default Test
