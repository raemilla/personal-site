class PostList extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <ul>
        {
          this.props.post_array.map((post, idx) => {
            return(<Post key={idx} data={post}/>)
          })
        }
      </ul>
    )
  }
}
