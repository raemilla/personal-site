class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="container">
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}
