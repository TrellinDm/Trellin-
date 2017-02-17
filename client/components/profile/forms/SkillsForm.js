import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class SkillsForm extends Component {
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
			{/*Skills Section*/}
			<div className="icon-box">
				<div className="icon5"></div>
			</div>
			<div className="mini-info-box">
				<div className="section-title-text">Skills</div>
				<div className="gray-text">Members with skills on their profile get 4 times as many profile views.</div>
			</div>
			<div className="section-info"></div>
			
			{/*Skills popup form*/}
			<button className="bottom-add" onClick={() => this.refs.skills.show()}><div className="bottom-add-text-section">Add skills</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="skills" title="Add Skills">
				<div>Skills</div>
				<input type="text"/>
				<div>
					<button className="button-dark-blue">Save</button>
				</div>
			</SkyLight>
		</div>
		
		)
	}
}

