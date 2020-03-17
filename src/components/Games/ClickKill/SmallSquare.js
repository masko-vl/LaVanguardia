import React from 'react';
import styled from 'styled-components';
import "./SmallSquare.css";
import './BigBoard.css'
import CardMedia from '@material-ui/core/CardMedia';


// COMMENT: SmallSquare positions have been deleted as we will use Zindex instead of props fixed positions

const SmallSquare = props =>(
    // SmallSquare.state.display = false ? return counter : return counter + 1 and it changes back to false
    props.show
    // COMMENT writing the z-index into the id of the div below
        ? <CardMedia
            className={props.logoClassName}
            image={props.logo}
            title="team logo"
            onClick={props.itemClicked}
      />
        : null
)

 export default SmallSquare;