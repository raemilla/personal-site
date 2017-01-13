class Post extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <li>
        <a href={"/posts/" + this.props.data.id}><h2>{this.props.data.title}</h2></a>
        <p dangerouslySetInnerHTML={{ __html: this.props.data.text}}></p>
        <p>posted by Rachael Miller at {this.props.data.created_at}</p>
      </li>
    )
  }
}
