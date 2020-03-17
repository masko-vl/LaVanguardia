import React, { Component,} from 'react';
import GameCapitals from './gameCapitals'

import axios from 'axios';

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
const filterData=(data)=>{
  let dataFiltered=data.filter((country)=>{
    
    return country.capital !== "";
  })
  console.log(dataFiltered)
  return dataFiltered
}

class AppCapitals extends Component {
  state={
    data:[]
  }
  async componentDidMount(){
    const {data} = await axios(`https://restcountries.eu/rest/v2/all`)
    //change the order of the array of cuntries before saveing in the state
    filterData(data)
    Shuffle(data)
        this.setState({
          data
         })

  }

  fiterContinent=(e)=>{
  if(e.target.value ==='all'){
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(({data}) =>
      this.setState({
        data:filterData(Shuffle(data))
      })
    )

  }else{
    axios.get(`https://restcountries.eu/rest/v2/region/${e.target.value}`).then(({data})=>
    
      this.setState({
        data:filterData(Shuffle(data)) 
      })
    )
    
    
  //AQUI ES DONDE EN VEZ DE SOBREESCRIBIR DATA, CREA DENTRO DE PROPS OTRO SUB NIVEL. Y SI ABAJO EN EL RENDERLO QUE MANDO CAMBIO A  countries={this.state.data.data} funciona cuando seleccionas la region pero si no seleccionas nada, la llamada del componentDidMount no funciona porque esta en el nuvel superior el array */

}
}

  back=()=>{
    //function to click the buttons to go tu menu or the starting game page
    window.location.reload()
  }
  



  render(){
  return (
 
      <GameCapitals  countries={this.state.data} fiterContinent={this.fiterContinent} back={this.back}/>

  );
}}

export default AppCapitals;
