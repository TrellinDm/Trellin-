import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class ExperienceForm extends Component {
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
			{/*Experience Section*/}
			<div className="icon-box">
				<div className="icon6"></div>
			</div>
			<div className="mini-info-box">
				<div className="section-title-text">Experience</div>
				<div className="gray-text">People could be looking for someone with your experience.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.experience.show()}><div className="bottom-add-text-section">Add experience</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="experience" title="Add Experience">
				<div>Title</div>
				<input type="text"/>
				<div>Location</div>
				<input type="text"/>
				<div>Company</div>
				<input type="text"/>
				<div>Activities and societies</div>
				<div>Time period</div>
				<div>From Year</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>To Year (or expected)</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>
					<label className="switch">
						<input type="checkbox" />
						<div className="slider round"></div>
					</label>
					I currently work here
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

