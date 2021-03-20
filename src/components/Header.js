const Header = (props) => {
    return (
        <header>
            <h2 style = {headerStyle}> WELCOME TO THE DICE GAME <br></br> </h2>
        </header>
    )
}
Header.defaultProps = {
    title: 'default title from props',
    something : 'this is also a prop'
}

const headerStyle = {
    margin: ' 30px auto',
    fontFamily: 'sans serif',
    fontWeight: 'bold',
}
export default Header;

