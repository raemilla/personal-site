class Navbar extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Rachael Miller</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
