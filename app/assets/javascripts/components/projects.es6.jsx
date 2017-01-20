class Projects extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
      <div className="carousel carousel-slider center" data-indicators="true">
          <div className="carousel-item red white-text" href="#one!">
            <h2>7Chord</h2>
            <p className="white-text">This is your first panel</p>
            <a className="btn waves-effect white grey-text darken-text-2">github</a>
          </div>
          <div className="carousel-item amber white-text" href="#two!">
            <h2>Mad Phone</h2>
            <p className="white-text">This is your second panel</p>
            <a className="btn waves-effect white grey-text darken-text-2">live site</a><a className="btn waves-effect white grey-text darken-text-2">github</a>
          </div>
          <div className="carousel-item green white-text" href="#three!">
            <h2>My Piggy Bank</h2>
            <p className="white-text">This is your third panel</p>
            <a className="btn waves-effect white grey-text darken-text-2">live site</a><a className="btn waves-effect white grey-text darken-text-2">github</a>
          </div>
        </div>
        <About />
        <Contact />
      </div>
    )
  }
}
