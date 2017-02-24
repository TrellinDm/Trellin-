import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {setConnections} from '../../reducers/connectionsReducer';
import axios from 'axios';
import './connections.scss';

class Connections extends Component {

  componentDidMount() {
    // axios.post('/getConnections', {
    //   id: 1
    // }).then(res => {
    //   this.props.setConnections(res.data);
    // });
  }

  render() {
    let test = this.props.connections.map((conn, i) => {
      let name = conn.first + " " + conn.last;
      return (
        <div key={i}>
          <div className="conn section-shadow">
            <img src={conn.s3} />
            <div className="conn-info">
              <p>{name}</p>
              <p>{conn.headline}</p>
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
            <div className="connections">{test}</div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
          </div>
        </div>
        <div className="connection-bottom-box">
          <div className="connection-header">My Connections</div>
          <div className="connection-wrapper">
            <div className="connections">{test}</div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
            <div className="connection-item"></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setConnections: setConnections
}

function mapStateToProps(state) {
  return {
    connections: state.connections.connections
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
