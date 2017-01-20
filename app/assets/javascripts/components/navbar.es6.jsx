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
            <li><a href="#modal2">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#modal1">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
