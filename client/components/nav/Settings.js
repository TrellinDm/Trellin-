import React, {Component} from 'react';
import {Link} from 'react-router';
import Logout from '../../src/logout.svg';
import {connect} from 'react-redux';

class Settings extends Component {
  
  render() {

    return (
      <div className="drop-menu">
        <div className="account-settings">
          <img src={Logout} />
          <Link to="/login" />
		      {this.props.user.id ? ( <a href='/auth/logout'>Sign Out</a>)
			      :
			      (<a href='/auth'>Sign In</a>)
		      }
        </div>
        
        <Link to="/profile" className="profile-settings">
          <div className="profile-icon"/>
          {/*<Link to="/profile"></Link>*/}
          <a>Profile</a>
        </Link>
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
