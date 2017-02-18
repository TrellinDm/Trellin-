import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';


class ProfileCertifications extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activeCertification1: false,
			activeCertification2: false,
			activeCertification3: false,
			activeCertification4: false,
			activeCertification5: false
		};
	}
	
	showCertification1() {
		this.setState({activeCertification1: true})
	}
	hideCertification1() {
		this.setState({activeCertification1: false})
	}
	
	showCertification2() {
		this.setState({activeCertification2: true})
	}
	hideCertification2() {
		this.setState({activeCertification2: false})
	}
	
	showCertification3() {
		this.setState({activeCertification3: true})
	}
	hideCertification3() {
		this.setState({activeCertification3: false})
	}
	
	showCertification4() {
		this.setState({activeCertification4: true})
	}
	hideCertification4() {
		this.setState({activeCertification4: false})
	}
	
	showCertification5() {
		this.setState({activeCertification5: true})
	}
	hideCertification5() {
		this.setState({activeCertification5: false})
	}
	
	render () {
		return (
			<div className="certifications-box">
				<div className="title-text-gray">Certifications<div className="gray-pencil"></div></div>
				<div className="box-info">User's experience goes here....
					
					<div className="add-text-blue">Add Certification Name
						<div onMouseEnter={this.showCertification1.bind(this)} onMouseLeave={this.hideCertification1.bind(this)} id="certification1" className="question-icon"></div>
						<ToolTip active={this.state.activeCertification1} position="right" arrow="center" parent="#certification1">
							<div className="popup-pad">
								<div className="sm-text">Certification Name</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Certification Authority
						<div onMouseEnter={this.showCertification2.bind(this)} onMouseLeave={this.hideCertification2.bind(this)} id="certification2" className="question-icon"></div>
						<ToolTip active={this.state.activeCertification2} position="right" arrow="center" parent="#certification2">
							<div className="popup-pad">
								<div className="sm-text">Certification Authority</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add License Number
						<div onMouseEnter={this.showCertification3.bind(this)} onMouseLeave={this.hideCertification3.bind(this)} id="certification3" className="question-icon"></div>
						<ToolTip active={this.state.activeCertification3} position="right" arrow="center" parent="#certification3">
							<div className="popup-pad">
								<div className="sm-text">License Number</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Certification URL
						<div onMouseEnter={this.showCertification4.bind(this)} onMouseLeave={this.hideCertification4.bind(this)} id="certification4" className="question-icon"></div>
						<ToolTip active={this.state.activeCertification4} position="right" arrow="center" parent="#certification4">
							<div className="popup-pad">
								<div className="sm-text">Certification URL</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
					
					<div className="add-text-blue">Add Date
						<div onMouseEnter={this.showCertification5.bind(this)} onMouseLeave={this.hideCertification5.bind(this)} id="certification5" className="question-icon"></div>
						<ToolTip active={this.state.activeCertification5} position="right" arrow="center" parent="#certification5">
							<div className="popup-pad">
								<div className="sm-text">Date</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
				</div>
				
				<div className="bottom-add">
					<div className="bottom-add-text">Add certificate</div>
				</div>
			</div>
			
		)
	}
}

export default ProfileCertifications;