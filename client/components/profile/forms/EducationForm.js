import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class EducationForm extends Component {
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
			{/*Education Section*/}
			<div className="icon-box">
				<div className="icon4"></div>
			</div>
			<div className="mini-info-box">
				<div className="section-title-text">Education</div>
				<div className="gray-text">Members with a school on their profile get 7 times more profile views.</div>
			</div>
			<div className="section-info"></div>
			
			{/*LEducation popup form*/}
			<button className="bottom-add" onClick={() => this.refs.education.show()}><div className="bottom-add-text-section">Add education</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="education" title="Add Education">
				<div>School</div>
				<input type="text"/>
				<div>Degree</div>
				<input type="text"/>
				<div>Field of study</div>
				<input type="text"/>
				<div>Grade</div>
				<input type="text"/>
				<div>Activities and societies</div>
				<div>
					<textarea rows="6" cols="100" />
				</div>
				<div>From Year</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>To Year (or expected)</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>
					<button className="button-dark-blue">Save</button>
				</div>
			</SkyLight>
		</div>
		)
	}
}

