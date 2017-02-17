import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class AwardsForm extends Component {
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
			{/*Honors and Awards Section*/}
			<div className="icon-box">
				<div className="icon9"></div>
			</div>
			<div className="mini-info-box">
				
				{/*Honors and Awards popup form*/}
				<div className="section-title-text">Honors and Awards</div>
				<div className="gray-text">Show the recognition you’ve earned.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.awards.show()}><div className="bottom-add-text-section">Add honors and awards</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="awards" title="Add Honors and Awards">
				<div>Title</div>
				<input type="text"/>
				<div>Associated with</div>
				<input type="text"/>
				<div>Issuer</div>
				<input type="text"/>
				<input type="month" id="myMonth" value="2014-05" />
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

