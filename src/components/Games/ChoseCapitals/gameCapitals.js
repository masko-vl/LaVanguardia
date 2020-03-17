import React, { Component, Fragment } from 'react';
import media1 from './img/social media-01.png'
import media2 from './img/social media-02.png'
import media3 from './img/social media-03.png'
import './gameCapitals.css';
import {Link} from 'react-router-dom'
//to put in a random order the array
const Shuffle=(a)=>{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }


class GameCapitals extends Component{
state={
    countries:[], //save the data api that is going to change by the way the play develop
    gameStatus:'startGame', //there is 3 states of the game to show the diferent elements in this game(start/playing/end)
    fourCapitals:[],//where we save all the answers shuffled
    incorrecto:'',//message for the wrong answer
    seconds:30, //time remaining for the counter
    points:0 
}

getCountry=()=>{
    let arrayCountries=[]
    console.log(this.props.countries)
    this.props.countries.map((country)=>{
        //save api in array
        return arrayCountries.push(country)
    })
    //save always the first 4 capitals because we ara changing the arrayCountries by splicing the first 4 countries to avoid repeating them
    let fourCapitals= [arrayCountries[0].capital, arrayCountries[1].capital, arrayCountries[2].capital, arrayCountries[3].capital]
    //always saved in diferent orders
    Shuffle(fourCapitals)
    this.setState({
        countries:arrayCountries, 
        gameStatus:'playingGame', //change to the game part
        fourCapitals
    })
    

    const countdown=()=>{
        //prepare the counter
        if (this.state.seconds <= 0) {
            //when it's finished
            this.setState({
                gameStatus:'gameOver'
            })
            //finish counter
            clearTimeout(timerId);
        } else {
            //update the counter resting the seconds
            this.setState({
                seconds:this.state.seconds-1
            })
        }
    }
    //interval for the counter
    var timerId = setInterval(countdown, 1000);
    
}

chooseCapital=(e)=>{
   //recover the buton clicked for the capital by the id where we save the name of the capital
 if(this.state.countries[0].capital===e.target.id){
     let countriesArray=[...this.state.countries]
     
     //also we cut the first 4 to avoid repeating the names becouse we catch the first 4 and update the array
     //countriesArray.splice(0, 4)

     //cut to another array the selected countriy in the game to put it at the end of the array
     let countrySelected=countriesArray.slice(0, 1)
     
     //cut out from the original array
     countriesArray.splice(0, 1)
     //disorder the array to don have the next capitals that are in the quertion for the nextcountries
     Shuffle(countriesArray)
     //put at the end of the array
     countriesArray=[...countriesArray, ...countrySelected]

     let fourCapitals= [countriesArray[0].capital, countriesArray[1].capital, countriesArray[2].capital, countriesArray[3].capital]
     Shuffle(fourCapitals)
     console.log(fourCapitals)

     
     this.setState({
         //When the answer is right: update countries and capitals, sum seconds and points and hide incorrect message
         countries:countriesArray, 
         fourCapitals,
         incorrecto:'',
         seconds:this.state.seconds+4,
         points:this.state.points+10

     })
    
    
 }else{
     this.setState({
         //when it is incorrect:
        incorrecto:'INCORRECTO!',
        seconds:this.state.seconds-3
        }) 
 }
}
tryAgain=()=>{
    //in the last state of the game 'end' when we click again  we call the function for playingGame status and change the state for showing this part and reload the default state
    this.getCountry()
    this.setState({
        incorrecto:'',
        seconds:30,
        gameStatus: 'playingGame',
        points:0
    })

}


render(){
    /*OBJECT WITH THE 3 STATES OF THE GAME THAT WE ARE CHANGING DURING THE FUNCTIONS */
   const gameStatus={ 
        startGame: ()=>(<div className='startGame-page'>
        <div className='logo'>
            <p className='instrucciones'>Instrucciones: Seleciona la capital correcta! Si aciertas ganas 10 puntos y 4 segundos y si fallas te resta 3s</p>
            <select className={'region-select'} onChange={this.props.fiterContinent}>
                <option value='all'>All</option>
                <option value='Europe'>Europa</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>África</option>
                <option value='Americas'>América</option>
                <option value='Oceania'>Oceanía</option>
            </select>
            <button className='startGame-button' onClick={this.getCountry}></button>
            
            <button className='back-menu'><Link to="/">Exit Game</Link></button></div>
        </div> ),
        playingGame: ()=> (<div className='playingGame'>
        <div className='counterGame-button'>{this.state.seconds}</div>   
        <p className='incorrecto'>{this.state.incorrecto}</p>  
            <div className='country'>{this.state.countries.length>0&&this.state.countries[0].name}</div>
            <div className='flex-butons-capitals'>
            {this.state.fourCapitals.map((capital, index)=>{
                return <button className='choose-capital' onClick={this.chooseCapital} key={index} id={capital}>{capital}</button>
            })}</div>
            <div className='score'>SCORE: {this.state.points}</div>
            <button className='back-menu'><Link to="/">X</Link></button>
        </div>),
        gameOver: ()=> (<div className='playingGame'>
        <p className='gameover'>GAME OVER</p>
        <p className='score'>Score: {this.state.points}</p>
        <div className='shered-link'>
            <img src={media2} alt=''></img>
            <img src={media1} alt=''></img>
            <img src={media3} alt=''></img>
        </div>
        <button className='play-again' onClick={this.tryAgain}>Play Again</button>
        <button  className='back-menu'><Link to="/">Exit Game</Link></button>
        {/*MOSTRAR EL COMPONENT DE PUNTOS GANADOS */}
    </div>)


    } 
    return(
<Fragment >
    <div className='container-game'>
        {gameStatus[this.state.gameStatus]()}
    </div>
</Fragment>

)}

}
export default GameCapitals