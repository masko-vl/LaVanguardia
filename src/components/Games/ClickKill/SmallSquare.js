import React from 'react';
import styled from 'styled-components';
import "./SmallSquare.css";
import './BigBoard.css'
import CardMedia from '@material-ui/core/CardMedia';


// COMMENT: SmallSquare positions have been deleted as we will use Zindex instead of props fixed positions



const SmallSquare = props =>(
    props.show && !props.logoClicked 
    
    ?    // COMMENT writing the z-index into the id of the div below           
        <img 
        className="logoDisplayed" 
        onClick={props.itemClicked} 
        className="team-logo" 
        src={props.logo} 
        alt=''
        />
        
        : props.show && props.logoClicked
        ? 
        <img 
        className="logoHidden" 
        onClick={props.itemClicked} 
        className="team-logo" 
        src={props.logo} 
        alt=''
        style={{opacity: '0'}}
        />
       
        : null
)

 export default SmallSquare;