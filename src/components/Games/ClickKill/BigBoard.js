import React, { Fragment } from 'react';
import GameContainer from './GameContainer';
import './BigBoard.css';
import SelectTeam from './SelectTeam';
import Alaves from './images/Alaves.png';
import Athletic from './images/Athletic.png';
import Atletico from './images/Atletico.png';
import Barcelona from './images/Barcelona.png';
import Betis from './images/Betis.png';
import Celta from './images/Celta.png';
import Eibar from './images/Eibar.png';
import Espanyol from './images/Espanyol.png';
import Getafe from './images/Getafe.png';
import Granada from './images/Granada.png';
import Levante from './images/Levante.png';
import Madrid from './images/Madrid.png';
import Mallorca from './images/Mallorca.png';
import Osasuna from './images/Osasuna.png';
import Rsociedad from './images/Rsociedad.png';
import Sevilla from './images/Sevilla.png';
import Valencia from './images/Valencia.png';
import Valladolid from './images/Valladolid.png';
import Villareal from './images/Villareal.png';
import Leganes from './images/Leganes.png';
import styled from 'styled-components';
import { positions } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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

const GameTable = props => {
  const classes = useStyles();
  const zIndex = 0;
  return (
  <div>
      <div className="img-container">
          <div className={classes.root}>
          {20 *
              <Grid container spacing={3}>                        
                  <Grid item xs={3} zIndex={zIndex +1}>x</Grid>
              </Grid>
                }
          </div>
      </div>   
  </div>
  )
}



const BigContainer = styled.div`
    position: relative;
   
`;

export default class BigBoard extends React.Component {
  
  state = {
    squareIndex: 10,            //  !!!!!!!! null by default. the "2" value was written for testing. making possible to get the index of the image clicked
    clickedIndex: false,
    teamChosen: false,
    counter: 0,
    gameTable: ["","","","","","","","","","","","","","","","","","","",""],
    logoSelected: '',
    imageList: [
      Alaves,
      Athletic,
      Atletico,
      Barcelona,
      Betis,
      Celta,
      Eibar,
      Espanyol,
      Getafe,
      Granada,
      Levante,
      Madrid,
      Mallorca,
      Osasuna,
      Rsociedad,
      Sevilla,
      Valladolid,
      Valencia,
      Villareal,
      Leganes
    ]
  }
  
  delay = 2000;

  chooseSmallSquare = () => {
    let randomIndex = Math.floor(Math.random() * 20);
    this.setState ({
      squareIndex: randomIndex
    })
  }

  onEndTimer = () => {
    if(this.state.clickedIndex === true){
      this.setState({
        clickedIndex: false, 
        counter: this.state.counter + 1
      })
      this.delay = this.delay - 100;
      console.log("success")
      this.onClickStart()
    } else {
      console.log("finished")
    }
  }

  itemClicked = () => {
    console.log('clicked!');
    this.setState({
      clickedIndex: true
      // update the squareIndex
    })
  }

  onClickStart = () => {
    // Set 1st random index
    this.chooseSmallSquare()
    // Update random index each 2s
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter    
    setTimeout(this.onEndTimer,
      this.delay)
  }


  restartCounter = () => {
    this.setState ({
      counter: 0,
      teamChosen: false
    })
    this.delay = 2000
  }

  printName = (e) => {
      this.setState({
          logoSelected: e.target.id,
          teamChosen: true
      })
  }

  

  render() {    
    return ( 
      <Fragment>
      <div className='pantalla'>
        {this.state.teamChosen === false 
        ? <SelectTeam printName={this.printName} imageList={this.state.imageList}/>
        : <div>
         {/* CREER UN GRID DE 20 CASE. POUR CHAQUE CASE INSERER UN Z-INDEX QU'ON PASSE EN PROPS A SMALLSQUARE. */}

           
                {/* need to use the index :  <GameContainer logo={this.state.logoSelected} show={index === this.state.squareIndex} itemClicked={this.itemClicked} /> */}

                  <GameContainer logo={this.state.logoSelected} show={this.state.squareIndex} itemClicked={this.itemClicked} />
                

          <p>{this.state.counter}</p>
          <button onClick={this.onClickStart}>START</button>
          <button onClick={this.restartCounter}>RESET THE RESULT</button>
          </div>
        }
      </div>
      </Fragment>
    )
  }

    // render() {
    //   return ( 
    //     <Fragment>
    //     <div className='pantalla'>
    //       {this.state.teamChosen === false 
    //       ? <SelectTeam printName={this.printName} imageList={this.state.imageList}/>
    //       : <div>
    //        {/* CREER UN GRID DE 20 CASE. POUR CHAQUE CASE INSERER UN Z-INDEX QU'ON PASSE EN PROPS A SMALLSQUARE. */}

    //         <GameContainer logo={this.state.logoSelected} show={index === this.state.squareIndex} itemClicked={this.itemClicked} />
    //         <p>{this.state.counter}</p>
    //         <button onClick={this.onClickStart}>START</button>
    //         <button onClick={this.restartCounter}>RESET THE RESULT</button>
    //         </div>
    //       }
    //     </div>
    //     </Fragment>
    //   )
    // }
}