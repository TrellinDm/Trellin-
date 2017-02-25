import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addPersonal} from '../../../reducers/profileReducer';
import {deletePersonal} from '../../../reducers/profileReducer';
import {profileStrength} from '../../../reducers/profileReducer';
import {profileStrengthDelete} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfilePersonal extends Component {
	constructor(props){
		super(props);

		this.state = {
			activePersonal1: false,
			activePersonal2: false,
			count: 0,
			addPers: {
				birthday: null,
				marital: ''
			}
		};
		this.addNewPersonal = this.addNewPersonal.bind(this);
		this.saveBirthday = this.saveBirthday.bind(this);
		this.saveMarital = this.saveMarital.bind(this);
	}

	showPersonal1() {
		this.setState({activePersonal1: true})
	}
	hidePersonal1() {
		this.setState({activePersonal1: false})
	}

	showPersonal2() {
		this.setState({activePersonal2: true})
	}
	hidePersonal2() {
		this.setState({activePersonal2: false})
	}

	addNewPersonal() {
		var personal = this.state.addPers;
		personal.id = this.props.user.id;
		axios.post('/setPersonal', personal).then(() => {
			this.props.addPersonal(this.state.addPers);
		});
	}

	saveBirthday(e) {
		this.setState({
			addPers: {
				birthday: e.target.value,
				marital: this.state.addPers.marital
			}
		});
	}

	saveMarital(e) {
		this.setState({
			addPers: {
				birthday: this.state.addPers.birthday,
				marital: e.target.value
			}
		});
	}

	deletePersonal() {
		axios.delete('/delete/personal/' + this.props.user.id).then((res) => {
			this.props.deletePersonal();
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

		var personals = this.props.personalArray.map((pers, i) => {
			var count = 0;
			if (pers.birthday) {
				count++;
			}
			if (pers.marital) {
				count++;
			}
			if(count !== this.state.count) {
				if (count > 2) {
					count = 2;
				}
				this.saveCount(count);
				this.props.profileStrength(count);
			}
			return (
				<div key={i} className="awards-div">
					{pers.birthday ? (
						<div>{pers.birthday}</div>
					) : (
						<div className="add-text-blue">Add Birthday
							<div onMouseEnter={this.showPersonal1.bind(this)} onMouseLeave={this.hidePersonal1.bind(this)} id="Personal1" className="question-icon"></div>
							<ToolTip active={this.state.activePersonal1} position="right" arrow="center" parent="#Personal1">
								<div className="popup-pad">
									<div className="sm-text">Birthday</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{pers.marital ? (
						<div>{pers.marital}</div>
					) : (
						<div className="add-text-blue">Add Marital Status
							<div onMouseEnter={this.showPersonal2.bind(this)} onMouseLeave={this.hidePersonal2.bind(this)} id="Personal2" className="question-icon"></div>
							<ToolTip active={this.state.activePersonal2} position="right" arrow="center" parent="#Personal2">
								<div className="popup-pad">
									<div className="sm-text">Marital Status</div>
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
				<div className="title-text-gray" onClick={this.deletePersonal.bind(this)}>Personal Details<div className="trash"></div></div>
				<div className="box-info">
					{personals}
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.details.show()}>Add personal</div>
				</div>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="details" title="Add Personal Details">
					<div className="form-title">Birthday</div>
					<input className="form-input" type="date" id="myMonth" onChange={this.saveBirthday} />
					<div className="form-title">Marital status</div>
					<select className="form-input" name="status" onChange={this.saveMarital}>
						<option value="" />
						<option value="single">Single</option>
						<option value="married">Married</option>
						<option value="divorced">Divorced</option>
						<option value="widowed">Widowed</option>
					</select>
					<div className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewPersonal(); this.refs.details.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}

const mapDispatchToProps = {
  addPersonal: addPersonal,
	deletePersonal: deletePersonal,
	profileStrength: profileStrength,
	profileStrengthDelete: profileStrengthDelete
};

function mapStateToProps(state) {
	return {
		personalArray: state.profile.personalArray,
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePersonal);
