const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    )
}
// implicit return (simplified further without writing the parenthesis)
// const Header = () => (
  // <header></header>
// )

export default Header;