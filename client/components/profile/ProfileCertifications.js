import React, { Component } from 'react';

export default class ProfileCertifications extends Component {
	render () {
		return (
			<div className="certifications-box">
				<div className="title-text-gray">Certifications</div>
				<div className="box-info">Your experience goes here....
					<div className="add-text-blue">Add Certification Name
						<div id="tooltip">
							<a>
								<div className="question-icon">
									<div className="profile-text"><span>Time Period:</span> <span>Show how your career has progressed over time</span></div>
								</div>
							</a>
						</div>
					</div>
					<div className="add-text-blue" >Add License Number
						<div id="tooltip">
							<a>
								<div className="question-icon">
									<div className="profile-text"><span>Time Period:</span> <span>Show how your career has progressed over time</span></div>
								</div>
							</a>
						</div>
					</div>
					<div className="add-text-blue" >Add Certification URL
						<div id="tooltip">
							<a>
								<div className="question-icon">
									<div className="profile-text"><span>Time Period:</span> <span>Show how your career has progressed over time</span></div>
								</div>
							</a>
						</div>
					</div>
					<div className="add-text-blue" >Add Date
						<div id="tooltip">
							<a>
								<div className="question-icon">
									<div className="profile-text"><span>Time Period:</span> <span>Show how your career has progressed over time</span></div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Add certificate</div>
				</div>
			</div>
			
		)
	}
}

