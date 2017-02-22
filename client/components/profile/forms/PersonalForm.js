import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addPersonal} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class PersonalForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			birthday: '',
			marital: ''
		}
		this.addNewPersonal = this.addNewPersonal.bind(this);
		this.saveBirthday = this.saveBirthday.bind(this);
		this.saveMarital = this.saveMarital.bind(this);
	}

	addNewPersonal() {
		var personal = this.state;
		personal.id = 1;
		axios.post('/setPersonal', personal).then(() => {
			this.props.addPersonal(this.state);
		});
	}

	saveBirthday(e) {
		this.setState({ birthday: e.target.value });
	}

	saveMarital(e) {
		this.setState({ marital: e.target.value });
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
			{/*Personal Details Section*/}
			<div className="icon-box">
				<div className="icon7"></div>
			</div>
			<div className="mini-info-box">

				{/*Personal Details popup form*/}
				<div className="section-title-text">Personal Details</div>
				<div className="gray-text">You can control who will see this information.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.details.show()}><div className="bottom-add-text-section">Add personal details</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="details" title="Add Personal Details">
				<div className="form-title">Birthday</div>
				<input className="form-input" type="date" id="myMonth" onChange={this.saveBirthday} />
				<div className="form-title">Marital status</div>
				<select className="form-input" name="status" onChange={this.saveMarital}>
					<option value="single">Single</option>
					<option value="married">Married</option>
					<option value="divorced">Divorced</option>
					<option value="widowed">Widowed</option>
				</select>
				<div className="form-btn">
					<button className="button-dark-blue" onClick={(event) => { this.addNewPersonal(); this.refs.details.hide()}}>Save</button>
				</div>
			</SkyLight>
		</div>

		)
	}
}

const mapDispatchToProps = {
  addPersonal: addPersonal
}

export default connect(null, mapDispatchToProps)(PersonalForm);
