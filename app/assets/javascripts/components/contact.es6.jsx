class Contact extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div id="modal1" className="modal bottom-sheet">
        <div className="modal-content">
          <h4>Like what you see? Get in touch!</h4>
            <ul>
              {/* display in-line block with icons on top, usernames/emails/numbers below */}
              <li><a target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rachael.miller@gmail.com&tf=1"><i className="material-icons medium">email</i><span>rachael.miller05@gmail.com</span></a></li>
              <li><i className="material-icons medium">phone</i> 914-420-0644</li>
              <li><a target="_blank" href="https://www.linkedin.com/in/raemilla
      "><i className="fa fa-linkedin-square" aria-hidden="true"></i>raemilla</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/raemilla
      "><i className="fa fa-github" aria-hidden="true"></i>raemilla</a></li>
            </ul>
        </div>
        <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">done</i></a>
        </div>
      </div>
    )
  }
}
