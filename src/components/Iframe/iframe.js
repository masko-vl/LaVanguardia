
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
    <iframe src={process.env.NODE_ENV === 'production' ? "https://zen-shaw-4b92a9.netlify.com/"+ displayRandomItem() : "//localhost:3000/"+ displayRandomItem()}
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
