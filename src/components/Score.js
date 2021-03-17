const Score = ({score}) => {
    return (
        <div className = "scoreContainer" style = {scoreContainer}>
           {score} 
        </div>
    )
}

const scoreContainer = {
    textAlign: 'center',
    fontSize: '30px'
}

export default Score
