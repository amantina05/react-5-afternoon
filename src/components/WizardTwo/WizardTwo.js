import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCity } from '../../ducks/reducer';

class WizardTwo extends Component {
  render() {
    const { updateCity } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>In what city will the property be located?</p>
          <br />

          <input
            placeholder="city name"
            type="text"
            onChange={event => updateCity(event.target.value)}
          />

          <Link to="/wThree">
            <button className="wTwo-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export function mapStateProps(state) {
  const { city } = state;
  return {
    city,
  };
}

export default connect(mapStateProps, { updateCity })(WizardTwo);
