import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addSummary} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class SummaryForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			summary: ''
		}
		this.addNewSummary = this.addNewSummary.bind(this);
		this.saveSummary = this.saveSummary.bind(this);
	}

	addNewSummary() {
		var summary = this.state;
		summary.id = 1;
		axios.post('/setSummary', summary).then(() => {
			this.props.addSummary(this.state);
		});
	}

	saveSummary(e) {
		this.setState({ summary: e.target.value });
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
						<textarea rows="20" cols="100" onChange={this.saveSummary}/>
					</div>
					<div>
						<button className="button-dark-blue" onClick={(event) => { this.addNewSummary(); this.refs.summary.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}

const mapDispatchToProps = {
  addSummary: addSummary
}

export default connect(null, mapDispatchToProps)(SummaryForm);
