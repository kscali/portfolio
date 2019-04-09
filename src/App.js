import React from 'react';
import Projects from './Project';
import SocialProfiles from './SocialProfiles';
import profile from './assets/github_icon.png';
import Title from './Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayBio: false };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
 
    
  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }
  
  render() {
     return (
      <div>
          <img src={ profile } alt="profile-pic" className="profile" />
        <h1>Hello. Welcome To My Page</h1>
        <p>My name is Koy.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects</p>
         {this.state.displayBio ? (<div>
           <p>I live in the Bay Area of California. I love to learn and I code everyday.</p>
           <p>Although my favorite language is Javascript, I like to expand my knowledge and build
             projects with other languages and frameworks.</p>
           <p>Besides coding, I love to read and listen to music.</p>
           <button onClick={ this.toggleDisplayBio }>Show Less</button>
         </div>) : (
           <div>
             <button onClick={ this.toggleDisplayBio }>Read More</button>
           </div>
         )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App; 