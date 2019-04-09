import React from 'react';

class Jokes extends React.Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke').then(response =>
     response.json()).then(json => this.setState({ joke: json }))
  }
  
  render() {
    const { setup, punchline } = this.state.joke; 

    return (
      <div>
        <h3>Highlighted Joke</h3>
        <p>-{ setup } <em>{ punchline }</em></p>
      </div>
    )
  }
}

export default Jokes; 