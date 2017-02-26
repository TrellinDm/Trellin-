import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addCourse} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class CoursesForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			course_no: '',
			associated: ''
		}
		this.addNewCourse = this.addNewCourse.bind(this);
		this.saveName = this.saveName.bind(this);
		this.saveCourseNo = this.saveCourseNo.bind(this);
		this.saveAssociated = this.saveAssociated.bind(this);
	}

	addNewCourse() {
		var course = this.state;
		course.id = this.props.user.id;
		axios.post('/setCourses', course).then(() => {
			this.props.addCourse(this.state);
		});
	}

	saveName(e) {
		this.setState({ name: e.target.value });
	}

	saveCourseNo(e) {
		this.setState({ course_no: e.target.value });
	}

	saveAssociated(e) {
		this.setState({ associated: e.target.value });
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

		return (

		<div className="add-section">
			{/*Courses Section*/}
			<div className="icon-box">
				<div className="icon10"></div>
			</div>
			<div className="mini-info-box">

				{/*Courses popup form*/}
				<div className="section-title-text">Courses</div>
				<div className="gray-text">Showing more information about your background will help you get found for more opportunities.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.courses.show()}><div className="bottom-add-text-section">Add courses</div></button>
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
  addCourse: addCourse
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesForm);
