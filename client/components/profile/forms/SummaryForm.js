import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class SummaryForm extends Component {
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
			{/*Summary Section*/}
				<div className="icon-box">
					<div className="icon2"></div>
				</div>
				<div className="mini-info-box">
					<div className="section-title-text">Summary</div>
					<div className="gray-text">Adding a summary is a quick and easy way to highlight your experience and interests.</div>
				</div>
				<div className="section-info"></div>
				
				{/*Summary popup form*/}
				<button className="bottom-add" onClick={() => this.refs.summary.show()}><div className="bottom-add-text-section">Add summary</div></button>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="summary" title="Add Summary">
					<div>
						<textarea rows="20" cols="100" />
					</div>
					<div>
						<button className="button-dark-blue">Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}

