import React, { Component, Fragment } from 'react';
import Snake from './snake';
import Food from './food';
import './snake.css'


const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  gameStarted: false,
  gameEnded: true,
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ]
}

class IndexSnake extends Component {

  state = initialState;


  onClickStart = () => {
    setInterval(this.moveSnake, this.state.speed);
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter
    this.checkIfGameOver()
    this.setState({
      gameStarted: true,
      gameEnded: false
    })
  }

  checkIfGameOver = () => {
    // WHEN WE CLICK ON THE FLAG, COUNTER IS INCREASED, THE FLAG DISAPPEARS FROM THAT SQUARE, A NEW RANDOM SQUARE IS CHOSEN
      this.checkIfOutOfBorders();
      this.checkIfCollapsed();
      this.checkIfEat();
        }

checkButtonsDirections = (e) => {
  if (e.target.value) {
    switch (e.target.value) {
            case 'UP':
              this.setState({direction: 'UP'});
              break;
            case 'DOWN':
              this.setState({direction: 'DOWN'});
              break;
            case 'LEFT':
              this.setState({direction: 'LEFT'});
              break;
            case 'RIGHT':
              this.setState({direction: 'RIGHT'});
              break;
    }
  }
}

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = () => {
    if (this.state.gameStarted) {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];

      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 1, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 1, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 4];
          break;
        case 'UP':
          head = [head[0], head[1] - 4];
          break;
    }
//    console.log('you just passed the moveSnake function')
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
    this.checkIfGameOver()
    document.onkeydown = this.onKeyDown
  }
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    this.setState(initialState)
  }

  render() {
    return (
      <div id="snakePageContainer">
        <h1 style={{color: 'lightgrey'}}>LET'S SNAKE</h1>
        <div className="snakeGameContainer">
        {this.state.gameStarted != true
        ?
        <div id="buttonContainer">
          <button id="startSnakeButton" onClick={this.onClickStart}>START</button>
        </div>
        : null
        }
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots}/>
          <Food dot={this.state.food}/>
        </div>

          <div className="SnakeDirectionsMobilePad">
            <button className="padButton" value='UP' onClick={this.checkButtonsDirections}>U</button>
            <div id="sidesArrowsRow">
              <button className="padButton" value='LEFT' onClick={this.checkButtonsDirections}>L</button>
              <button className="padButton" value='RIGHT' onClick={this.checkButtonsDirections}>R</button>
            </div>
            <button className="padButton" value='DOWN' onClick={this.checkButtonsDirections}>D</button>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexSnake;
