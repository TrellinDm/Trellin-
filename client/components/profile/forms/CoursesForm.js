import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class CoursesForm extends Component {
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
			{/*Courses Section*/}
			<div className="icon-box">
				<div className="icon10"></div>
			</div>
			<div className="mini-info-box">
				
				{/*Courses popup form*/}
				<div className="section-title-text">Courses</div>
				<div className="gray-text">Showing more information about your background will help you get found for more opportunities.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.courses.show()}><div className="bottom-add-text-section">Add courses</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="courses" title="Add Courses">
				<div>Course name</div>
				<input type="text"/>
				<div>Number</div>
				<input type="text"/>
				<div>Associcated with</div>
				<input type="text"/>
				<div>
					<button className="button-dark-blue">Save</button>
				</div>
			</SkyLight>
		</div>
		
		)
	}
}

