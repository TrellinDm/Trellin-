import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';


class ProfileAwards extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeAward1: false,
			activeAward2: false,
			activeAward3: false,
			activeAward4: false
		};
	}

	showAward1() {
		this.setState({activeAward1: true})
	}
	hideAward1() {
		this.setState({activeAward1: false})
	}

	showAward2() {
		this.setState({activeAward2: true})
	}
	hideAward2() {
		this.setState({activeAward2: false})
	}

	showAward3() {
		this.setState({activeAward3: true})
	}
	hideAward3() {
		this.setState({activeAward3: false})
	}

	showAward4() {
		this.setState({activeAward4: true})
	}
	hideAward4() {
		this.setState({activeAward4: false})
	}


	render() {
		return (

			<div className="education-box">
				<div className="title-text-gray">Honors & Awards<div className="gray-pencil"></div></div>

				<div className="box-info">User's courses go here....


					<div className="add-text-blue">Add Title
						<div onMouseEnter={this.showAward1.bind(this)} onMouseLeave={this.hideAward1.bind(this)} id="Award1" className="question-icon"></div>
						<ToolTip active={this.state.activeAward1} position="right" arrow="center" parent="#Award1">
							<div className="popup-pad">
								<div className="sm-text">Title</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

					<div className="add-text-blue">Add Associated with
						<div onMouseEnter={this.showAward2.bind(this)} onMouseLeave={this.hideAward2.bind(this)} id="Award2" className="question-icon"></div>
						<ToolTip active={this.state.activeAward2} position="right" arrow="center" parent="#Award2">
							<div className="popup-pad">
								<div className="sm-text">Associated with</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

					<div className="add-text-blue">Add Issuer
						<div onMouseEnter={this.showAward3.bind(this)} onMouseLeave={this.hideAward3.bind(this)} id="Award3" className="question-icon"></div>
						<ToolTip active={this.state.activeAward3} position="right" arrow="center" parent="#Award3">
							<div className="popup-pad">
								<div className="sm-text">Issuer</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

					<div className="add-text-blue">Add Description
						<div onMouseEnter={this.showAward4.bind(this)} onMouseLeave={this.hideAward4.bind(this)} id="Award4" className="question-icon"></div>
						<ToolTip active={this.state.activeAward4} position="right" arrow="center" parent="#Award4">
							<div className="popup-pad">
								<div className="sm-text">Description</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>

				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Add award</div>
				</div>
			</div>
		)
	}
}

export default ProfileAwards
