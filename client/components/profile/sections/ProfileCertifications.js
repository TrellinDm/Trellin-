import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addCertification} from '../../../reducers/profileReducer';
import {deleteCertifications} from '../../../reducers/profileReducer';
import {profileStrength} from '../../../reducers/profileReducer';
import {profileStrengthDelete} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileCertifications extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeCertification1: false,
			activeCertification2: false,
			activeCertification3: false,
			activeCertification4: false,
			activeCertification5: false,
			activeCertification6: false,
			count: 0,
			addCert: {
				name: '',
				authority: '',
				license_no: '',
				begdate: null,
				enddate: null,
				certification_url: ''
			}
		};
		this.addNewCertification = this.addNewCertification.bind(this);
		this.saveName = this.saveName.bind(this);
		this.saveAuthority = this.saveAuthority.bind(this);
		this.saveLicenseNo = this.saveLicenseNo.bind(this);
		this.saveBeg = this.saveBeg.bind(this);
		this.saveEnd = this.saveEnd.bind(this);
		this.saveUrl = this.saveUrl.bind(this);
	}

	showCertification1() {
		this.setState({activeCertification1: true})
	}
	hideCertification1() {
		this.setState({activeCertification1: false})
	}

	showCertification2() {
		this.setState({activeCertification2: true})
	}
	hideCertification2() {
		this.setState({activeCertification2: false})
	}

	showCertification3() {
		this.setState({activeCertification3: true})
	}
	hideCertification3() {
		this.setState({activeCertification3: false})
	}

	showCertification4() {
		this.setState({activeCertification4: true})
	}
	hideCertification4() {
		this.setState({activeCertification4: false})
	}

	showCertification5() {
		this.setState({activeCertification5: true})
	}
	hideCertification5() {
		this.setState({activeCertification5: false})
	}

	showCertification6() {
		this.setState({activeCertification6: true})
	}
	hideCertification6() {
		this.setState({activeCertification6: false})
	}

	addNewCertification() {
		var certification = this.state.addCert;
		certification.id = this.props.user.id;
		axios.post('/setCertifications', certification).then(() => {
			this.props.addCertification(this.state.addCert);
		});
	}

	saveName(e) {
		this.setState({
			addCert: {
				name: e.target.value,
				authority: this.state.addCert.authority,
				license_no: this.state.addCert.license_no,
				begdate: this.state.addCert.begdate,
				enddate: this.state.addCert.enddate,
				certification_url: this.state.addCert.certification_url
			}
		});
	}

	saveAuthority(e) {
		this.setState({
			addCert: {
				name: this.state.addCert.name,
				authority: e.target.value,
				license_no: this.state.addCert.license_no,
				begdate: this.state.addCert.begdate,
				enddate: this.state.addCert.enddate,
				certification_url: this.state.addCert.certification_url
			}
		});
	}

	saveLicenseNo(e) {
		this.setState({
			addCert: {
				name: this.state.addCert.name,
				authority: this.state.addCert.authority,
				license_no: e.target.value,
				begdate: this.state.addCert.begdate,
				enddate: this.state.addCert.enddate,
				certification_url: this.state.addCert.certification_url
			}
		});
	}

	saveBeg(e) {
		this.setState({
			addCert: {
				name: this.state.addCert.name,
				authority: this.state.addCert.authority,
				license_no: this.state.addCert.license_no,
				begdate: e.target.value,
				enddate: this.state.addCert.enddate,
				certification_url: this.state.addCert.certification_url
			}
		});
	}

	saveEnd(e) {
		this.setState({
			addCert: {
				name: this.state.addCert.name,
				authority: this.state.addCert.authority,
				license_no: this.state.addCert.license_no,
				begdate: this.state.addCert.begdate,
				enddate: e.target.value,
				certification_url: this.state.addCert.certification_url
			}
		});
	}

	saveUrl(e) {
		this.setState({
			addCert: {
				name: this.state.addCert.name,
				authority: this.state.addCert.authority,
				license_no: this.state.addCert.license_no,
				begdate: this.state.addCert.begdate,
				enddate: this.state.addCert.enddate,
				certification_url: e.target.value
			}
		});
	}

	deleteCertifications() {
		axios.delete('/delete/certifications/' + this.props.user.id).then((res) => {
			this.props.deleteCertifications()
		});
		var count = this.state.count;
		this.props.profileStrengthDelete(count);
	}

	saveCount(count) {
		this.setState ({count: count})
	}

	render () {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			paddingBottom: '70px',
			padding: '30px',
		};

		var certificates = this.props.certificationsArray.map((cert, i) => {
			var count = 0;
			if (cert.name) {
				count++;
			}
			if (cert.authority) {
				count++;
			}
			if (cert.license_no) {
				count++;
			}
			if (cert.begdate) {
				count++;
			}
			if (cert.enddate) {
				count++;
			}
			if (cert.certification_url) {
				count++;
			}
			if(count !== this.state.count) {
				if (count > 6) {
					count = 6;
				}
				this.saveCount(count);
				this.props.profileStrength(count);
			}
			return (
				<div key={i} className="awards-div">
					{cert.name ? (
						<div>{cert.name}</div>
					) : (
						<div className="add-text-blue">Add Certification Name
							<div onMouseEnter={this.showCertification1.bind(this)} onMouseLeave={this.hideCertification1.bind(this)} id="certification1" className="question-icon"></div>
							<ToolTip active={this.state.activeCertification1} position="right" arrow="center" parent="#certification1">
								<div className="popup-pad">
									<div className="sm-text">Certification Name</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{cert.authority ? (
						<div>{cert.authority}</div>
					) : (
						<div className="add-text-blue">Add Certification Authority
							<div onMouseEnter={this.showCertification2.bind(this)} onMouseLeave={this.hideCertification2.bind(this)} id="certification2" className="question-icon"></div>
							<ToolTip active={this.state.activeCertification2} position="right" arrow="center" parent="#certification2">
								<div className="popup-pad">
									<div className="sm-text">Certification Authority</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{cert.license_no ? (
						<div>{cert.license_no}</div>
					) : (
						<div className="add-text-blue">Add License Number
							<div onMouseEnter={this.showCertification3.bind(this)} onMouseLeave={this.hideCertification3.bind(this)} id="certification3" className="question-icon"></div>
							<ToolTip active={this.state.activeCertification3} position="right" arrow="center" parent="#certification3">
								<div className="popup-pad">
									<div className="sm-text">License Number</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{cert.begdate ? (
						<div>{cert.begdate}</div>
					) : (
						<div className="add-text-blue">Add Start Date
							<div onMouseEnter={this.showCertification5.bind(this)} onMouseLeave={this.hideCertification5.bind(this)} id="certification5" className="question-icon"></div>
							<ToolTip active={this.state.activeCertification5} position="right" arrow="center" parent="#certification5">
								<div className="popup-pad">
									<div className="sm-text">Date</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{cert.enddate ? (
						<div>{cert.enddate}</div>
					) : (
						<div className="add-text-blue">Add End Date
							<div onMouseEnter={this.showCertification6.bind(this)} onMouseLeave={this.hideCertification6.bind(this)} id="certification6" className="question-icon"></div>
							<ToolTip active={this.state.activeCertification6} position="right" arrow="center" parent="#certification6">
								<div className="popup-pad">
									<div className="sm-text">Date</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
					{cert.certification_url ? (
						<div>{cert.certification_url}</div>
					) : (
						<div className="add-text-blue">Add Certification URL
							<div onMouseEnter={this.showCertification4.bind(this)} onMouseLeave={this.hideCertification4.bind(this)} id="certification4" className="question-icon"></div>
							<ToolTip active={this.state.activeCertification4} position="right" arrow="center" parent="#certification4">
								<div className="popup-pad">
									<div className="sm-text">Certification URL</div>
									<div className="profile-text">Text here...</div>
								</div>
							</ToolTip>
						</div>
					)}
				</div>
			)
		});

		return (
			<div className="certifications-box">
				<div className="title-text-gray" onClick={this.deleteCertifications.bind(this)}>Certifications<div className="trash"></div></div>
				<div className="box-info">
					{certificates}
				</div>

				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.certification.show()}>Add certificate</div>
				</div>
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
  addCertification: addCertification,
	deleteCertifications: deleteCertifications,
	profileStrength: profileStrength,
	profileStrengthDelete: profileStrengthDelete
};

function mapStateToProps(state) {
	return {
		certificationsArray: state.profile.certificationsArray,
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCertifications);
