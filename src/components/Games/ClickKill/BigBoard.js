import React, { Fragment } from 'react';
import SmallSquare from './SmallSquare';
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

// COMMENT : TEST FOR THE GRID



  //  const GameTable = () => {
  //    const classes = useStyles();
  //    const zIndex = 0;

  //    return (
  //       <div>
  //          <div className="img-container">
  //              <div className={classes.root}>
  //              {20 *
  //                  <Grid container spacing={3}>
  //                     {zIndex += 1 }                       
  //                      <Grid item xs={3} >
  //                        <SmallSquare logo={this.state.logoSelected} show={zIndex === this.state.squareIndex} itemClicked={this.itemClicked} />
  //                       </Grid>
  //                  </Grid>
  //                    }
  //              </div>
  //          </div>   
  //      </div>
  //     )
  //  }

// HERE STARTS THE CODE

const BigContainer = styled.div`
    position: relative;
   
`;

export default class BigBoard extends React.Component {
  
  state = {
    squareIndex: 10,            //  *COMMENT : need to set it to null by default. the "10" value is here for testing. making possible to get the index of the image clicked
    clickedIndex: false,
    teamChosen: false,
    counter: 0,
    smallSquaresArray: ["","","","","","","","","",],                     // COMMENT : array with all fixed position deleted
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
    // const table = GameTable()    
    return ( 
       <Fragment>
       <div className='pantalla'>
         {this.state.teamChosen === false 
         ? <SelectTeam printName={this.printName} imageList={this.state.imageList}/>
         : <div>
            {/*COMMENT : need to use the Zindex :  <SmallSquare logo={this.state.logoSelected} show={Zindex === this.state.squareIndex} itemClicked={this.itemClicked} /> */}
            {/* COMMENT : WRAPPING <SmallSquare> into a ui-grid. so we can pass to every GameContainer a Zindex and construct the grid directly from here */}
            <div>
            <div className="img-container" felGrow={1} style={{height: 150}}>
            <Grid container spacing={3} >                            

                {this.state.smallSquaresArray.map((x, index) =>            
                    <Grid item xs={3} style={{height: 90}} > 
                      <SmallSquare  zIndex={index} notImportant={x} logo={this.state.logoSelected} show={index === this.state.squareIndex} itemClicked={this.itemClicked} />
                      {console.log(index)}
                      {console.log(this.state.squareIndex)}

                    </Grid>
                  
                )}
                </Grid>
              </div>   
            </div>
           <p>{this.state.counter}</p>
           <button onClick={this.onClickStart}>START</button>
           <button onClick={this.restartCounter}>RESET THE RESULT</button>
           </div>
         }
       </div>
       </Fragment>
    )
  }
}