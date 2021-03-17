import {useState} from 'react';
const Dice = () => {
    // const [diceNumber, setDiceNumber] = useState(1) 
    // console.log('after dice number-> ', diceNumber);
    return (
        <div className = 'diceContainer'>
        {/* // onRoll = {() => setDiceNumber(this.diceNumber + 1)}> */}
            {/* <img style = {imgStyle} src = {require('../images/dice1.png')}/>  -> does not work ?*/}
                {/* <img style = {imgStyle} src = {dice1} alt = 'dice1'></img>; 
                <img style = {imgStyle} src = {dice1} alt = 'dice2'></img>;  */}
        </div>
    )
}
const imgStyle = {
    height: '150px',
    width: '150px'
}
export default Dice
