import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../../src/logo.png';
import network from '../../src/network.svg';
import trellcard from '../../src/trellcard.svg';
import Settings from './Settings';
import Search from './Search';
import { connect } from 'react-redux';
import {toggleResults} from '../../reducers/searchReducer';
import './nav.scss';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleResults = this.toggleResults.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	toggleMenu() {
		this.setState({ menu: !this.state.menu });
	}

	toggleResults() {
		this.props.toggleResults();
	}

	handleClick(e) {
		if (e.target.className !== 'search-result' && this.props.showResults) {
			this.props.toggleResults();
		}
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick, false);
	}

	render() {
		var connections = this.props.connections.map((conn, i) => {
			var name = conn.first + " " + conn.last;
      return (
				<Link key={i} to="/profile">
					<div className="search-result" onClick={this.toggleResults}>
						<img src={conn.s3} />
						<p>{name}</p>
					</div>
				</Link>
      )
    });
		return (
			<div>
      <div className="navBar">
        <div className="navLeft">
          <Link to="/timeline"><img src={logo} /></Link>
          <Search />
        </div>
        <div className="navRight">
          <Link to="/connections"><img src={network} />My Network</Link>
          <Link id="trell-card" to="/trello"><img src={trellcard} />Trello</Link>
          <div className="me-hover" onClick={this.toggleMenu}>
		      <div className="profile-icon-box">
			      { this.props.user.picture ? (<img className='image-icon' src={this.props.user.picture}/>)
				      :
				      (<img className='image-icon' src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'/>)
			      }
			      <a> {this.props.user.display_name ? (<a> {this.props.user.display_name} </a>) : (<a> Sign In </a>)}</a>
		      </div>
           
          </div>
        </div>
      </div>
			<div>
				{this.state.menu ? <Settings /> : null}
			</div>
			<div className="search-results">
				{this.props.showResults ? connections : null}
			</div>
		</div>
		)
	}
}

const mapDispatchToProps = {
  toggleResults: toggleResults
}

function mapStateToProps(state) {
  return {
    connections: state.search.updatedConnections,
		showResults: state.search.showResults,
		user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
