import React, { Component } from 'react';

export default class ProfileCertifications extends Component {
	render () {
		return (
			<div className="certifications-box">
				<div className="title-text-gray">Certifications</div>
				<div className="box-info">Your experience goes here....
					<div className="add-text-blue">Add Time Period</div>
					<div className="add-text-blue" >Add Location</div>
					<div className="add-text-blue" >Add Description</div>
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Add certificate</div>
				</div>
			</div>
			
		)
	}
}

