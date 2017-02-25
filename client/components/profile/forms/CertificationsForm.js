import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addCertification} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class CertificationsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			authority: '',
			license_no: '',
			begdate: '',
			enddate: '',
			certification_url: ''
		}
		this.addNewCertification = this.addNewCertification.bind(this);
		this.saveName = this.saveName.bind(this);
		this.saveAuthority = this.saveAuthority.bind(this);
		this.saveLicenseNo = this.saveLicenseNo.bind(this);
		this.saveBeg = this.saveBeg.bind(this);
		this.saveEnd = this.saveEnd.bind(this);
		this.saveUrl = this.saveUrl.bind(this);
	}

	addNewCertification() {
		var certification = this.state;
		certification.id = this.props.user.id;
		axios.post('/setCertifications', certification).then(() => {
			this.props.addCertification(this.state);
		});
	}

	saveName(e) {
		this.setState({ name: e.target.value });
	}

	saveAuthority(e) {
		this.setState({ authority: e.target.value });
	}

	saveLicenseNo(e) {
		this.setState({ license_no: e.target.value });
	}

	saveBeg(e) {
		this.setState({ begdate: e.target.value });
	}

	saveEnd(e) {
		this.setState({ enddate: e.target.value });
	}

	saveUrl(e) {
		this.setState({ certification_url: e.target.value });
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
				<div className="form-title">Certification name</div>
				<input className="form-input" type="text" onChange={this.saveName}/>
				<div className="form-title">Certification authority</div>
				<input className="form-input" type="text" onChange={this.saveAuthority}/>
				<div className="form-title">License number</div>
				<input className="form-input" type="text" onChange={this.saveLicenseNo}/>
				<div className="form-title">Time period</div>
				<div className="form-title">From</div>
				<input className="form-input" type="date" id="myMonth" onChange={this.saveBeg}/>
				<div className="form-title">To</div>
				<input className="form-input" type="date" id="myMonth" onChange={this.saveEnd}/>
				<div>
					<label className="switch">
						<input type="checkbox" />
						<div className="slider round"></div>
					</label>
					This certification does not expire
				</div>
				<div className="form-title">Certification Url</div>
				<input className="form-input" type="text" onChange={this.saveUrl}/>
				<div className="form-btn">
					<button className="button-dark-blue" onClick={(event) => { this.addNewCertification(); this.refs.certification.hide()}}>Save</button>
				</div>
			</SkyLight>
		</div>

		)
	}
}

const mapDispatchToProps = {
  addCertification: addCertification
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificationsForm);
