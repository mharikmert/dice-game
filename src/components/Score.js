const Score = ({score}) => {
    return (
        <div className = "scoreContainer" style = {scoreContainer}>
           {score} 
        </div>
    )
}

const scoreContainer = {
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '120px'
}

export default Score
