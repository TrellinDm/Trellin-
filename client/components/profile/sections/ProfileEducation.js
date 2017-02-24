import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addEducation} from '../../../reducers/profileReducer';
import {deleteEducation} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileEducation extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeEducation0: false,
			activeEducation1: false,
			activeEducation2: false,
			activeEducation3: false,
			activeEducation4: false,
			activeEducation5: false,
			activeEducation6: false,
			addEduc: {
				school: '',
				degree: '',
				field: '',
				grade: '',
				activities: '',
				begdate: null,
				enddate: null
			}
		};
		this.addNewEducation = this.addNewEducation.bind(this);
		this.saveSchool = this.saveSchool.bind(this);
		this.saveDegree = this.saveDegree.bind(this);
		this.saveField = this.saveField.bind(this);
		this.saveGrade = this.saveGrade.bind(this);
		this.saveActivities = this.saveActivities.bind(this);
		this.saveBeg = this.saveBeg.bind(this);
		this.saveEnd = this.saveEnd.bind(this);
	}

	showEducation0() {
		this.setState({activeEducation0: true})
	}
	hideEducation0() {
		this.setState({activeEducation0: false})
	}

	showEducation1() {
		this.setState({activeEducation1: true})
	}
	hideEducation1() {
		this.setState({activeEducation1: false})
	}

	showEducation2() {
		this.setState({activeEducation2: true})
	}
	hideEducation2() {
		this.setState({activeEducation2: false})
	}

	showEducation3() {
		this.setState({activeEducation3: true})
	}
	hideEducation3() {
		this.setState({activeEducation3: false})
	}

	showEducation4() {
		this.setState({activeEducation4: true})
	}
	hideEducation4() {
		this.setState({activeEducation4: false})
	}

	showEducation5() {
		this.setState({activeEducation5: true})
	}
	hideEducation5() {
		this.setState({activeEducation5: false})
	}

	showEducation6() {
		this.setState({activeEducation6: true})
	}
	hideEducation6() {
		this.setState({activeEducation6: false})
	}

	addNewEducation() {
		var education = this.state.addEduc;
		education.id = 1;
		axios.post('/setEducation', education).then(() => {
			this.props.addEducation(this.state.addEduc);
		});
	}

	saveSchool(e) {
		this.setState({
			addEduc: {
				school: e.target.value,
				degree: this.state.addEduc.degree,
				field: this.state.addEduc.field,
				grade: this.state.addEduc.grade,
				activities: this.state.addEduc.activities,
				begdate: this.state.addEduc.begdate,
				enddate: this.state.addEduc.enddate
			}
		});
	}

	saveDegree(e) {
		this.setState({
			addEduc: {
				school: this.state.addEduc.school,
				degree: e.target.value,
				field: this.state.addEduc.field,
				grade: this.state.addEduc.grade,
				activities: this.state.addEduc.activities,
				begdate: this.state.addEduc.begdate,
				enddate: this.state.addEduc.enddate
			}
		});
	}

	saveField(e) {
		this.setState({
			addEduc: {
				school: this.state.addEduc.school,
				degree: this.state.addEduc.degree,
				field: e.target.value,
				grade: this.state.addEduc.grade,
				activities: this.state.addEduc.activities,
				begdate: this.state.addEduc.begdate,
				enddate: this.state.addEduc.enddate
			}
		});
	}

	saveGrade(e) {
		this.setState({
			addEduc: {
				school: this.state.addEduc.school,
				degree: this.state.addEduc.degree,
				field: this.state.addEduc.field,
				grade: e.target.value,
				activities: this.state.addEduc.activities,
				begdate: this.state.addEduc.begdate,
				enddate: this.state.addEduc.enddate
			}
		});
	}

	saveActivities(e) {
		this.setState({
			addEduc: {
				school: this.state.addEduc.school,
				degree: this.state.addEduc.degree,
				field: this.state.addEduc.field,
				grade: this.state.addEduc.grade,
				activities: e.target.value,
				begdate: this.state.addEduc.begdate,
				enddate: this.state.addEduc.enddate
			}
		});
	}

	saveBeg(e) {
		this.setState({
			addEduc: {
				school: this.state.addEduc.school,
				degree: this.state.addEduc.degree,
				field: this.state.addEduc.field,
				grade: this.state.addEduc.grade,
				activities: this.state.addEduc.activities,
				begdate: e.target.value,
				enddate: this.state.addEduc.enddate
			}
		});
	}

	saveEnd(e) {
		this.setState({
			addEduc: {
				school: this.state.addEduc.school,
				degree: this.state.addEduc.degree,
				field: this.state.addEduc.field,
				grade: this.state.addEduc.grade,
				activities: this.state.addEduc.activities,
				begdate: this.state.addEduc.begdate,
				enddate: e.target.value
			}
		});
	}

	deleteEducation() {
		axios.delete('/delete/education/' + 1).then((res) => {
			this.props.deleteEducation();
		})
	}

	render () {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			padding: '30px',
		};

		var educations = this.props.educationArray.map((educ, i) => {
			return (
				<div key={i} className="awards-div">
					{educ.school ? (
						<div>{educ.school}</div>
					) : (
						<div className="add-text-blue">Add School
							<div onMouseEnter={this.showEducation0.bind(this)} onMouseLeave={this.hideEducation0.bind(this)} id="Education0" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation0} position="right" arrow="center" parent="#Education0">
								<div className="popup-pad">
									<div className="sm-text">School</div>
									<div className="profile-text">Adding your school helps us make better recommendations for you.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{educ.degree ? (
						<div>{educ.degree}</div>
					) : (
						<div className="add-text-blue">Add Degree
							<div onMouseEnter={this.showEducation1.bind(this)} onMouseLeave={this.hideEducation1.bind(this)} id="Education1" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation1} position="right" arrow="center" parent="#Education1">
								<div className="popup-pad">
									<div className="sm-text">School Degree</div>
									<div className="profile-text">Adding your degree helps us make better recommendations for you.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{educ.field ? (
						<div>{educ.field}</div>
					) : (
						<div className="add-text-blue">Add Field of Study
							<div onMouseEnter={this.showEducation2.bind(this)} onMouseLeave={this.hideEducation2.bind(this)} id="Education2" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation2} position="right" arrow="center" parent="#Education2">
								<div className="popup-pad">
									<div className="sm-text">Field of Study</div>
									<div className="profile-text">Adding your area of expertise helps you be found for the right opportunities.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{educ.begdate ? (
						<div>{educ.begdate}</div>
					) : (
						<div className="add-text-blue">Add Start Date
							<div onMouseEnter={this.showEducation3.bind(this)} onMouseLeave={this.hideEducation3.bind(this)} id="Education3" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation3} position="right" arrow="center" parent="#Education3">
								<div className="popup-pad">
									<div className="sm-text">School Start Date</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{educ.enddate ? (
						<div>{educ.enddate}</div>
					) : (
						<div className="add-text-blue">Add End Date
							<div onMouseEnter={this.showEducation6.bind(this)} onMouseLeave={this.hideEducation6.bind(this)} id="Education6" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation6} position="right" arrow="center" parent="#Education6">
								<div className="popup-pad">
									<div className="sm-text">School End Date</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{educ.grade ? (
						<div>{educ.grade}</div>
					) : (
						<div className="add-text-blue">Add Grade
							<div onMouseEnter={this.showEducation4.bind(this)} onMouseLeave={this.hideEducation4.bind(this)} id="Education4" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation4} position="right" arrow="center" parent="#Education4">
								<div className="popup-pad">
									<div className="sm-text">Grade</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{educ.activities ? (
						<div>{educ.activities}</div>
					) : (
						<div className="add-text-blue">Add Activities and Societies
							<div onMouseEnter={this.showEducation5.bind(this)} onMouseLeave={this.hideEducation5.bind(this)} id="Education5" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation5} position="right" arrow="center" parent="#Education5">
								<div className="popup-pad">
									<div className="sm-text">Activities and Societies</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>
					)}
				</div>
			)
		});
		return (
			<div className="education-box">
				<div className="title-text-gray" onClick={this.deleteEducation.bind(this)}>Education<div className="trash"></div></div>
					<div className="box-info">
						{educations}
					</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.education.show()}>Add education</div>
				</div>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="education" title="Add Education">
					<div className="form-title">School</div>
					<input className="form-input" type="text" onChange={this.saveSchool}/>
					<div className="form-title">Degree</div>
					<input className="form-input" type="text" onChange={this.saveDegree}/>
					<div className="form-title">Field of study</div>
					<input className="form-input" type="text" onChange={this.saveField}/>
					<div className="form-title">Grade</div>
					<input className="form-input" type="text" onChange={this.saveGrade}/>
					<div className="form-title">Activities and societies</div>
					<div>
						<textarea rows="6" cols="127" onChange={this.saveActivities}/>
					</div>
					<div className="form-title">From Year</div>
					<input className="form-input" type="date" id="myMonth" onChange={this.saveBeg}/>
					<div className="form-title">To Year (or expected)</div>
					<input className="form-input" type="date" id="myMonth" onChange={this.saveEnd}/>
					<divc className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewEducation(); this.refs.education.hide()}}>Save</button>
					</divc>
				</SkyLight>
			</div>
		)
	}
}

const mapDispatchToProps = {
  addEducation: addEducation,
	deleteEducation: deleteEducation
};

function mapStateToProps(state) {
	return {
		educationArray: state.profile.educationArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEducation);
