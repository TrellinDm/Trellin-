import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addExperience} from '../../../reducers/profileReducer';
import {deleteExperiences} from '../../../reducers/profileReducer';
import axios from 'axios';


class ProfileExperience extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeExperience1: false,
			activeExperience2: false,
			activeExperience3: false,
			activeExperience4: false,
			activeExperience5: false,
			activeExperience6: false,
			addExpr: {
				title: '',
				location: '',
				company: '',
				begdate: '',
				enddate: '',
				description: ''
			}
		};
		this.addNewExperience = this.addNewExperience.bind(this);
		this.saveTitle = this.saveTitle.bind(this);
		this.saveLocation = this.saveLocation.bind(this);
		this.saveCompany = this.saveCompany.bind(this);
		this.saveBeg = this.saveBeg.bind(this);
		this.saveEnd = this.saveEnd.bind(this);
		this.saveDescription = this.saveDescription.bind(this);
	}

	showExperience1() {
		this.setState({activeExperience1: true})
	}
	hideExperience1() {
		this.setState({activeExperience1: false})
	}

	showExperience2() {
		this.setState({activeExperience2: true})
	}
	hideExperience2() {
		this.setState({activeExperience2: false})
	}

	showExperience3() {
		this.setState({activeExperience3: true})
	}
	hideExperience3() {
		this.setState({activeExperience3: false})
	}

	showExperience4() {
		this.setState({activeExperience4: true})
	}
	hideExperience4() {
		this.setState({activeExperience4: false})
	}

	showExperience5() {
		this.setState({activeExperience5: true})
	}
	hideExperience5() {
		this.setState({activeExperience5: false})
	}

	showExperience6() {
		this.setState({activeExperience6: true})
	}
	hideExperience6() {
		this.setState({activeExperience6: false})
	}

	addNewExperience() {
		var experience = this.state.addExpr;
		experience.id = 1;
		axios.post('/setExperience', experience).then(() => {
			this.props.addExperience(this.state.addExpr);
		});
	}

	saveTitle(e) {
		this.setState({
			addExpr: {
				title: e.target.value,
				location: this.state.location,
				company: this.state.company,
				begdate: this.state.begdate,
				enddate: this.state.enddate,
				description: this.state.description
			}
		});
	}

	saveLocation(e) {
		this.setState({
			addExpr: {
				title: this.state.title,
				location: e.target.value,
				company: this.state.company,
				begdate: this.state.begdate,
				enddate: this.state.enddate,
				description: this.state.description
			}
		});
	}

	saveCompany(e) {
		this.setState({
			addExpr: {
				title: this.state.title,
				location: this.state.location,
				company: e.target.value,
				begdate: this.state.begdate,
				enddate: this.state.enddate,
				description: this.state.description
			}
		});
	}

	saveBeg(e) {
		this.setState({
			addExpr: {
				title: this.state.title,
				location: this.state.location,
				company: this.state.company,
				begdate: e.target.value,
				enddate: this.state.enddate,
				description: this.state.description
			}
		});
	}

	saveEnd(e) {
		this.setState({
			addExpr: {
				title: this.state.title,
				location: this.state.location,
				company: this.state.company,
				begdate: this.state.begdate,
				enddate: e.target.value,
				description: this.state.description
			}
		});
	}

	saveDescription(e) {
		this.setState({
			addExpr: {
				title: this.state.title,
				location: this.state.location,
				company: this.state.company,
				begdate: this.state.begdate,
				enddate: this.state.enddate,
				description: e.target.value
			}
		});
	}
	
	deleteExperiences() {
		axios.delete('/delete/experiences/' + 1).then((res) => {
			this.props.deleteExperiences();
		})
	}

	render () {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			paddingBottom: '70px',
			padding: '30px',
		};

		var experiences = this.props.experienceArray.map((expr, i) => {
			return (
				<div key={i} className="awards-div">
					{expr.title ? (
						<div>{expr.title}</div>
					) : (
						<div className="add-text-blue">Add Time Period
							<div onMouseEnter={this.showExperience1.bind(this)} onMouseLeave={this.hideExperience1.bind(this)} id="Experience1" className="question-icon"></div>
							<ToolTip active={this.state.activeExperience1} position="right" arrow="center" parent="#Experience1">
								<div className="popup-pad">
									<div className="sm-text">Time Period</div>
									<div className="profile-text">Show how your career has progressed over time</div>
								</div>
							</ToolTip>
						</div>
					)}
					{expr.location ? (
						<div>{expr.location}</div>
					) : (
						<div className="add-text-blue">Add Location
							<div onMouseEnter={this.showExperience2.bind(this)} onMouseLeave={this.hideExperience2.bind(this)} id="Experience2" className="question-icon"></div>
							<ToolTip active={this.state.activeExperience2} position="right" arrow="center" parent="#Experience2">
								<div className="popup-pad">
									<div className="sm-text">Location</div>
									<div className="profile-text">Members with a location get 3 times more profile views</div>
								</div>
							</ToolTip>
						</div>
					)}
					{expr.company ? (
						<div>{expr.company}</div>
					) : (
						<div className="add-text-blue">Add Company
							<div onMouseEnter={this.showExperience4.bind(this)} onMouseLeave={this.hideExperience4.bind(this)} id="Experience4" className="question-icon"></div>
							<ToolTip active={this.state.activeExperience4} position="right" arrow="center" parent="#Experience4">
								<div className="popup-pad">
									<div className="sm-text">Company</div>
									<div className="profile-text">Members with a company get 2 times more profile views</div>
								</div>
							</ToolTip>
						</div>
					)}
					{expr.begdate ? (
						<div>{expr.begdate}</div>
					) : (
						<div className="add-text-blue">Add Start Date
							<div onMouseEnter={this.showExperience5.bind(this)} onMouseLeave={this.hideExperience5.bind(this)} id="Experience5" className="question-icon"></div>
							<ToolTip active={this.state.activeExperience5} position="right" arrow="center" parent="#Experience5">
								<div className="popup-pad">
									<div className="sm-text">School Start Date</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{expr.enddate ? (
						<div>{expr.enddate}</div>
					) : (
						<div className="add-text-blue">Add End Date
							<div onMouseEnter={this.showExperience6.bind(this)} onMouseLeave={this.hideExperience6.bind(this)} id="Experience6" className="question-icon"></div>
							<ToolTip active={this.state.activeExperience6} position="right" arrow="center" parent="#Experience6">
								<div className="popup-pad">
									<div className="sm-text">School End Date</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>
					)}
					{expr.description ? (
						<div>{expr.description}</div>
					) : (
						<div className="add-text-blue">Add Description
							<div onMouseEnter={this.showExperience3.bind(this)} onMouseLeave={this.hideExperience3.bind(this)} id="Experience3" className="question-icon"></div>
							<ToolTip active={this.state.activeExperience3} position="right" arrow="center" parent="#Experience3">
								<div className="popup-pad">
									<div className="sm-text">Description</div>
									<div className="profile-text">Recruiters are more likely to reach out to members with a job description.</div>
								</div>
							</ToolTip>
						</div>
					)}
				</div>
			)
		});
		return (
			<div className="experience-box">
				<div className="title-text-gray" onClick={this.deleteExperiences.bind(this)}>Experience<div className="trash"></div></div>
				<div className="box-info">
					{experiences}
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.experience.show()}>Add position</div>
				</div>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="experience" title="Add Experience">
					<div className="form-title">Title</div>
					<input className="form-input" type="text" onChange={this.saveTitle}/>
					<div className="form-title">Location</div>
					<input className="form-input" type="text" onChange={this.saveLocation}/>
					<div className="form-title">Company</div>
					<input className="form-input" type="text" onChange={this.saveCompany}/>
					<div className="form-title">Time period</div>
					<div className="form-title">From Year</div>
					<input className="form-input" type="date" id="myMonth" onChange={this.saveBeg} />
					<div className="form-title">To Year (or expected)</div>
					<input className="form-input" type="date" id="myMonth" onChange={this.saveEnd} />
					<div>
						<label className="switch">
							<input className="form-input" type="checkbox" />
							<div className="slider round"></div>
						</label>
						I currently work here
					</div>
					<div className="form-title">Description</div>
					<div>
						<textarea rows="6" cols="127" onChange={this.saveDescription}/>
					</div>
					<div className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewExperience(); this.refs.experience.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}

const mapDispatchToProps = {
  addExperience: addExperience,
	deleteExperiences: deleteExperiences
};

function mapStateToProps(state) {
	return {
		experienceArray: state.profile.experienceArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileExperience);
