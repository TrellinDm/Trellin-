import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {setConnections} from '../../reducers/connectionsReducer';
import axios from 'axios';
import './connections.scss';
// import ConnectionCard from './ConnectionCard';

class Connections extends Component {

  render() {
	  // let allConnections = this.props.allConnections.map((conn, i) => {
		 //  let name = conn.first + " " + conn.last;
		 //  return (
     //    <div key={i}>
     //      <div className="conn section-shadow">
     //        <img className="connection-img" src={conn.picture} />
     //        <div className="conn-info">
     //          <div className="connection-name">{name}</div>
     //          <div className="connection-text">{conn.headline}</div>
     //        </div>
     //        <Link to="/profile"><button className="button-connect">View Profile</button></Link>
     //      </div>
     //    </div>
		 //  )
	  // });
    let userConnections = this.props.connections.map((conn, i) => {
      let name = conn.first + " " + conn.last;
      return (
        <div key={i}>
          <div className="conn section-shadow">
            <img className="connection-img" src={conn.picture} />
            <div className="conn-info">
              <div className="connection-name">{name}</div>
              <div className="connection-text">{conn.headline}</div>
            </div>
            <Link to="/profile"><button className="button-connect">View Profile</button></Link>
          </div>
        </div>
      )
    });
    return (
      <div className="connection-bg">
        <div className="connection-top-box">
          <div className="connection-header">Suggested Connections</div>
          <div className="connection-wrapper">
           {this.props.allConnections.map((conn, i) => {
            let name = conn.first + " " + conn.last;
            return (
              <div key={i} className="connection-item">
                <div className="conn section-shadow">
                  <img className="connection-img" src={conn.picture} />
                  <div className="conn-info">
                    <div className="connection-name">{name}</div>
                    <div className="connection-text">{conn.headline}</div>
                  </div>
                  <Link to="/profile"><button className="button-connect">View Profile</button></Link>
                </div>
              </div>)
           })}
          </div>
        </div>
        <div className="connection-bottom-box">
          <div className="connection-header">My Connections</div>
          <div className="connection-wrapper">
            <div className="connection-item">{userConnections}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setConnections: setConnections
};

function mapStateToProps(state) {
  return {
    connections: state.user.connections,
    allConnections: state.user.allConnections
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
