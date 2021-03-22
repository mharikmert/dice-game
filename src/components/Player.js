import Score from './Score';
import Button from './Button';
const Player = props => {
    return (
        <div className = {props.isActive ? 'player-container': 'player-container toggle-player'} >
          <p> PLAYER {props.number}</p>
          <Score score = {props.score}/>
          <Button disabled = {!props.isActive} text = 'Throw Dice'> </Button>
          <Button disabled = {!props.isActive} text = 'Hold Score'></Button>
        </div>
    )
}
export default Player