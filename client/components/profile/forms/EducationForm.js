import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addEducation} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class EducationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			school: '',
			degree: '',
			field: '',
			grade: '',
			activities: '',
			begdate: null,
			enddate: null
		}
		this.addNewEducation = this.addNewEducation.bind(this);
		this.saveSchool = this.saveSchool.bind(this);
		this.saveDegree = this.saveDegree.bind(this);
		this.saveField = this.saveField.bind(this);
		this.saveGrade = this.saveGrade.bind(this);
		this.saveActivities = this.saveActivities.bind(this);
		this.saveBeg = this.saveBeg.bind(this);
		this.saveEnd = this.saveEnd.bind(this);
	}

	addNewEducation() {
		var education = this.state;
		education.id = this.props.user.id;
		axios.post('/setEducation', education).then(() => {
			this.props.addEducation(this.state);
		});
	}

	saveSchool(e) {
		this.setState({ school: e.target.value });
	}

	saveDegree(e) {
		this.setState({ degree: e.target.value });
	}

	saveField(e) {
		this.setState({ field: e.target.value });
	}

	saveGrade(e) {
		this.setState({ grade: e.target.value });
	}

	saveActivities(e) {
		this.setState({ activities: e.target.value });
	}

	saveBeg(e) {
		this.setState({ begdate: e.target.value });
	}

	saveEnd(e) {
		this.setState({ enddate: e.target.value });
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
			{/*Education Section*/}
			<div className="icon-box">
				<div className="icon4"></div>
			</div>
			<div className="mini-info-box">
				<div className="section-title-text">Education</div>
				<div className="gray-text">Members with a school on their profile get 7 times more profile views.</div>
			</div>
			<div className="section-info"></div>

			{/*LEducation popup form*/}
			<button className="bottom-add" onClick={() => this.refs.education.show()}><div className="bottom-add-text-section">Add education</div></button>
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
  addEducation: addEducation
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationForm);
