import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class LanguageForm extends Component {
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
				{/*Language Section*/}
				<div className="icon-box">
					<div className="icon1"></div>
				</div>
				<div className="mini-info-box">
					<div className="section-title-text">Language</div>
					<div className="gray-text">This can help you find a new job, get a promotion, or transfer overseas.</div>
				</div>
				<div className="section-info"></div>
				
				{/*Language popup form*/}
				<button className="bottom-add" onClick={() => this.refs.language.show()}><div className="bottom-add-text-section">Add language</div></button>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="language" title="Add Language">
					<div>language</div>
					<input type="text"/>
					<div>proficiency</div>
					<input type="text"/>
					<div>
						<label className="switch">
							<input type="checkbox" />
							<div className="slider round"></div>
						</label>
						Do not update my network
						<div>Your connections will not see this change in your feed or email</div>
					</div>
					<div>
						<button className="button-dark-blue">Save</button>
					</div>
				</SkyLight>
			</div>
		
		)
	}
}

