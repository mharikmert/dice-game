import React from 'react'
import Header from './components/Header';
import Player from './components/Player';
import Button from './components/Button'
import Dice from './components/Dice';

class App extends React.Component{
  state = {
    dice1: 1,
    dice2: 1, 
    buttonClicked: false,
    activePlayer: 1,
    score: 0,
  }

  render(){
    const {dice1, dice2, score, activePlayer, buttonClicked} = this.state;
    const onClickHandler = activePlayer => {
      if(!this.state.buttonClicked){
        this.setState({buttonClicked: true})
        setTimeout( () => { 
          this.setState({
            buttonClicked: false,
            dice1: generateRandomValue(),
            dice2: generateRandomValue(),
            activePlayer: activePlayer === 1 ? 2 : 1,
          });
          this.setState({score: this.state.score + this.state.dice1 + this.state.dice2})
        },1000)
      }
    }
    return  (
      <div className = 'container'>
            <Header/> 
          
            <Dice dice = {dice1}></Dice>
            <Dice dice = {dice2}></Dice>

            <div style = {{marginTop: '20px'}}>
                <Button text = {'Throw Dices'} buttonClicked = {buttonClicked} onClick = {() => onClickHandler(activePlayer)}></Button>
            </div>
            <div className = "player1-container" style = {{float: 'left'}}> 
                <Player number = {1} score = {score} isActive = {activePlayer === 1}/>
            </div>
            <div className = "player2-container" style = {{float: 'right'}}> 
                <Player number = {2} score = {score} isActive = {activePlayer === 2}/>
            </div>
      </div>
    )

  }
}
const generateRandomValue = () => parseInt(((Math.random() * 6) + 1));

export default App;
