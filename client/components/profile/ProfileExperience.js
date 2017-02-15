import React, { Component } from 'react';

export default class ProfileSidebar extends Component {
	render () {
		return (
			<div className="experience-box">
				<div className="title-text-gray">Experience</div>
				<div className="box-info">
					<div className="user-data">Users experience goes here...</div>
					<div className="add-text-blue">Add Time Period
						<div id="tooltip">
							<a>
								<div className="question-icon">
									<div className="profile-text"><span>Time Period:</span> <span>Show how your career has progressed over time</span></div>
								</div>
							</a>
						</div>
					</div>
					<div className="add-text-blue" >Add Location <div className="question-icon"></div></div>
					<div className="add-text-blue" >Add Description <div className="question-icon"></div></div>
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Add position</div>
				</div>
			</div>
		)
	}
}

