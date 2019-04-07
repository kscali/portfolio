import React from 'react';

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
        <h1>Hello. Welcome To My Page</h1>
        <p>My name is Koy. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects</p>
         {this.state.displayBio ? (<div>
           <p>I live in the Bay Area of California. I love to learn and I code everyday.</p>
           <p>Although my favorite language is Javascript, I am open to building
             projects with other languages and frameworks.</p>
           <p>Besides coding, I love to read and listen to music.</p>
           <button onClick={ this.toggleDisplayBio }>Show Less</button>
         </div>) : (
           <div>
             <button onClick={ this.toggleDisplayBio }>Read More</button>
           </div>
         ) }
      </div>
    )
  }
}

export default App; 