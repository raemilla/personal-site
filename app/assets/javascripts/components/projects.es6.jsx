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
       <p>For the last week of Dev Bootcamp, each cohort is tasked with creating a final project, from the initial idea all the way through its implementation. Final projects are picked diplomatically: each student pitches at least one, but sometimes up to four, ideas to the entirety of Dev Bootcamp. Students then rank their favorite pitches in order of which they want to work on, and teams are selected from there. Students whose pitches were chosen were to be project leaders.</p>
       <p>Ephraim, the project leader of My Piggy Bank, had mentioned the idea to me early on during Dev Bootcamp, probably a month before final pitches were made. Even then, I knew that My Piggy Bank would be a final project, and one I wanted to work on. Ephraim had a background as a teacher, and was inspired by a Humans of New York facebook post (link to post) of a family who had taught their child the value of giving and the importance of financial responsibility by having four piggy banks - Invest, Spend, Donate, Save - to allot their allowance. Ephraim wanted to turn this into a web app that made the process accessible to anyone.</p>
       <p>My Piggy Bank had two main compontents: a Parent component, and a Child component. We wanted to make sure the parents were in total control, and had complete transparency as to the actions of their child. Thus, parents would sign up via My Piggy Bank, and they would create their children accounts through their own account. Parents could transfer their children allowances, as well as complete other actions such as redeeming rewards and making donations, requested by their children. We wanted parents to complete these actions to encourage communication between the parent and child. The child component consisted of the four banks mentioned above. Children could create change from their allowance and drag and drop coins into any of the banks they chose. We wanted to create this game-like functionality to keep children interested and wanting to return to the site.</p>
       <p>Though I worked on all aspects of My Piggy Bank, I did most of my work within the Parent component. I worked primarily with React, which was an incredible learning experience as we had only worked with it for about one week before we started final projects. Once it was over, I felt like a React master, and knew I wanted to keep working with front-end techonologies. </p>
       <p>Admittedly, I found it hard taking a backseat in some regard: before final projects began, I had taken leadership roles in other team projects I had worked on, and I loved it. I think implementing someone else's vision taught me a lot about working on a team and Ephraim was an amazing and diplomatic leader. It also taught me a lot about being a leader myself.</p>
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
