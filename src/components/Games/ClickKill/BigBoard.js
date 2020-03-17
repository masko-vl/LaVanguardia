import React, { Fragment } from 'react';
import SmallSquare from './SmallSquare';
import './BigBoard.css';
import SelectTeam from './SelectTeam';
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
import styled from 'styled-components';
import { positions } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const BigContainer = styled.div`
    position: relative;
   
`;

export default class BigBoard extends React.Component {
  
  state = {
    gameStarted: false,
    squareIndex: null,
    logoClassName: "logoDisplayed",            
    clickedIndex: false,
    teamChosen: false,
    counter: 0,
    smallSquaresArray: ["","","","","","","","","","","","","","","","","","","","","","","",],                     // COMMENT : array with all fixed position deleted
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
    let randomIndex = Math.floor(Math.random() * this.state.smallSquaresArray.length);
    this.setState ({
      squareIndex: randomIndex
    })
  }

  onEndTimer = () => {
    if(this.state.clickedIndex === true){
      this.setState({
        clickedIndex: false, 
        logoClassName: "logoDisplayed",
        counter: this.state.counter + 1
      })
      this.delay = this.delay - 100;
      this.onClickStart()
    } else {
    }
  }

  itemClicked = () => {
    this.setState({
      clickedIndex: true,
      logoClassName: "logoHidden"
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
    this.setState({
      gameStarted: true
    })
  }


  restartCounter = () => {
    this.setState ({
      gameStarted: false,
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
    // const table = GameTable()    
    return ( 
       <Fragment>
       <div className='pantalla'>
         {this.state.teamChosen === false 
         ? <SelectTeam printName={this.printName} imageList={this.state.imageList}/>
         : <div>
            {/*COMMENT : need to use the Zindex :  <SmallSquare logo={this.state.logoSelected} show={Zindex === this.state.squareIndex} itemClicked={this.itemClicked} /> */}
            {/* COMMENT : WRAPPING <SmallSquare> into a ui-grid. so we can pass to every GameContainer a Zindex and construct the grid directly from here */}
            
            <div className="img-container" flexGrow={1}>
            <Grid container spacing={3} >                            
                {this.state.smallSquaresArray.map((x, index) =>            
                    <Grid item xs={3} style={{height: 90, border: '1px solid black'}} > 
                      <SmallSquare zIndex={index} logo={this.state.logoSelected} show={index === this.state.squareIndex} logoClassName={this.state.logoClassName} itemClicked={this.itemClicked} />
                    </Grid>
                  
                )}
                </Grid>
                 
            </div><br/>
           <p>{this.state.counter}</p>
           { this.state.gameStarted 
           ? <button className="resetResultButton" onClick={this.restartCounter}>RESET THE RESULT</button>
           : <button className="startGameButton" onClick={this.onClickStart}>START</button>
          }
           </div>
         }
       </div>
       </Fragment>
    )
  }
}