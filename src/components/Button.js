const Button = ({text, onClick, buttonClicked}) => {
    return <button className = 'btn' onClick = {onClick}> 
            {buttonClicked && <span className = "spinner-border spinner-border-sm"></span>}
            {text} 
           </button> 
}
export default Button
