import React from 'react';
import styled from 'styled-components';
import "./GameContainer.css";
import './BigBoard.css'

const GameContainer = props =>(
    // GameContainer.state.display = false ? return counter : return counter + 1 and it changes back to false
    props.show
        ? <div className="TeamImage">
            <img onClick={props.itemClicked} className="team-logo" src={props.logo} alt=''/>
        </div>
        : null
)

 export default GameContainer;