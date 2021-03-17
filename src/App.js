import {useState} from 'react'
import React from 'react'
import Header from './components/Header';
import Button from './components/Button';
import Result from './components/Result'; 
import Dice from './components/Dice';
import PlayerPlace from './components/PlayerPlace';
import Score from './components/Score';

const App = () => {
  // should be returned a single element
  const [count, setCount] = useState(0);
  const [score,number, setScore,setNumber] = useState();
    return  (
      <div className = 'container'>
          <Header/> 
        <div className = 'btnContainer'>
          <Button text = '&minus;' onClick = {() => setCount(count-1)}/>
          <Result result = {count}/> 
          <Button text = '&#43;' onClick = {() => setCount(count+1)}/> 
        </div>
          {/* <Dice/> */}
          <div className = "player1-container" > 
            <PlayerPlace number = {1} color = "green" score = {count} />
          </div>
          <div className = "player2-container"> 
            <PlayerPlace number = {2} color = "green" score = {count} />
          </div>
      </div>
      // <h2> that does not work </h2>
    )
}

// class App extends React.Component{
//   render(){
//     return (
//     <div className = 'container'>
//         <h1> welcome to the pig game </h1>
//         <Header/>

//     </div>
//     )
// }
// }
export default App;
