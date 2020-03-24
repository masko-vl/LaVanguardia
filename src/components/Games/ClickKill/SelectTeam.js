import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./SelectTeam.css";
import "./BigBoard.css"


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

// WE USE MATERIAL-UI FOR LONG TERM SUSTAINABILITY, WHATEVER THE NUMBER OF TEAMS
const SelectTeam = props => {
    const classes = useStyles();
    return (
    <div className="footballGameContainer">
        <h1>A qué equipo quieres dar una Paliza?</h1>
        <div className="img-container">
            <div className={classes.root}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className="flagSquare">
                    {props.footballFlags.map((equipo)=>
                        <Grid  item xs={2} style={{height: 90, margin: '2px', border: '1px solid grey', borderRadius: '5px', padding: 2}}>
                            <img className="teamLogo" id={equipo.toString()} onClick={props.printName} src={equipo} alt=''/>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    </div>
    )
}


export default SelectTeam;
