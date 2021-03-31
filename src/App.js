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
    playerOne: 0,
    playerTwo: 0
  }
  init = () => {
    this.setState({
      dice1: 1,
      dice2: 1, 
      buttonClicked: false,
      activePlayer: 1,
      playerOne: 0,
      playerTwo: 0
    })
  }

  render(){
    const {dice1, dice2, playerOne, playerTwo, activePlayer, buttonClicked} = this.state;
    const rollHandler = activePlayer => {
      if(!this.state.buttonClicked){
        this.setState({buttonClicked: true})
        setTimeout( () => { 
          this.setState({
            buttonClicked: false,
            dice1: generateRandomValue(),
            dice2: generateRandomValue()
          })
          const additionalScore = this.state.dice1 + this.state.dice2; 
          activePlayer === 1 ? this.setState({playerOne: this.state.playerOne + additionalScore}): this.setState({playerTwo: this.state.playerTwo + additionalScore});
        },1000)
      }
      if(finishState(activePlayer)){
        this.init();
          activePlayer === 1 ? alert('Player 1 won!') : alert('Player 2 won');
      }
      return true;
    }

    const holdHandler = activePlayer => {
      if(activePlayer === 1) this.setState({activePlayer: 2})
      else this.setState({activePlayer: 1});
      return true;
    }

    const finishState = activePlayer => activePlayer === 1 ? playerOne >= 100 : playerTwo >= 100
    
    return  (
      <div className = 'container'>
            <Header/> 
          
            <Dice dice = {dice1}></Dice>
            <Dice dice = {dice2}></Dice>

            <div style = {{marginTop: '20px'}}>
                <Button text = {'New Game'} onClick = {() => this.init()}></Button>
            </div>
            <div className = "player1-container" style = {{float: 'left'}}> 
                <Player number = {1} score = {playerOne} buttonClicked= {buttonClicked} isActive = {activePlayer === 1} roll = {() => rollHandler(1)} hold = {() => holdHandler(1)}/>
            </div>
            <div className = "player2-container" style = {{float: 'right'}}> 
                <Player number = {2} score = {playerTwo} buttonClicked = {buttonClicked} isActive = {activePlayer === 2} roll = {() => rollHandler(2)} hold = {() => holdHandler(2)}/>
            </div>
      </div>
    )

  }
}
const generateRandomValue = () => parseInt(((Math.random() * 6) + 1));

export default App;
