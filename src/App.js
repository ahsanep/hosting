import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      shortDis : true
      // longdis: "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million. It has the world's second-largest Muslim population. It is the 33rd-largest country by area, spanning 881,913 square kilometres."
    } 
  }
show=()=>{
   return this.state.shortDis
}  
toggle=()=>{
     this.setState(

     )
}


  render(){
return(
  let a = [12345]
  let b = a.map()
  <div>
<button >+</button>
</div>
)
  }

}
// function App (){
//   return(
//     <Counter/>
//   )
// }

export default App;
