import Stats from './Stats';

const Header = (props) => {
    return (
        <header>
            <Stats players={props.players}/>
            <h1>{ props.title }</h1>
        </header>
    )
}
// implicit return (simplified further without writing the parenthesis)
// const Header = () => (
  // <header></header>
// )

export default Header;