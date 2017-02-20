import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';

class ProfileEducation extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeEducation1: false,
			activeEducation2: false,
			activeEducation3: false,
			activeEducation4: false,
			activeEducation5: false,
			activeEducation6: false
		};
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


	render () {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			padding: '30px',
		};

		return (
			<div className="education-box">
				<div className="title-text-gray">Education<div className="gray-pencil"></div></div>
					<div className="box-info">User's education goes here....

						<div className="add-text-blue">Add Degree
							<div onMouseEnter={this.showEducation1.bind(this)} onMouseLeave={this.hideEducation1.bind(this)} id="Education1" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation1} position="right" arrow="center" parent="#Education1">
								<div className="popup-pad">
									<div className="sm-text">School Degree</div>
									<div className="profile-text">Adding your degree helps us make better recommendations for you.</div>
								</div>
							</ToolTip>
						</div>

						<div className="add-text-blue">Add Field of Study
							<div onMouseEnter={this.showEducation2.bind(this)} onMouseLeave={this.hideEducation2.bind(this)} id="Education2" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation2} position="right" arrow="center" parent="#Education2">
								<div className="popup-pad">
									<div className="sm-text">Field of Study</div>
									<div className="profile-text">Adding your area of expertise helps you be found for the right opportunities.</div>
								</div>
							</ToolTip>
						</div>

						<div className="add-text-blue">Add Dates Attended
							<div onMouseEnter={this.showEducation3.bind(this)} onMouseLeave={this.hideEducation3.bind(this)} id="Education3" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation3} position="right" arrow="center" parent="#Education3">
								<div className="popup-pad">
									<div className="sm-text">School Dates Attended</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>

						<div className="add-text-blue">Add Grade
							<div onMouseEnter={this.showEducation4.bind(this)} onMouseLeave={this.hideEducation4.bind(this)} id="Education4" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation4} position="right" arrow="center" parent="#Education4">
								<div className="popup-pad">
									<div className="sm-text">Grade</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>

						<div className="add-text-blue">Add Activities and Societies
							<div onMouseEnter={this.showEducation5.bind(this)} onMouseLeave={this.hideEducation5.bind(this)} id="Education5" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation5} position="right" arrow="center" parent="#Education5">
								<div className="popup-pad">
									<div className="sm-text">Activities and Societies</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>

						<div className="add-text-blue">Add Description
							<div onMouseEnter={this.showEducation6.bind(this)} onMouseLeave={this.hideEducation6.bind(this)} id="Education6" className="question-icon"></div>
							<ToolTip active={this.state.activeEducation6} position="right" arrow="center" parent="#Education6">
								<div className="popup-pad">
									<div className="sm-text">Education</div>
									<div className="profile-text">See what your classmates are up to.</div>
								</div>
							</ToolTip>
						</div>

					</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Edit education</div>
				</div>
			</div>
		)
	}
}

export default ProfileEducation;
