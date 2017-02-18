import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';


class ProfilePersonal extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activePersonal1: false,
			activePersonal2: false
		};
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
	
	
	render() {
		return (
			
			<div className="education-box">
				<div className="title-text-gray">Personal Details<div className="gray-pencil"></div></div>
				<div className="box-info">User's education goes here....
					
					
					<div className="add-text-blue">Add Birthday
						<div onMouseEnter={this.showPersonal1.bind(this)} onMouseLeave={this.hidePersonal1.bind(this)} id="Personal1" className="question-icon"></div>
						<ToolTip active={this.state.activePersonal1} position="right" arrow="center" parent="#Personal1">
							<div className="popup-pad">
								<div className="sm-text">Birthday</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Marital Status
						<div onMouseEnter={this.showPersonal2.bind(this)} onMouseLeave={this.hidePersonal2.bind(this)} id="Personal2" className="question-icon"></div>
						<ToolTip active={this.state.activePersonal2} position="right" arrow="center" parent="#Personal2">
							<div className="popup-pad">
								<div className="sm-text">Marital Status</div>
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

export default ProfilePersonal;