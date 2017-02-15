import React, { Component } from 'react';

export default class ProfileFollowing extends Component {
	render () {
		return (
			<div className="following-box">
				<div className="title-text-gray">Following</div>
				<div className="box-info">Your experience goes here....
					<div className="add-text-blue">Add Time Period</div>
					<div className="add-text-blue" >Add Location</div>
					<div className="add-text-blue" >Add Description</div>
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text">Discover more
					</div>
				</div>
			</div>
		)
	}
}

