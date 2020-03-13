import React from 'react';
import styled from 'styled-components';
import "./GameContainer.css";
import './BigBoard.css'
import Grid from '@material-ui/core/Grid';




const GameContainer = props =>(
    // GameContainer.state.display = false ? return counter : return counter + 1 and it changes back to false
    props.show
    // give the z-index to the div
        ? <div>
            <img className="TeamImage" onClick={props.itemClicked} className="team-logo" src={props.logo} alt=''/>
        </div>
        : null
)

 export default GameContainer;