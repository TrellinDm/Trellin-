import React, {Component} from 'react';
import {Link} from 'react-router';
import Logout from '../../src/logout.svg';
import {connect} from 'react-redux';
import network from '../../src/network.svg';
import trellcard from '../../src/trellcard.svg';

class Settings extends Component {

  render() {

    return (
      <div className="drop-menu">
        <div className="account-settings">
          <Link to="/connections" className="profile-settings" id="network-menu">
            <img src={network} />
            <a>Network</a>
          </Link>
          <Link to="/trello" className="profile-settings" id="trello-menu">
            <img src={trellcard} />
            <a>Trello</a>
          </Link>
          <Link to="/profile" className="profile-settings">
            <div className="profile-icon"/>
            <a>Profile</a>
          </Link>
          <div className="logout-menu">
            <img src={Logout} />
            <Link to="/login" />
  		      {this.props.user.id ? ( <a href='/auth/logout'>Sign Out</a>)
  			      :
  			      (<a href='/auth'>Sign In</a>)
  		      }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps= (state) =>{
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Settings);
