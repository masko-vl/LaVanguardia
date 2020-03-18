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
            className="bla"
            image={props.logo}
            title="team logo"
            onClick={props.itemClicked}
      />
        : null
)

// const SmallSquare = props => {
//     // SmallSquare.state.display = false ? return counter : return counter + 1 and it changes back to false
//     if (props.show && props.logoClicked) {
//         return (
//     // COMMENT writing the z-index into the id of the div below
//         <CardMedia
//             className="logoDisplayed"
//             image={props.logo}
//             title="team logo"
//             onClick={props.itemClicked}
//         />)
//       } else if (props.show) {
//           return (
//         <CardMedia
//         className="logoHidden"
//         image={props.logo}
//         title="team logo"
//         onClick={props.itemClicked}
//     />)
//       } else {
//         return null
//     }
// }

 export default SmallSquare;