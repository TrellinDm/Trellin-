import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { removeSugg } from '../../reducers/connectionsReducer';
import axios from 'axios';
import './connections.scss';
import {addConnInfo} from '../../reducers/connProfileReducer';
import {addConnUser} from '../../reducers/connProfileReducer';
import {viewConn} from '../../reducers/connProfileReducer';
// import ConnectionCard from './ConnectionCard';

class Connections extends Component {
	constructor(props){
	  super(props);

  this.renderAllCard = this.renderAllCard.bind(this);
  this.renderCard = this.renderCard.bind(this);
	this.addConnection = this.addConnection.bind(this);
	this.getConnData = this.getConnData.bind(this);
  }

	addConnection(connId) {
		axios.post('/addConnection', {userId: this.props.user.id, connId: connId}).then(() => {
			this.props.removeSugg(connId);
		});
	}

	getConnData(connId) {
		this.props.viewConn();
		axios.post('/getUserInformation', {id: connId}).then((result) => {
			axios.post('/getConnUser', {id: connId}).then((user) => {
				axios.post('/getCountConn', {id: connId}).then((count) => {
					this.props.addConnInfo(result.data);
					user.data.connCount = count.data;
					this.props.addConnUser(user.data);
				});
			});
		});
	}

	renderAllCard() {
    if (this.props.user) {
      var cards = this.props.suggestions.map((conn, i) => {
        let name = conn.first + " " + conn.last;
        return (<div key={i} className="connection-item">
          <div className="conn section-shadow">
            <img className="connection-img" src={conn.picture} />
            <div className="conn-info">
              <div className="connection-name">{name}</div>
              <div className="connection-text">{conn.headline}</div>
            </div>
            <button className="button-connect" onClick={() => { this.addConnection(conn.id)} }>Add Connection</button>
          </div>
        </div>)
      });
      return cards;
    }
  }

	renderCard() {
		if (this.props.user) {
			var card = this.props.connections.map((conn, i) => {
				let name = conn.first + " " + conn.last;
				return (<div key={i} className="connection-item">
          <div className="conn section-shadow">
            <img className="connection-img" src={conn.picture}/>
            <div className="conn-info">
              <div className="connection-name">{name}</div>
              <div className="connection-text">{conn.headline}</div>
            </div>
            <Link to="/profile">
              <button className="button-connect" onClick={() => { this.getConnData(conn.connection_id)} }>View Profile</button>
            </Link>
          </div>
        </div>)
			});
			return card;
		}
	}

  render() {
    return (
      <div className="connection-bg">
        <div className="connection-top-box">
          <div className="connection-header">Suggested Connections</div>
	          <div className="connection-wrapper">{this.renderAllCard()}</div>
        </div>
        <div className="connection-bottom-box">
          <div className="connection-header">My Connections</div>
          <div className="connection-wrapper">{this.renderCard()}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    connections: state.connections.connections,
    suggestions: state.connections.suggestions,
    user: state.user
  }
}

const mapDispatchToProps = {
	removeSugg: removeSugg,
	addConnInfo: addConnInfo,
	addConnUser: addConnUser,
	viewConn: viewConn
}

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
