class Navbar extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Rachael Miller</a>
          {/* for mobile and smaller need to add nav options */}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#modal1">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
