import React, { Fragment } from 'react';
import SmallSquare from './SmallSquare';
import SelectTeam from './SelectTeam';
import Grid from '@material-ui/core/Grid';

import './BigBoard.css';
import './Button.css';

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



export default class BigBoard extends React.Component {
  
  state = {
    logoClicked: false,
    gameStarted: false,
    gameEnded: false,
    squareIndex: null,
    logoClassName: "logoDisplayed",            
    clickedIndex: false,
    teamChosen: false,
    counter: 0,
    smallSquaresArray: ["","","","","","","","","","","","","","","","","","","","","","","","",""],                     // COMMENT : array with all fixed position deleted
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

  // CHOOSING A RANDOM SQUARE TO DISPLAY THE LOGO IN THE GAME
  chooseSmallSquare = () => {
    let randomIndex = Math.floor(Math.random() * this.state.smallSquaresArray.length);
    this.setState ({
      squareIndex: randomIndex
    })
  }

  // TIMER GOES FASTER AND FASTER ALONG THE GAME
  onEndTimer = () => {
    // WHEN WE CLICK ON THE FLAG, COUNTER IS INCREASED, THE FLAG DISAPPEARS FROM THAT SQUARE, A NEW RANDOM SQUARE IS CHOSEN
    if(this.state.clickedIndex === true){
      this.setState({
        logoClicked: false,
        clickedIndex: false, 
        logoClassName: "logoDisplayed",
        counter: this.state.counter + 1
      })
      // HERE THE DELAY BECOMES SHORTER
      this.delay = this.delay - 100;
      this.onClickStart()
    } else {
      this.setState({
        gameEnded: true
      })
    }
  }

  itemClicked = () => {
    this.setState({
      logoClicked: true,
      clickedIndex: true
    })
  }

  onClickStart = () => {
    this.chooseSmallSquare()
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter    
    setTimeout(this.onEndTimer,
      this.delay)
    this.setState({
      gameStarted: true,
      gameEnded: false
    })
  }

// STATE IS UPDATED WHEN RESTARTING THE GAME
  restartCounter = () => {
    this.setState ({
      gameStarted: false,
      gameEnded: false,
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
 


  // WE USE MATERIAL-UI FOR LONG-TERM SUSTAINABILITY :
  // - A LONG TERM RESPONSIVE GAME THAT WILL BE EASILY ADAPTABLE TO POSSIBLE FUTURE DESIGN CHANGES (easy to change the number and disposition of lines and columns)
  // - TO USE THE AUTOMATIC Z-INDEX TO GIVE AUTOMATICALLY AS MANY THE POSSIBLE LOGO POSITIONS AS SQUARES, EVEN IN CASE OF BOARDS EVOLUTION 
  //    (we can increase and decrease as much as we want the number of squares without any impact on the game functionalities)
  
  render() {
    return ( 
       <Fragment>
       <div id='generalContainer'>
       <button id="closeButton"><a href="/"><b>x</b></a></button>
       {/* 1ST PAGE IS DISPLAYED UNTIL A FLAG IS CHOSEN */}
         {this.state.teamChosen === false 
         ? <SelectTeam printName={this.printName} imageList={this.state.imageList}/>

         /* THE GAME PAGE IS DISPLAYED ONCE THE FLAG IS CHOSEN. The Gid needs to be made from here to pass the Zindex according to the array.map */
         : <div className="footballGameContainer">
            <h1>Dalos una paliza!</h1>
            <div id="footballCounterButton">{this.state.counter}</div>
            <div className="img-container" flexGrow={1}>
              <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center"
                className="flagSquare" 
              >                            
                {this.state.smallSquaresArray.map((x, index) =>            
                  <Grid item xs={2} style={{height: 90, margin: '2px', border: '1px solid grey', borderRadius: '5px'}} > 
                    <SmallSquare 
                    zIndex={index} 
                    logo={this.state.logoSelected} 
                    randomSquare={index === this.state.squareIndex} 
                    itemClicked={this.itemClicked}
                    logoClicked={this.state.logoClicked}
                    />
                  </Grid>                  
                )}
              </Grid>
                 
            </div><br/>
            <div id="buttonContainer">
           {/* BEFORE STARTING THE GAME THE "start" BUTTON IS DISPLAYED, WHEN FINISHED, the button "playagain" IS DISPLAYED with the result. No button is displayed when playing */}
            { !this.state.gameStarted && !this.state.gameEnded
            ? <button className="startGameButton" onClick={this.onClickStart}>START</button>
            : null
            }
            {this.state.gameStarted && this.state.gameEnded
            ? <button className="playAgainButton" onClick={this.restartCounter}>{this.state.counter} palizas<br/><b>GIVE MORE!!</b></button>
            : null
            }
            </div>
           </div>
         }
       </div>
       </Fragment>
    )
  }
}