class About extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div id="modal2" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>About Rachael</h4>
            {/* add photo here  */}
            <p>I am a graduate of Boston University, earning a BA in Environmental Analysis and Policy. Though I loved what I learned in the classroom, as I started working towards a career, I felt unfulfilled despite hard work and perserverance. I've always loved to get my hands dirty: I feel best when I can tangibly point to my accomplishments. </p>
            <p>In my fall semester of senior year, I took a quantitative modeling class, where I learned to code with R. Instantaneously, I fell in love with coding. No longer was I theorizing how to solve problems, I was actually <i>solving</i> them.</p>
            <p>That class inspired me to pursue a career in programming, and I decided to attend a bootcamp upon graduation. Though I did love R and all the amazing things I could do with data using it, I knew I wanted to look into other programming languages. I was fascinated by how creative programming could be, and I wanted to know what made websites tick. </p>
            <p>After significant research, I landed on Dev Bootcamp, because their mission spoke to me: "Make Beautiful and Meaningful Things." Their priorities - creativity, collaboration and accomplishment - aligned with mine perfectly. And so I began the 19-week immersive program. Certainly, at times it was stressful, but never once did I regret my decision.</p>
            <p>I finished Dev Bootcamp in October 2016 and am now pursuing a career in web development, with a particular interest towards front-end frameworks. I am excited to continue my love affair with coding and learn from hands-on experiences.</p>
            {/* add skillset graphic */}
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat "><i className="material-icons">done</i></a>
          </div>
      </div>
    )
  }
}
