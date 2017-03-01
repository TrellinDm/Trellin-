import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addPersonal} from '../../../reducers/profileReducer';
import {deletePersonal} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfilePersonal extends Component {
	constructor(props){
		super(props);

		this.state = {
			activePersonal1: false,
			activePersonal2: false,
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
		var personalArray = [];
		if (this.props.conn.showConn) {
			if (this.props.conn.personalArray) {
				personalArray = this.props.conn.personalArray;
			} else {
				personalArray = this.props.personalArray;
			}
		} else {
			personalArray = this.props.personalArray;
		}
		var personals = personalArray.map((pers, i) => {
			return (
				<div key={i} className="awards-div">
					{pers.birthday ? (
						<div>{pers.birthday}</div>
					) : (
						<div>
							{this.props.conn.showConn ? null : (
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
						</div>
					)}
					{pers.marital ? (
						<div>{pers.marital}</div>
					) : (
						<div>
							{this.props.conn.showConn ? null : (
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
					)}
				</div>
			)
		});
		return (

			<div className="education-box">
				<div className="title-text-gray">Personal Details
					{this.props.conn.showConn ? null : (
						<div className="trash" onClick={this.deletePersonal.bind(this)}></div>
					)}
				</div>
				<div className="box-info">
					{personals}
				</div>
				{this.props.conn.showConn ? null : (
					<div className="bottom-add">
						<div className="bottom-add-text" onClick={() => this.refs.details.show()}>Add personal</div>
					</div>
				)}
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
	deletePersonal: deletePersonal
};

function mapStateToProps(state) {
	return {
		personalArray: state.profile.personalArray,
		user: state.user,
		conn: state.connProfile
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePersonal);
