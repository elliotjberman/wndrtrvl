require('../styles/site.scss');

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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

  emailChange = (event) => {
    this.setState({
        email: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
        password: event.target.value
    })
  }

  logIn = () => {
    let creds = {
      username: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:8000/token-auth/', creds)
    .then( (res) => {
      localStorage.setItem('token', res.data.token);
      this.setState({
        loggedIn: true,
        first_name: res.data.user.first_name
      });
    });
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.setState({ loggedIn: false, email: '', password: '', first_name: '' });
  }

  render = () => {

    const loggedInSpan = this.state.loggedIn ? <span>Oh hi {this.state.first_name}</span> : '';

    return (
      <div id='landing' className='content'>
        <div id='header' className='row'>
          <h1>Travelle Boi {loggedInSpan}</h1>
          <h4><span>You</span> <span>use</span> <span>it</span> <span>to</span> <span>book</span> <span>trippes</span></h4>
        </div>

        <div id='landing-squares' className='row'>
          <div className='grid-3 landing-square'>
            {
              this.state.loggedIn ?
              <div>
                <h3>Log Out</h3>
                <input type='submit' value='Log Out' onClick={this.logOut} />
              </div>
              :
              <div>
                <h3>Log In</h3>
                <input type='text' placeholder='Email' value={this.state.email} onChange={this.emailChange} />
                <input type='password' placeholder='Password' value={this.state.password} onChange={this.passwordChange} />
                <input type='submit' value='Log In' onClick={this.logIn} disabled={!this.state.password || !this.state.email} />
              </div>
            }
          </div>
          <div className='grid-3 landing-square'>
            {
              this.state.loggedIn ?
              <div>
                <h3><Link to="/dashboard">My Trippes</Link></h3>
              </div>
              : ''
            }
          </div>
          <div className='grid-3 landing-square'></div>
          <div className='grid-3 landing-square'></div>
        </div>

      </div>
    );
  }
}

export default Home;
