const Header = (props) => {
    return (
        <header>
            <h1> WELCOME TO THE DICE GAME <br></br> </h1>
        </header>
    )
}
export default Header;

Header.defaultProps = {
    title: 'default title from props',
    something : 'this is also a prop'
}

// CSS in JS
// const headerStyle = {
//     color: 'red', backgroundColor: 'yellow'
// }
