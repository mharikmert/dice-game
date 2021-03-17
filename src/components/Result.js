const Result = ({result}) => {
    return (
        <div 
        className ='resultContainer'
        style = {resultStyle}
        >
                {result}
        </div>
    )
}

const resultStyle = {
    margin: '10px 10px',
    fontSize: '50px',
    height: '60px',
    color: 'yellow'
}
export default Result
