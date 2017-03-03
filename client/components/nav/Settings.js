import React, {Component} from 'react';
import {Link} from 'react-router';
import Logout from '../../src/logout.svg';
import {connect} from 'react-redux';
import network from '../../src/network.svg';
import trellcard from '../../src/trellcard.svg';
import {viewYou} from '../../reducers/connProfileReducer';

class Settings extends Component {

  constructor(props) {
    super(props)
    this.viewYou = this.viewYou.bind(this);
  }

  viewYou() {
    console.log('view you?');
    this.props.viewYou();
  }

  render() {

    return (
      <div className="drop-menu">
        <div className="account-settings">
          <Link to="/connections" className="profile-settings" id="network-menu">
            <img src={network} />
            <div>Network</div>
          </Link>
          <Link to="/trello" className="profile-settings" id="trello-menu">
            <img src={trellcard} />
            <div>Trello</div>
          </Link>
	        {this.props.user.display_name ? (
            <Link to="/profile" onClick={this.viewYou} className="profile-settings">
              <div className="profile-icon" />
              <div>Profile</div>
            </Link>) : (<div></div>)}
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

const mapDispatchToProps = {
  viewYou: viewYou
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
