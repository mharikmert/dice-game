const Dice = (props) =>  <Image dice = {props.dice}></Image>

const Image = ({dice}) => {
    const source = '/images/dice-' + dice + '.png';
    return <img src = {source} style = {imgStyle} alt = {'dice' + dice}></img>
}

const imgStyle = {
    height: '150px',
    width: '150px',
    marginRight:'15px',
    borderRadius: '20px'
}

export default Dice
