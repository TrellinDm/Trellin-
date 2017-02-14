import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div>
        <div>home</div>
        <Link to="/timeline"><div>timeline</div></Link>
        <Link to="/profile"><div>Profile</div></Link>
      </div>
    )
  }
}

export default Nav;
