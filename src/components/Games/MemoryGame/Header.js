import React, { useLayoutEffect, useState } from 'react';
import './Header.css';



const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}




class Header extends React.Component {
    render() {
        return(
            <header className="memory-header">
                <div>
                <h1>helloooooooooo : {this.useWindowSize}</h1>
                {this.props.gameFinished 
                    ? 
                        <div>
                        {/* {` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} */}
                        <button className="winnerMemoryResult">{` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos`}</button>
                        <button className="winner-reinit-button" onClick={this.props.resetGame}>
                            INTÉNTALO OTRA VEZ !
                        </button>
                        </div>
                        
                    : <div>
                        <p className="memoryResult">Intentos: {this.props.tryes}</p>
                        <p className="reinit-button" onClick={this.props.resetGame}>
                            Reiniciar
                        </p>
                    </div>
                }
                </div>
            </header>
        )
    }
}

function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
  }
  

export default Header