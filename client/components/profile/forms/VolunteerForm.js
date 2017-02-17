import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class VolunteerForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		}
	}
	
	render() {
		
		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			padding: '30px',
		};
		
		return (
			
		<div className="add-section">
			{/*Volunteering Experience Section*/}
			<div className="icon-box">
				<div className="icon8"></div>
			</div>
			<div className="mini-info-box">
				
				{/*Volunteering Experience popup form*/}
				<div className="section-title-text">Volunteering Experience</div>
				<div className="gray-text">1 in 5 managers hired someone because of their volunteer experiences.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.volunteer.show()}><div className="bottom-add-text-section">Add volunteering experience</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="volunteer" title="Add Volunteering Experience">
				<div>Organization</div>
				<input type="text"/>
				<div>Role</div>
				<input type="text"/>
				<div>Cause</div>
				<input type="text"/>
				<div>Date</div>
				<div>From Year</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>To Year (or expected)</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>
					<label className="switch">
						<input type="checkbox" />
						<div className="slider round"></div>
					</label>
					I currently volunteer here
				</div>
				<div>Description</div>
				<div>
					<textarea rows="6" cols="100" />
				</div>
				<div>
					<button className="button-dark-blue">Save</button>
				</div>
			</SkyLight>
		</div>
		
		)
	}
}

