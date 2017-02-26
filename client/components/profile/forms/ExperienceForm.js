import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addExperience} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class ExperienceForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			location: '',
			company: '',
			begdate: null,
			enddate: null,
			description: ''
		}
		this.addNewExperience = this.addNewExperience.bind(this);
		this.saveTitle = this.saveTitle.bind(this);
		this.saveLocation = this.saveLocation.bind(this);
		this.saveCompany = this.saveCompany.bind(this);
		this.saveBeg = this.saveBeg.bind(this);
		this.saveEnd = this.saveEnd.bind(this);
		this.saveDescription = this.saveDescription.bind(this);
	}

	addNewExperience() {
		var experience = this.state;
		experience.id = this.props.user.id;
		axios.post('/setExperience', experience).then(() => {
			this.props.addExperience(this.state);
		});
	}

	saveTitle(e) {
		this.setState({ title: e.target.value });
	}

	saveLocation(e) {
		this.setState({ location: e.target.value });
	}

	saveCompany(e) {
		this.setState({ company: e.target.value });
	}

	saveBeg(e) {
		this.setState({ begdate: e.target.value });
	}

	saveEnd(e) {
		this.setState({ enddate: e.target.value });
	}

	saveDescription(e) {
		this.setState({ description: e.target.value });
	}

	render() {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			paddingBottom: '70px',
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
				<div className="form-title">Title</div>
				<input className="form-input" type="text" onChange={this.saveTitle}/>
				<div className="form-title">Location</div>
				<input className="form-input" type="text" onChange={this.saveLocation}/>
				<div className="form-title">Company</div>
				<input className="form-input" type="text" onChange={this.saveCompany}/>
				<div className="form-title">Time period</div>
				<div className="form-title">From Year</div>
				<input className="form-input" type="date" id="myMonth" onChange={this.saveBeg} />
				<div className="form-title">To Year (or expected)</div>
				<input className="form-input" type="date" id="myMonth" onChange={this.saveEnd} />
				<div>
					<label className="switch">
						<input className="form-input" type="checkbox" />
						<div className="slider round"></div>
					</label>
					I currently work here
				</div>
				<div className="form-title">Description</div>
				<div>
					<textarea rows="6" cols="127" onChange={this.saveDescription}/>
				</div>
				<div className="form-btn">
					<button className="button-dark-blue" onClick={(event) => { this.addNewExperience(); this.refs.experience.hide()}}>Save</button>
				</div>
			</SkyLight>
		</div>

		)
	}
}

const mapDispatchToProps = {
  addExperience: addExperience
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceForm);
