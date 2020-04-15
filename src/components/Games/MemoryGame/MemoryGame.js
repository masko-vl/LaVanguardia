import React from 'react';
import './MemoryGame.css';
import Table from './components/Table';
import Header from './components/Header';
import construirBaraja from './utils/construirBaraja';

const initialState = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparado: false
  };
}

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState()

  } 
  
  render() {
    return(
      <div>
        <Header/>
        <Table baraja={this.state.baraja} />
      </div>
    )
  }
}

export default MemoryGame;
