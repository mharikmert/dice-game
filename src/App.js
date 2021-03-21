import React from 'react'
import Header from './components/Header';
import PlayerPlace from './components/PlayerPlace';
import Button from './components/Button'
import Dice from './components/Dice';

class App extends React.Component{
  state = {
    dice1: 1, dice2: 1, buttonClicked: false
  }
  render(){
    const onClickHandler = () => {
      if(!this.state.buttonClicked){
        this.setState({buttonClicked: true})
        setTimeout( () => {
          this.setState({
            buttonClicked: false,
            dice1: generateRandomValue(),
            dice2: generateRandomValue()})
        },1000)
      }
    }
    return  (
      <div className = 'container'>
            <Header/> 
          
            <Dice dice = {this.state.dice1}></Dice>
            <Dice dice = {this.state.dice2}></Dice>

            <div style = {buttonContainer}>
                <Button text = {'Throw Dices'} buttonClicked = {this.state.buttonClicked} onClick = {() => onClickHandler()}></Button>
            </div>
            <div className = "player1-container" style = {{float: 'left'}}> 
                <PlayerPlace number = {1} color = "green" score = {this.state.dice1} />
            </div>
            <div className = "player2-container" style = {{float: 'right'}}> 
                <PlayerPlace number = {2} color = "green" score = {this.state.dice2} />
            </div>
      </div>
    )

  }
}
const generateRandomValue = () => parseInt(((Math.random() * 6) + 1));


const buttonContainer = {
    marginTop : '20px'
}
export default App;
