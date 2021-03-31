const Button = ({text, onClick, buttonClicked, disabled}) => {
    return <div> 
                <button disabled = {disabled} className = {disabled ? 'btn btn-disabled': 'btn'} onClick = {onClick}> 
                    {buttonClicked  && !disabled && onClick && text === 'Roll Dice' && <span className = "spinner-border spinner-border-sm"></span>}
                    {text} 
                </button>
            </div>
}
export default Button
