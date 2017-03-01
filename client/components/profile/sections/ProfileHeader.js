import React, {Component} from 'react';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {updateUser} from '../../../reducers/userReducer';
import {profileStrength} from '../../../reducers/profileReducer';
import {removeSugg} from '../../../reducers/connectionsReducer';
import {removeConn} from '../../../reducers/connectionsReducer';
import axios from 'axios';

class ProfileHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menu: false,
			showRemove: true,
			profile: {
				name: this.props.user.display_name,
				headline: this.props.user.headline,
				city: this.props.user.city,
				state: this.props.user.state,
				industry: this.props.user.industry,
				picture: this.props.user.picture
			}
		};
		this.editHeader = this.editHeader.bind(this);
		this.saveName = this.saveName.bind(this);
		this.saveHeadline = this.saveHeadline.bind(this);
		this.saveCity = this.saveCity.bind(this);
		this.saveState = this.saveState.bind(this);
		this.saveIndustry = this.saveIndustry.bind(this);
		this.savePicture = this.savePicture.bind(this);
		this.removeConnection = this.removeConnection.bind(this);
	}

	editHeader() {
		this.state.profile.location = this.state.profile.city + ", " + this.state.profile.state;
		this.state.profile.first = this.state.profile.name.split(' ')[0];
		this.state.profile.last = this.state.profile.name.split(' ')[1];
		this.state.profile.id = this.props.user.id;
		axios.put('/setProfile', this.state.profile).then((res) => {
			this.props.updateUser(this.state.profile);
		});
	}

	saveName(e) {
		this.setState({
			profile: {
				name: e.target.value,
				headline: this.state.profile.headline,
				city: this.state.profile.city,
				state: this.state.profile.state,
				industry: this.state.profile.industry,
				picture: this.state.profile.picture
			}
		});
	}

	saveHeadline(e) {
		this.setState({
			profile: {
				name: this.state.profile.name,
				headline: e.target.value,
				city: this.state.profile.city,
				state: this.state.profile.state,
				industry: this.state.profile.industry,
				picture: this.state.profile.picture
			}
		});
	}

	saveCountry(e) {
		this.setState({
			profile: {
				name: this.state.profile.name,
				headline: this.state.profile.headline,
				country: e.target.value,
				city: this.state.profile.city,
				state: this.state.profile.state,
				industry: this.state.profile.industry,
				picture: this.state.profile.picture
			}
		});
	}

	saveCity(e) {
		this.setState({
			profile: {
				name: this.state.profile.name,
				headline: this.state.profile.headline,
				city: e.target.value,
				state: this.state.profile.state,
				industry: this.state.profile.industry,
				picture: this.state.profile.picture
			}
		});
	}

	saveState(e) {
		this.setState({
			profile: {
				name: this.state.profile.name,
				headline: this.state.profile.headline,
				city: this.state.profile.city,
				state: e.target.value,
				industry: this.state.profile.industry,
				picture: this.state.profile.picture
			}
		});
	}

	saveIndustry(e) {
		this.setState({
			profile: {
				name: this.state.profile.name,
				headline: this.state.profile.headline,
				city: this.state.profile.city,
				state: this.state.profile.state,
				industry: e.target.value,
				picture: this.state.profile.picture
			}
		});
	}

	savePicture(e) {
		this.setState({
			profile: {
				name: this.state.profile.name,
				headline: this.state.profile.headline,
				city: this.state.profile.city,
				state: this.state.profile.state,
				industry: this.state.profile.industry,
				picture: e.target.value
			}
		});
	}

	removeConnection(connId) {
		this.setState({showRemove: false});
		axios.post('/removeConnection', {id: this.props.user.id, connId: connId}).then(() => {
			this.props.removeConn(connId);
		});

	}

	addConnection(connId) {
		this.setState({showRemove: true});
		axios.post('/addConnection', {userId: this.props.user.id, connId: connId}).then(() => {
			this.props.removeSugg(connId);
		});
	}

  render() {

	  const style = {
		  width: '50%',
		  height: 'auto',
		  marginTop: '-300px',
		  marginLeft: '-25%',
		  paddingBottom: '70px',
		  padding: '30px',
		  color: 'black'
	  };

		var shownUser;
		if (this.props.showConn) {
			if (this.props.connUser[0]) {
				shownUser = this.props.connUser[0];
			} else {
				shownUser = this.props.user;
			}
		} else {
			shownUser = this.props.user;
		}

		if (this.props.showConn) {
			var current = this.props.current;
		  var education = this.props.education;
		} else {
			var current = this.props.connCurrent;
		  var education = this.props.connEducation;
		}

		if (this.props.showConn) {
			if (this.props.connUser[0]) {
				var connectionNum = this.props.connUser.connCount[0].count;
			}
		} else {
			if (this.props.conns) {
				var connectionNum = this.props.conns.length;
			} else {
				var connectionNum = 0;
			}
		}


    return (

      <div className="header-box">

        <div className="profile-pic-container">
          <div className="profile-pic">

	          { shownUser.picture ? (
							<img className='profile-pic' src={shownUser.picture}/>
						) :(
							<img className='profile-pic' src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'/>
						)}
          </div>
        </div>

        <div className="header-info-container">
					{this.props.showConn ? (
						<div>
							{this.state.showRemove ? (
								<button className="button-dark-blue header-edit" onClick={() => {this.removeConnection(shownUser.id)}}>Remove</button>
							) : (
								<button className="button-dark-blue header-edit" onClick={() => {this.addConnection(shownUser.id)}}>Connect</button>
							)}
						</div>

					) : (
						<div className="gray-pencil header-edit" onClick={() => this.refs.profile.show()}></div>
					)}
          <div className="profile-name">
	          <div className="title-text">
							{shownUser.first && shownUser.last ? (
								<div className="title-text">{shownUser.first + " " + shownUser.last}</div>
							) : (
								<div>
									{shownUser.display_name ? (
										<div className="title-text"> {shownUser.display_name} </div>
									) : (
										<div className="title-text"> John Doe </div>
									)}
								</div>
							)}
						</div>
            {/* {this.state.name ? <NamePopup /> : null} */}
          </div>
					<div className="header-mid">
						{shownUser.headline ? (
							<div>{shownUser.headline}</div>
						) : (
							<div className="add-text-blue" >
								{this.props.showConn ? null : <p>Add Headline</p>}
							</div>
						)}
	          <div className="profile-headline">
	            {/*<div onClick={this.toggleHeadline} className="popup profile-text">Devmountain</div>*/}
	            {this.state.headline ? <HeadlinePopup /> : null}
	          </div>
	          <div className="profile-industry profile-text">
	            {/*<div onClick={this.toggleIndustry} className="popup">Industry/Location</div>*/}
	            {this.state.industry ? <IndustryPopup /> : null}
	          </div>
		        <div className="profile-text"><span className="sm-gray-text">Current</span> {current}</div>
		        <div className="profile-text"><span className="sm-gray-text">Education</span> {education}</div>
					</div>
					<div className="connections-float-R">
            <div className="connections-num">{connectionNum}</div>
            <div className="sm-gray-text" id="connections-sm-gray-text">connections</div>
          </div>
        </div>

				<div>
					{/* <button onClick={() => this.refs.profile.show()} className="button-dark-blue" > Edit profile</button> */}
						<SkyLight dialogStyles={style} hideOnOverlayClicked ref="profile" title="Edit profile">
							<div>


								<form method="POST" action="/save-header" >
									<div className="preview">
										{this.state.profile.picture ? (
											<img className="pic-preview" src={this.state.profile.picture} />
										) : null}
										<div className="url-preview">
											<div className="form-title">Profile Picture</div>
											<input className="form-input" type="text" value={this.state.profile.picture} placeholder="image url..." onChange={this.savePicture}/>
										</div>
									</div>
									<div className="form-title">Full Name</div>
									<input className="form-input" type="text" name="fullName" value={this.state.profile.name} placeholder="what is your first and last name?" onChange={this.saveName} />
									<div className="form-title">Headline</div>
									<input className="form-input" type="text" name="lastName" value={this.state.profile.headline} placeholder="what's happening?" onChange={this.saveHeadline} />
									<div className="form-title">City</div>
									<input className="form-input" type="text" name="lastName" value={this.state.profile.city} placeholder="what city do you live in?" onChange={this.saveCity} />
									<div className="form-title">State</div>
									<input className="form-input" type="text" name="lastName" value={this.state.profile.state} placeholder="what state do you live in?" onChange={this.saveState} />
									<div className="form-title">Industry</div>
									<input className="form-input" type="text" name="lastName" value={this.state.profile.industry} placeholder="what industry do you work in?" onChange={this.saveIndustry} />
								</form>
								<div className="form-btn">
									<button className="button-dark-blue" onClick={(event) => { this.editHeader(); this.refs.profile.hide()}}>Save</button>
								</div>
							</div>
						</SkyLight>
				</div>

      </div>
    )
  }
}

const mapDispatchToProps = {
	updateUser: updateUser,
	removeSugg: removeSugg,
	removeConn: removeConn
}

function mapStateToProps(state) {
	return {
		connections: state.search.updatedConnections,
		showResults: state.search.showResults,
		user: state.user,
		current: state.profile.current,
		education: state.profile.education,
		connCurrent: state.connProfile.current,
		connEducation: state.connProfile.education,
		conns: state.user.connections,
		showConn: state.connProfile.showConn,
		connUser: state.connProfile.connUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
