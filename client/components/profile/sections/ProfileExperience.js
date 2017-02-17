import React, { Component } from 'react'
import ToolTip from 'react-portal-tooltip'

class ProfileExperience extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isTooltipActive: false,
			isTooltipActive1: false,
			isTooltipActive2: false
		};
	}
	
	showTooltip() {
		this.setState({isTooltipActive: true})
	}
	hideTooltip() {
		this.setState({isTooltipActive: false})
	}
	
	showTooltip1() {
		this.setState({isTooltipActive1: true})
	}
	hideTooltip1() {
		this.setState({isTooltipActive1: false})
	}
	
	showTooltip2() {
		this.setState({isTooltipActive2: true})
	}
	hideTooltip2() {
		this.setState({isTooltipActive2: false})
	}
	
	
	
	render () {
		return (
			<div className="experience-box">
				<div className="title-text-gray">Experience</div>
				<div className="box-info">
					<div className="user-data">Users experience goes here...</div>
					
					<div className="add-text-blue">Add Time Period
						<div onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)} id="text" className="question-icon"></div>
						<ToolTip active={this.state.isTooltipActive} position="right" arrow="center" parent="#text">
							<div className="popup-pad">
								<div className="sm-text">Time Period</div>
								<div className="profile-text">Show how your career has progressed over time</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue" >Add Location
						<div onMouseEnter={this.showTooltip1.bind(this)} onMouseLeave={this.hideTooltip1.bind(this)} id="text1" className="question-icon"></div>
						<ToolTip active={this.state.isTooltipActive1} position="right" arrow="center" parent="#text1">
							<div className="popup-pad">
								<div className="sm-text">Location</div>
								<div className="profile-text">Members with a location get 3 times more profile views</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue" >Add Description
						<div onMouseEnter={this.showTooltip2.bind(this)} onMouseLeave={this.hideTooltip2.bind(this)} id="text2" className="question-icon"></div>
						<ToolTip active={this.state.isTooltipActive2} position="right" arrow="center" parent="#text2">
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


