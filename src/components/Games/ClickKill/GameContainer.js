import React from 'react';
import styled from 'styled-components';
import "./GameContainer.css";
import './BigBoard.css'
import Grid from '@material-ui/core/Grid';

// COMMENT: GameContainer positions have been deleted as we will use Zindex instead of props fixed positions

const GameContainer = props =>(
    // GameContainer.state.display = false ? return counter : return counter + 1 and it changes back to false
    props.show
    // COMMENT writing the z-index into the id of the div below
        ? <div>
            <img className="TeamImage" onClick={props.itemClicked} className="team-logo" src={props.logo} alt=''/>
        </div>
        : null
)

 export default GameContainer;