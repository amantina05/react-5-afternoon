import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFirst, updateLast, updateEmail } from '../../ducks/reducer';

class WizardTen extends Component {
  render() {
    const { updateFirst, updateLast, updateEmail } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your name?</p> <br />
          <input
            type="text"
            placeholder="First Name"
            onChange={event => updateFirst(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={event => updateLast(event.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            onChange={event => updateEmail(event.target.value)}
          />
          <Link to="/wEleven">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const { firstName, lastName, email } = state;
  return {
    firstName,
    lastName,
    email,
  };
}
export default connect(mapStateToProps, {
  updateFirst,
  updateLast,
  updateEmail,
})(WizardTen);
