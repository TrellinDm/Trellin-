import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import {addCourses} from '../../../reducers/profileReducer';
import {deleteCourses} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class ProfileCourses extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeCourse1: false,
			activeCourse2: false,
			activeCourse3: false,
			addCrse : {
				name: '',
				course_no: '',
				associated: ''
			}
		};
		this.addNewCourse = this.addNewCourse.bind(this);
		this.saveName = this.saveName.bind(this);
		this.saveCourseNo = this.saveCourseNo.bind(this);
		this.saveAssociated = this.saveAssociated.bind(this);
	}

	showCourse1() {
		this.setState({activeCourse1: true})
	}
	hideCourse1() {
		this.setState({activeCourse1: false})
	}

	showCourse2() {
		this.setState({activeCourse2: true})
	}
	hideCourse2() {
		this.setState({activeCourse2: false})
	}

	showCourse3() {
		this.setState({activeCourse3: true})
	}
	hideCourse3() {
		this.setState({activeCourse3: false})
	}

	addNewCourse() {
		var course = this.state.addCrse;
		course.id = this.props.user.id;
		axios.post('/setCourses', course).then(() => {
			this.props.addCourses(this.state.addCrse);
		});
	}

	saveName(e) {
		this.setState({
			addCrse: {
				name: e.target.value,
				course_no: this.state.addCrse.course_no,
				associated: this.state.addCrse.associated
			}
		});
	}

	saveCourseNo(e) {
		this.setState({
			addCrse: {
				name: this.state.addCrse.name,
				course_no: e.target.value,
				associated: this.state.addCrse.associated
			}
		});
	}

	saveAssociated(e) {
		this.setState({
			addCrse: {
				name: this.state.addCrse.name,
				course_no: this.state.addCrse.course_no,
				associated: e.target.value
			}
		});
	}

	deleteCourses() {
		axios.delete('/delete/courses/' + this.props.user.id).then((res) => {
			this.props.deleteCourses();
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
		var coursesArray = [];
		if (this.props.conn.showConn) {
			if (this.props.conn.coursesArray) {
				coursesArray = this.props.conn.coursesArray;
			} else {
				coursesArray = this.props.coursesArray;
			}
		} else {
			coursesArray = this.props.coursesArray;
		}
		var courses = coursesArray.map((crse, i) => {
			return (
				<div key={i} className="awards-div">
					{crse.name ? (
						<div>{crse.name}</div>
					) : (
						<div>
							{this.props.conn.showConn ? null : (
								<div className="add-text-blue">Add Course Name
									<div onMouseEnter={this.showCourse1.bind(this)} onMouseLeave={this.hideCourse1.bind(this)} id="course1" className="question-icon"></div>
									<ToolTip active={this.state.activeCourse1} position="right" arrow="center" parent="#course1">
										<div className="popup-pad">
											<div className="sm-text">Course Name</div>
											<div className="profile-text">Text here...</div>
										</div>
									</ToolTip>
								</div>
							)}
						</div>
					)}
					{crse.course_no ? (
						<div>{crse.course_no}</div>
					) : (
						<div>
							{this.props.conn.showConn ? null : (
								<div className="add-text-blue">Add Course Number
									<div onMouseEnter={this.showCourse2.bind(this)} onMouseLeave={this.hideCourse2.bind(this)} id="course2" className="question-icon"></div>
									<ToolTip active={this.state.activeCourse2} position="right" arrow="center" parent="#course2">
										<div className="popup-pad">
											<div className="sm-text">Course Number</div>
											<div className="profile-text">Text here...</div>
										</div>
									</ToolTip>
								</div>
							)}
						</div>
					)}
					{crse.associated ? (
						<div>{crse.associated}</div>
					) : (
						<div>
							{this.props.conn.showConn ? null : (
								<div className="add-text-blue">Add Associated with
									<div onMouseEnter={this.showCourse3.bind(this)} onMouseLeave={this.hideCourse3.bind(this)} id="course3" className="question-icon"></div>
									<ToolTip active={this.state.activeCourse3} position="right" arrow="center" parent="#course3">
										<div className="popup-pad">
											<div className="sm-text">Associated with</div>
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
				<div className="title-text-gray">Courses
					{this.props.conn.showConn ? (null) : (
						<div className="trash" onClick={this.deleteCourses.bind(this)}></div>
					)}
				</div>
				<div className="box-info">
					{courses}
				</div>
				{this.props.conn.showConn ? (null) : (
					<div className="bottom-add">
						<div className="bottom-add-text" onClick={() => this.refs.courses.show()}>Add course</div>
					</div>
				)}
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="courses" title="Add Courses">
					<div className="form-title">Course name</div>
					<input className="form-input" type="text" onChange={this.saveName}/>
					<div className="form-title">Number</div>
					<input className="form-input" type="text" onChange={this.saveCourseNo}/>
					<div className="form-title">Associcated with</div>
					<input className="form-input" type="text" onChange={this.saveAssociated}/>
					<div className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewCourse(); this.refs.courses.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}

const mapDispatchToProps = {
  addCourses: addCourses,
	deleteCourses: deleteCourses
};

function mapStateToProps(state) {
	return {
		coursesArray: state.profile.coursesArray,
		user: state.user,
		conn: state.connProfile
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCourses);
