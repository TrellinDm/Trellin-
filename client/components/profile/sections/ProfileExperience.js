import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';


class ProfileExperience extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activeExperience1: false,
			activeExperience2: false,
			activeExperience3: false
		};
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
	
	render () {
		return (
			<div className="experience-box">
				<div className="title-text-gray">Experience<div className="gray-pencil"></div></div>
				<div className="box-info">
					<div className="user-data">Users experience goes here...</div>
					
					<div className="add-text-blue">Add Time Period
						<div onMouseEnter={this.showExperience1.bind(this)} onMouseLeave={this.hideExperience1.bind(this)} id="Experience1" className="question-icon"></div>
						<ToolTip active={this.state.activeExperience1} position="right" arrow="center" parent="#Experience1">
							<div className="popup-pad">
								<div className="sm-text">Time Period</div>
								<div className="profile-text">Show how your career has progressed over time</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Location
						<div onMouseEnter={this.showExperience2.bind(this)} onMouseLeave={this.hideExperience2.bind(this)} id="Experience2" className="question-icon"></div>
						<ToolTip active={this.state.activeExperience2} position="right" arrow="center" parent="#Experience2">
							<div className="popup-pad">
								<div className="sm-text">Location</div>
								<div className="profile-text">Members with a location get 3 times more profile views</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Description
						<div onMouseEnter={this.showExperience3.bind(this)} onMouseLeave={this.hideExperience3.bind(this)} id="Experience3" className="question-icon"></div>
						<ToolTip active={this.state.activeExperience3} position="right" arrow="center" parent="#Experience3">
							<div className="popup-pad">
								<div className="sm-text">Description</div>
								<div className="profile-text">Recruiters are more likely to reach out to members with a job description.</div>
							</div>
						</ToolTip>
					</div>
					
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Add position</div>
				</div>
			</div>
		)
	}
}

export default ProfileExperience;


