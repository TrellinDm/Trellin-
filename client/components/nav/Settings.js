import React, {Component} from 'react';
import {Link} from 'react-router';
import Logout from '../../src/logout.svg';
import {connect} from 'react-redux';

class Settings extends Component {

  render() {
    console.log(this.props.user);

    return (
      <div className="account-settings">
        <img src={Logout} />
        <Link to="/login"></Link>
        {this.props.user.id ? ( <a href='/auth/logout'>Sign Out</a>)
          :
          (<a href='/auth'>Sign In</a>)
        }

      </div>
    )
  }
}

const mapStateToProps= (state) =>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Settings);
