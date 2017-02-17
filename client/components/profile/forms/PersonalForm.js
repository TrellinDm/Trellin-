import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class PersonalForm extends Component {
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
			{/*Personal Details Section*/}
			<div className="icon-box">
				<div className="icon7"></div>
			</div>
			<div className="mini-info-box">
				
				{/*Personal Details popup form*/}
				<div className="section-title-text">Personal Details</div>
				<div className="gray-text">You can control who will see this information.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.details.show()}><div className="bottom-add-text-section">Add personal details</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="details" title="Add Personal Details">
				<div>Birthday</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>Marital status</div>
				<select name="status">
					<option value="single">Single</option>
					<option value="married">Married</option>
					<option value="divorced">Divorced</option>
					<option value="widowed">Widowed</option>
				</select>
				<div>
					<button className="button-dark-blue">Save</button>
				</div>
			</SkyLight>
		</div>
			
		)
	}
}
