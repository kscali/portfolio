import React from 'react';

const TITLES = [
  'a software engineer',
  'a life-long learner',
  'a project enthusiast',
  'a gamer by heart',
  'I love to laugh'
];

class Title extends React.Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

    this.animateTitles(); 
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length; 
      
      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 3000);  

  
  }
  render() {
    const { titleIndex, fadeIn } = this.state; 

    const title = TITLES[titleIndex];
    
    return (
      <p className={ fadeIn ? "title-fade-in" : "title-fade-out" }>I am { title }.</p>
    )
  }
}

export default Title; 