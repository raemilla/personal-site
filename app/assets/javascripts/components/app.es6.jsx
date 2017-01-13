class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="container">
        <PostList post_array={this.props.posts} />
      </div>
    )
  }
}
