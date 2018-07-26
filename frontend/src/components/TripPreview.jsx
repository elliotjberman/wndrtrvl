require('../styles/trip-preview.scss');

import { Link } from 'react-router-dom';
import React from 'react';

class TripPreview extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render = () => {
    if (this.props.new) {
      return (
        <Link to={'new_trip/'} className='trip-preview grid-3'>
          <h3>Create New</h3>
        </Link>
      )
    }
    return (
      <Link to={'trip/' + this.props.url} className='trip-preview grid-3'>
        <h3>{this.props.title}</h3>
        <h4>{this.props.city}</h4>
        <h4>{this.props.start} - {this.props.end}</h4>
      </Link>
    )
  }
}

export default TripPreview;
