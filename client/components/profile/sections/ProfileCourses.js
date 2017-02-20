import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';


class ProfileCourses extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeCourse1: false,
			activeCourse2: false,
			activeCourse3: false
		};
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


	render() {
		return (

			<div className="education-box">
				<div className="title-text-gray">Courses<div className="gray-pencil"></div></div>
				<div className="box-info">User's courses go here....

					<div className="add-text-blue">Add Course Name
						<div onMouseEnter={this.showCourse1.bind(this)} onMouseLeave={this.hideCourse1.bind(this)} id="course1" className="question-icon"></div>
						<ToolTip active={this.state.activeCourse1} position="right" arrow="center" parent="#course1">
							<div className="popup-pad">
								<div className="sm-text">Course Name</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

					<div className="add-text-blue">Add Course Number
						<div onMouseEnter={this.showCourse2.bind(this)} onMouseLeave={this.hideCourse2.bind(this)} id="course2" className="question-icon"></div>
						<ToolTip active={this.state.activeCourse2} position="right" arrow="center" parent="#course2">
							<div className="popup-pad">
								<div className="sm-text">Course Number</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

					<div className="add-text-blue">Add Associated with
						<div onMouseEnter={this.showCourse3.bind(this)} onMouseLeave={this.hideCourse3.bind(this)} id="course3" className="question-icon"></div>
						<ToolTip active={this.state.activeCourse3} position="right" arrow="center" parent="#course3">
							<div className="popup-pad">
								<div className="sm-text">Associated with</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Edit course</div>
				</div>
			</div>
		)
	}
}

export default ProfileCourses;
