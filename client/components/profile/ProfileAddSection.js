import React, { Component } from 'react';

export default class ProfileAddSection extends Component {
	render () {
		return (
			<div className="add-section-box">
				<div className="add-section">
					<div className="section-info"></div>
					<div className="bottom-add">
						<div className="bottom-add-text">Add summary</div>
					</div>
				</div>
				<div className="add-section">
					<div className="section-info"></div>
					<div className="bottom-add">
						<div className="bottom-add-text">Add language</div>
					</div>
				</div>
			</div>
		)
	}
}


