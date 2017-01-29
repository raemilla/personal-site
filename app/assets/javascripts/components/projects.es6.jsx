class Projects extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>

        <div className="row">
   <div className="col s12 m9 l10">
     <div id="introduction" className="section scrollspy">
       <h4>PROJECTS</h4>
       <p>A developer can only spend so much time reading about CS theory, studying best practices, and watching a seemingly endless selection of youtube tutorials on any and every programming language. What I love about coding is how hands-on the learning has to be!</p>
       <p>Peruse this section for passion projects I have completed. They are listed in order of most recently worked on. Though I always have new ideas for features I'd like to add, so in reality they are, and perhaps always will be, works in progress.</p>
     </div>

     <div id="mad-phone" className="section scrollspy">
       <h5>Mad Phone</h5>
       <ul>
         <li>Completed Oct 2016</li>
         <li>Github</li>
         <li>Heroku</li>
       </ul>
       <div className="carousel">
         <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></img></a>
         <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></img></a>
         <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></img></a>
         <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></img></a>
         <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></img></a>
       </div>
       <p>For the final two days of Dev Bootcamp's career week, they presented our cohort with a Hackathon. They broke us into groups of 4-5 programmers and asked us simply to make something, <em>anything</em> to be presented at the end of the following day. </p>
       <p>Though our prompt was very vague, we knew we had only a little time before we were due to present, so whatever we decided to tackle couldn't be a fleshed out solution to *insert funny and complicated programming issue here!* Two weeks before, we had pitched final project ideas to our cohort, four of which were selected to be implemented through a complicated voting process. In addition to a couple of other pitches, I'd pitched a silly idea for a web app that would be a combination between the games Telephone and MadLibs. I wasn't surprised that it hadn't been picked as a final project - the features were admittedly simple, but I had pitched it because I thought at the very least, it would be fun to make. Now that we were presented with a very open-ended Hackathon, and only two days to complete it, I suggested the idea to my group, and it was decided: Mad Phone would be coming to life.</p>
       <p>As I mentioned, the idea was simple. I wanted to take the unpredictability of Telephone, and combine it with the quirkiness of MadLibs. Mad Phone was to be a collaborative story-writing experience. Users could create stories, or add to stories that had been created already. The catch was that users could only see the one most recent sentence - the rest of the story was a mystery. Additionally each user could only add one additional sentence at a time, reinforcing collaboration. This meant a story that began about chickens could turn into a nail-biting murder mystery, or a heart-warming romance. Once the user who created the story initially decided to no longer accept sentences, they could mark it as complete and thus reveal the story for everyone to enjoy. </p>
       <p>We decided to use Ruby on Rails to code the backend of Mad Phone. We used a combination of vanilla JavaScript, jQuery, and React for the frontend, with Bootstrap for styling. We decided to have the login process be a sign up through Facebook, as the members of our group had not worked with the Facebook API during Dev Bootcamp. We also wanted to implement social media sharing for completed stories as we felt it added an additional level of fun and collaboration.</p>
       <p>We certainly faced some challenges during the project. Initially we decided not to use React for the entire frontend, as we thought it was unnecessary to implement during the short time that we had. However, it soon became disorganized to have only some of our project in React. We tried to componentize as much of the project as we could without taking time away from all the features we wanted to add.</p>
       <p>What started as a simple project quickly gave way to big ideas. Initially, the only features we implemented was creating a story, adding to a story, and completing a story. But once we integrated Facebook with Mad Phone, so did our features. We wanted to add comments to the stories, as well as social media sharing, and profile pages. We also decided it would be important to be able to browse through all the active stories - at first, users found and added to stories based on an algorithm that presented a story as long as the user was not the creator nor the last one to add a sentence to that particular story. Additionally, we wanted to add notifications so a user could see both when a story they had added to was completed, and when a story they had created was added to. </p>
       <p>We did not manage to implement every feature we wanted to by the end of the Hackathon, but our group did continue to work on Mad Phone for a few weeks following so that we could see each feature through. Even now, I keep a list of new features I want to add, and I intend to go back and add them. Mad Phone was such a rewarding experience for me - both because it was my brainchild, and also because it was amazing to watch it grow and see it come to life.</p>

     </div>

     <div id="my-piggy-bank" className="section scrollspy">
       <h5>My Piggy Bank</h5>
       <ul>
         <li>Completed Sep 2016</li>
         <li>Github</li>
         <li>Heroku</li>
       </ul>
       <div className="carousel">
         <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></img></a>
         <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></img></a>
         <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></img></a>
         <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></img></a>
         <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></img></a>
       </div>
     </div>
       <p>Content </p>
   </div>
   <div className="col hide-on-small-only m3 l2" id="project-toc">
     <ul className="section table-of-contents">
       <li><a href="#introduction">Introduction</a></li>
       <li><a href="#mad-phone">Mad Phone</a></li>
       <li><a href="#my-piggy-bank">My Piggy Bank</a></li>
     </ul>
   </div>
 </div>
        <About />
        <Contact />
      </div>
    )
  }
}
