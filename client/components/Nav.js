import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../src/logo.png';
import './nav.scss';

class Nav extends Component {
	render() {
		return (
      <div className="navBar">
        <div className="navLeft">
          <Link to="/timeline"><img src={logo} /></Link>
          <input className="searchBar" id="placeholderImg" placeholder="Search" />
        </div>
        <div className="navRight">
          <Link to="/connections">My Network</Link>
          <Link to="/trello">Trello</Link>
          <div>Me</div>
        </div>
      </div>
		)
	}
}

export default Nav;