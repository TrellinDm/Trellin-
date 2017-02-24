import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addAward} from '../../../reducers/profileReducer';
import {deleteAwards} from '../../../reducers/profileReducer';
import {profileStrength} from '../../../reducers/profileReducer';
import {profileStrengthDelete} from '../../../reducers/profileReducer';
import axios from 'axios';


class ProfileAwards extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeAward1: false,
			activeAward2: false,
			activeAward3: false,
			activeAward4: false,
			activeAward5: false,
			count: 0,
			addAwar: {
				title: '',
				associated: '',
				issuer: '',
				recieved: '',
				description: ''
			}
		};
		this.addNewAward = this.addNewAward.bind(this);
		this.saveTitle = this.saveTitle.bind(this);
		this.saveAssociated = this.saveAssociated.bind(this);
		this.saveIssuer = this.saveIssuer.bind(this);
		this.saveRecieved = this.saveRecieved.bind(this);
		this.saveDescription = this.saveDescription.bind(this);
	}

	showAward1() {
		this.setState({activeAward1: true})
	}
	hideAward1() {
		this.setState({activeAward1: false})
	}

	showAward2() {
		this.setState({activeAward2: true})
	}
	hideAward2() {
		this.setState({activeAward2: false})
	}

	showAward3() {
		this.setState({activeAward3: true})
	}
	hideAward3() {
		this.setState({activeAward3: false})
	}

	showAward4() {
		this.setState({activeAward4: true})
	}
	hideAward4() {
		this.setState({activeAward4: false})
	}
	
	showAward5() {
		this.setState({activeAward5: true})
	}
	hideAward5() {
		this.setState({activeAward5: false})
	}

	addNewAward() {
		var awards = this.state.addAwar;
		awards.id = 1;
		axios.post('/setAwards', awards).then(() => {
			this.props.addAward(this.state.addAwar);
		});
	}

	saveTitle(e) {
		this.setState({
			addAwar: {
				title: e.target.value,
				associated: this.state.addAwar.associated,
				issuer: this.state.addAwar.issuer,
				recieved: this.state.addAwar.recieved,
				description: this.state.addAwar.description
			}
		});
	}

	saveAssociated(e) {
		this.setState({
			addAwar: {
				title: this.state.addAwar.title,
				associated: e.target.value,
				issuer: this.state.addAwar.issuer,
				recieved: this.state.addAwar.recieved,
				description: this.state.addAwar.description
			}
		});
	}

	saveIssuer(e) {
		this.setState({
			addAwar: {
				title: this.state.addAwar.title,
				associated: this.state.addAwar.associated,
				issuer: e.target.value,
				recieved: this.state.addAwar.recieved,
				description: this.state.addAwar.description
			}
		});
	}

	saveRecieved(e) {
		this.setState({
			addAwar: {
				title: this.state.addAwar.title,
				associated: this.state.addAwar.associated,
				issuer: this.state.addAwar.issuer,
				recieved: e.target.value,
				description: this.state.addAwar.description
			}
		});
	}

	saveDescription(e) {
		this.setState({
			addAwar: {
				title: this.state.addAwar.title,
				associated: this.state.addAwar.associated,
				issuer: this.state.addAwar.issuer,
				recieved: this.state.addAwar.recieved,
				description: e.target.value
			}
		});
	}
		
	deleteAwards(){
		axios.delete('/delete/awards/' + 1).then((res) => {
			this.props.deleteAwards();
		});
		var count = this.state.count;
		this.props.profileStrengthDelete(count);
	}
	
	saveCount(count) {
		this.setState ({count: count})
	}

	render() {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			paddingBottom: '70px',
			padding: '30px',
		};

		var awards = this.props.awardsArray.map((awar, i) => {
			var count = 0;
			if (awar.title) {
				count++;
			}
			if (awar.associated) {
				count++;
			}
			if (awar.issuer) {
				count++;
			}
			if (awar.recieved) {
				count++;
			}
			if (awar.description) {
				count++;
			}
			if(count !== this.state.count) {
				if (count > 5) {
					count = 5;
				}
				this.saveCount(count);
				this.props.profileStrength(count);
			}
			return (
				<div key={i} className="awards-div">
					{awar.title ? (
						<div>{awar.title}</div>
					) : (
						<div className="add-text-blue">Add Title
							<div onMouseEnter={this.showAward1.bind(this)} onMouseLeave={this.hideAward1.bind(this)} id="Award1" className="question-icon"></div>
							<ToolTip active={this.state.activeAward1} position="right" arrow="center" parent="#Award1">
								<div className="popup-pad">
									<div className="sm-text">Title</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{awar.associated ? (
						<div>{awar.associated}</div>
					) : (
						<div className="add-text-blue">Add Associated with
							<div onMouseEnter={this.showAward2.bind(this)} onMouseLeave={this.hideAward2.bind(this)} id="Award2" className="question-icon"></div>
							<ToolTip active={this.state.activeAward2} position="right" arrow="center" parent="#Award2">
								<div className="popup-pad">
									<div className="sm-text">Associated with</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{awar.issuer ? (
						<div>{awar.issuer}</div>
					) : ( 
						<div className="add-text-blue">Add Issuer
							<div onMouseEnter={this.showAward3.bind(this)} onMouseLeave={this.hideAward3.bind(this)} id="Award3" className="question-icon"></div>
							<ToolTip active={this.state.activeAward3} position="right" arrow="center" parent="#Award3">
								<div className="popup-pad">
									<div className="sm-text">Issuer</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{awar.recieved? (
							<div>{awar.recieved}</div>
						) : (
							<div className="add-text-blue">Add Date
								<div onMouseEnter={this.showAward4.bind(this)} onMouseLeave={this.hideAward4.bind(this)} id="Award4" className="question-icon"></div>
								<ToolTip active={this.state.activeAward4} position="right" arrow="center" parent="#Award4">
									<div className="popup-pad">
										<div className="sm-text">Date</div>
										<div className="profile-text">Text here...</div>
									</div>
								</ToolTip>
							</div>
						)}
					{awar.description ? (
						<div>{awar.description}</div>
					) : (
						<div className="add-text-blue">Add Description
							<div onMouseEnter={this.showAward5.bind(this)} onMouseLeave={this.hideAward5.bind(this)} id="Award4" className="question-icon"></div>
							<ToolTip active={this.state.activeAward4} position="right" arrow="center" parent="#Award4">
								<div className="popup-pad">
									<div className="sm-text">Description</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
				</div>
			)
		});
		return (
			<div className="education-box">
				<div className="title-text-gray" onClick={this.deleteAwards.bind(this)}>Honors & Awards<div className="trash"></div></div>
					<div className="box-info">
						{awards}
					</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.awards.show()}>Add award</div>
				</div>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="awards" title="Add Honors and Awards">
					<div className="form-title">Title</div>
					<input className="form-input" type="text" onChange={this.saveTitle}/>
					<div className="form-title">Associated with</div>
					<input className="form-input" type="text" onChange={this.saveAssociated}/>
					<div className="form-title">Issuer</div>
					<input className="form-input" type="text" onChange={this.saveIssuer}/>
					<div className="form-title">Date recieved</div>
					<input className="form-input" type="date" id="myMonth" onChange={this.saveRecieved}/>
					<div className="form-title">Description</div>
					<div>
						<textarea rows="6" cols="127" onChange={this.saveDescription} />
					</div>
					<div className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewAward(); this.refs.awards.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}


const mapDispatchToProps = {
  addAward: addAward,
	deleteAwards: deleteAwards,
	profileStrength: profileStrength,
	profileStrengthDelete: profileStrengthDelete
};

function mapStateToProps(state) {
	return {
		awardsArray: state.profile.awardsArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAwards);
