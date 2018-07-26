require('../styles/site.scss');

import React from 'react';
import axios from 'axios';

import TripPreview from './TripPreview.jsx';

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      loggedIn: localStorage.getItem('token') ? true : false,
    }
  }

  componentDidMount = () => {
    if (this.state.loggedIn) {
      let config = {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      axios.get('http://localhost:8000/core/current_user/', config).then(
        (res) => {
          this.setState({
            first_name: res.data.first_name
          })
        }
      )
    }
  }

  render = () => {

    if (!this.state.loggedIn) return (<div><h1>You're not logged in</h1></div>);

    return (
      <div id='dashboard' className='content'>
        <div id='header' className='row'>
          <h1>Trip Dashboard</h1>
          <h4>Oh hi {this.state.first_name}</h4>
        </div>

        <div className='row'>
          <TripPreview title='My Great Trip' city='Tokyo' start='Sep 28' end='Oct 8' url='test' />
          <TripPreview title='My Lesser Trip' city='Boston' start='Nov 10' end='Nov 13' url='test' />
          <TripPreview title='Kenji!' city='San Francisco' start='Dec 5' end='Dec 9' url='test' />
          <TripPreview title='Again' city='Tokyo' start='Sep 28' end='Oct 8' url='test' />
        </div>

      </div>
    );
  }
}

export default Dashboard;
