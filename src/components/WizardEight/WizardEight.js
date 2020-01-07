import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHistory } from '../../ducks/reducer';
// import { mapStateToProps } from '../WizardSix/WizardSix';

class WizardEight extends Component {
  render() {
    const { updateHistory } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>
            Have you had a bankruptcy or foreclosure in the past seven years?{' '}
          </p>
          <br />
          <div className="row">
            <Link to="/wNine">
              <button
                value="Has never been in bankruptcy"
                onClick={event => updateHistory(event.target.value)}
              >
                No
              </button>
            </Link>
            <Link to="/wNine">
              <button
                value="Has had bankruptcy before"
                onClick={event => updateHistory(event.target.value)}
              >
                Bankruptcy
              </button>
            </Link>
            <Link to="/wNine">
              <button
                value="Has had a foreclosure before"
                onClick={event => updateHistory(event.target.value)}
              >
                Foreclosure
              </button>
            </Link>
            <Link to="/wNine">
              <button
                value="Has had both a foreclosure and a bankruptcy"
                onClick={event => updateHistory(event.target.value)}
              >
                Both
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  const { history } = state;
  return {
    history,
  };
}

export default connect(mapStateToProps, { updateHistory })(WizardEight);
