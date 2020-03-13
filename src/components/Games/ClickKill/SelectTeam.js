import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./SelectTeam.css";
import { positions } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const SelectTeam = props => {
    const classes = useStyles();
    return (
    <Fragment>
        <h1>Qué Equipo quieres eliminar?</h1>
        <div className="img-container">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {props.imageList.map((equipo)=>{                         
                        return (
                            <Grid item xs={3}>
                                <img className="img-team" id={equipo.toString()} onClick={props.printName} src={equipo} alt='' height="80px"/> 
                            </Grid>   
                        )
                    })}
                </Grid>
            </div>
        </div>   
    </Fragment>
    )
}



export default SelectTeam;


// const SquareContainer = styled.div`
//     position: absolute;
//     top: ${props => props.top}px;
//     left: ${props => props.left}px;
// `;



// const SmallSquare = props =>(
//     // SmallSquare.state.display = false ? return counter : return counter + 1 and it changes back to false
//     props.show
//         ? <SquareContainer top={props.top} left={props.left} className="TeamImage">
//             <img onClick={props.itemClicked} className="team-logo" src={props.logo} alt=''/>
//         </SquareContainer>
//         : null
// )
//  export default SmallSquare;