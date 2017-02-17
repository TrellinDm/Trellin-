import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class CertificationsForm extends Component {
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
			{/*Certification Section*/}
			<div className="icon-box">
				<div className="icon3"></div>
			</div>
			<div className="mini-info-box">
				
				{/*Certification popup form*/}
				<div className="section-title-text">Certifications</div>
				<div className="gray-text">Members with a certification on their profile get double the profile views.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.certification.show()}><div className="bottom-add-text-section">Add certifications</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="certification" title="Add Certification">
				<div>Certification name</div>
				<input type="text"/>
				<div>Certification authority</div>
				<input type="text"/>
				<div>License number</div>
				<input type="text"/>
				<div>Time period</div>
				<div>From</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>To</div>
				<input type="month" id="myMonth" value="2014-05" />
				<div>
					<label className="switch">
						<input type="checkbox" />
						<div className="slider round"></div>
					</label>
					This certification does not expire
				</div>
				<div>Certification Url</div>
				<input type="text"/>
				<div>
					<button className="button-dark-blue">Save</button>
				</div>
			</SkyLight>
		</div>
		
		)
	}
}

