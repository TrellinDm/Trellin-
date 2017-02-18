import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';


class ProfileVolunteer extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activeVolunteer1: false,
			activeVolunteer2: false,
			activeVolunteer3: false,
			activeVolunteer4: false,
			activeVolunteer5: false
		};
	}
	
	showVolunteer1() {this.setState({activeVolunteer1: true})}
	hideVolunteer1() {this.setState({activeVolunteer1: false})}
	
	showVolunteer2() {this.setState({activeVolunteer2: true})}
	hideVolunteer2() {this.setState({activeVolunteer2: false})}
	
	showVolunteer3() {this.setState({activeVolunteer3: true})}
	hideVolunteer3() {this.setState({activeVolunteer3: false})}
	
	showVolunteer4() {this.setState({activeVolunteer4: true})}
	hideVolunteer4() {this.setState({activeVolunteer4: false})}
	
	showVolunteer5() {this.setState({activeVolunteer5: true})}
	hideVolunteer5() {this.setState({activeVolunteer5: false})}
	
	
	render() {
		return (
			<div className="education-box">
				<div className="title-text-gray">Volunteering Experience<div className="gray-pencil"></div></div>
				<div className="box-info">User's education goes here....
					
					<div className="add-text-blue">Add Organization
						<div onMouseEnter={this.showVolunteer1.bind(this)} onMouseLeave={this.hideVolunteer1.bind(this)} id="Volunteer1" className="question-icon"></div>
						<ToolTip active={this.state.activeVolunteer1} position="right" arrow="center" parent="#Volunteer1">
							<div className="popup-pad">
								<div className="sm-text">Organization</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Role
						<div onMouseEnter={this.showVolunteer2.bind(this)} onMouseLeave={this.hideVolunteer2.bind(this)} id="Volunteer2" className="question-icon"></div>
						<ToolTip active={this.state.activeVolunteer2} position="right" arrow="center" parent="#Volunteer2">
							<div className="popup-pad">
								<div className="sm-text">Role</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Cause
						<div onMouseEnter={this.showVolunteer4.bind(this)} onMouseLeave={this.hideVolunteer4.bind(this)} id="Volunteer4" className="question-icon"></div>
						<ToolTip active={this.state.activeVolunteer4} position="right" arrow="center" parent="#Volunteer4">
							<div className="popup-pad">
								<div className="sm-text">Cause</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Date
						<div onMouseEnter={this.showVolunteer3.bind(this)} onMouseLeave={this.hideVolunteer3.bind(this)} id="Volunteer3" className="question-icon"></div>
						<ToolTip active={this.state.activeVolunteer3} position="right" arrow="center" parent="#Volunteer3">
							<div className="popup-pad">
								<div className="sm-text">Date</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Description
						<div onMouseEnter={this.showVolunteer5.bind(this)} onMouseLeave={this.hideVolunteer5.bind(this)} id="Volunteer5" className="question-icon"></div>
						<ToolTip active={this.state.activeVolunteer5} position="right" arrow="center" parent="#Volunteer5">
							<div className="popup-pad">
								<div className="sm-text">Description</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Add education
					</div>
				</div>
			</div>
		)
	}
}

export default ProfileVolunteer;