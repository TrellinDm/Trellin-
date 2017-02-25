import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addLanguage} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class LanguageForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			language: '',
			proficiency: ''
		}
		this.addNewLanguage = this.addNewLanguage.bind(this);
		this.saveLanguage = this.saveLanguage.bind(this);
		this.saveProficiency = this.saveProficiency.bind(this);
	}

	addNewLanguage() {
		var language = this.state;
		language.id = this.props.user.id;
		axios.post('/setLanguage', language).then(() => {
			this.props.addLanguage(this.state);
		});
	}

	saveLanguage(e) {
		this.setState({ language: e.target.value });
	}

	saveProficiency(e) {
		this.setState({ proficiency: e.target.value });
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
					<div>
						<div className="form-title">language</div>
						<input className="form-input" type="text" onChange={this.saveLanguage}/>
					</div>
					<div>
						<div className="form-title">proficiency</div>
						<input className="form-input" type="text" onChange={this.saveProficiency}/>
					</div>

					<div className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewLanguage(); this.refs.language.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>

		)
	}
}

const mapDispatchToProps = {
  addLanguage: addLanguage
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageForm);
