import Score from './Score';
const PlayerPlace = ({number, score}) => {
    return (
        <div className = 'player-container' style = {playerContainer}>
          <p> PLAYER {number}</p>
          <Score score = {score}/> 
        </div>
    )
}

const playerContainer = {
    color: 'white',
    textAlign: 'center',
    fontSize: '30px',
    width: '200px', height: '500px',
    backgroundImage: 'linear-gradient(to top left, blue 0%, black 100%)',
    borderRadius: '10px'
}

export default PlayerPlace