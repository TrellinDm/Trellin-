import React, {Component} from 'react';
import {Link} from 'react-router';
import Logout from '../../src/logout.svg';

class Settings extends Component {
  render() {
    return (
      <div className="account-settings">
        <img src={Logout} />
        <Link to="/login">Sign Out</Link>
      </div>
    )
  }
}

export default Settings;
