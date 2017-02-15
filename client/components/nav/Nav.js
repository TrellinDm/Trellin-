import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../../src/logo.png';
import network from '../../src/network.svg';
import trellcard from '../../src/trellcard.svg';
import Settings from './Settings';
import './nav.scss';

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menu: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({ menu: !this.state.menu });
	}

	render() {
		return (
			<div>
      <div className="navBar">
        <div className="navLeft">
          <Link to="/timeline"><img src={logo} /></Link>
          <input className="searchBar" id="placeholderImg" placeholder="Search" />
        </div>
        <div className="navRight">
          <Link to="/connections"><img src={network} />My Network</Link>
          <Link id="trell-card" to="/trello"><img src={trellcard} />Trello</Link>
          <div className="me-hover" onClick={this.toggleMenu}>
            <div className="profile-icon"></div>
            <a>Me</a>
          </div>
        </div>
      </div>
			<div>
				{this.state.menu ? <Settings /> : null}
			</div>
		</div>
		)
	}
}

export default Nav;