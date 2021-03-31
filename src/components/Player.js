import Score from './Score';
import Button from './Button';
const Player = props => {
    return (
        <div className = {props.isActive ? 'player-container': 'player-container toggle-player'} >
          <p> PLAYER {props.number}</p>
          <Score score = {props.score}/>
          <Button disabled = {!props.isActive} text = 'Roll Dice' onClick = {props.roll} buttonClicked = {props.buttonClicked}></Button>
          <Button disabled = {!props.isActive} text = 'Hold Score' onClick = {props.hold} buttonClicked = {props.buttonClicked}></Button>
        </div>
    )
}

export default Player