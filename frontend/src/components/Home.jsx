require('../styles/site.scss');

import React from 'react';

class Main extends React.Component {

  constructor() {
    super();
  }

  componentDidMount = () => {
    setInterval(() => {
      document.getElementById('landing').className = '';
    }, 100)
  }

  render = () => {
    return (
      <div id='landing' className='black'>
        <h1>Travelle Boi</h1>
        <h4><span>You</span> <span>use</span> <span>it</span> <span>to</span> <span>book</span> <span>trippes</span></h4>
      </div>
    );
  }
}

export default Main;
