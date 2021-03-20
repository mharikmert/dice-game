const Button = ({text, onClick, buttonClicked}) => {
    return <button className = 'btn' onClick = {onClick}> 
      {buttonClicked && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
    {text} </button> 
}

export default Button
