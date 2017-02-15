import React, { Component } from 'react';

export default class ProfileEducation extends Component {
	render () {
		return (
			<div className="education-box">
				<div className="title-text-gray">Education</div>
					<div className="box-info">Your experience goes here....
						<div className="add-text-blue">Add Time Period</div>
						<div className="add-text-blue" >Add Location</div>
						<div className="add-text-blue" >Add Description</div>
					</div>
					<div className="bottom-add">
						<div className="bottom-add-text">Add education
						</div>
				</div>
			</div>
		)
	}
}

