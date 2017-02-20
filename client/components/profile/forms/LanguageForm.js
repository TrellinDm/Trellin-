import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addLanguage} from '../../../reducers/profileReducer';
import {languageClicked} from '../../../reducers/profileReducer';
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
		console.log(this.props.addLanguageClicked);
	}

	addNewLanguage() {
		var language = this.state;
		language.id = 1;
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

	componentWillUpdate() {
		console.log("Updating");
	}

	render() {

		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			paddingBottom: '70px',
			padding: '30px',
		};

		if (this.props.addLanguageClicked) {
			if (!this.refs.language.state.isVisible) {
				this.refs.language.show();
			}
		} else if (this.refs.language) {
			this.refs.language.hide();
		}

		return (

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
					<button className="button-dark-blue" onClick={(event) => { this.addNewLanguage(); this.props.languageClicked(false)}}>Save</button>
				</div>
			</SkyLight>

		)
	}
}

const mapDispatchToProps = {
	addLanguage: addLanguage,
	languageClicked: languageClicked
}

function mapStateToProps(state) {
	console.log('STATE IS', state)
	return {
		addLanguageClicked: state.profile.addLanguageClicked
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageForm);
