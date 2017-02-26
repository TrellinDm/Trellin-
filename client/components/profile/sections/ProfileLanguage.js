import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addLanguage} from '../../../reducers/profileReducer';
import {deleteLanguages} from '../../../reducers/profileReducer';
import {profileStrength} from '../../../reducers/profileReducer';
import {profileStrengthDelete} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileLanguage extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeLanguage1: false,
			activeLanguage2: false,
			count: 0,
			addLang: {
				language: '',
				proficiency: ''
			}
		};
		this.addNewLanguage = this.addNewLanguage.bind(this);
		this.saveLanguage = this.saveLanguage.bind(this);
		this.saveProficiency = this.saveProficiency.bind(this);
	}

	showLanguage1() {
		this.setState({activeLanguage1: true})
	}
	hideLanguage1() {
		this.setState({activeLanguage1: false})
	}

	showLanguage2() {
		this.setState({activeLanguage2: true})
	}
	hideLanguage2() {
		this.setState({activeLanguage2: false})
	}

	addNewLanguage() {
		var language = this.state.addLang;
		language.id = this.props.user.id;
		axios.post('/setLanguage', language).then(() => {
			this.props.addLanguage(this.state.addLang);
		});
	}

	saveLanguage(e) {
		this.setState({ addLang: { language: e.target.value, proficiency: this.state.addLang.proficiency }});
	}

	saveProficiency(e) {
		this.setState({ addLang: { language: this.state.addLang.language, proficiency: e.target.value }});
	}

	deleteLanguages() {
		axios.delete('/delete/languages/' + this.props.user.id).then((res) => {
			this.props.deleteLanguages();
		});
		var count = this.state.count;
		this.props.profileStrengthDelete(count);
	}

	saveCount(count) {
		this.setState ({count: count})
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

		var languages = this.props.languageArray.map((lang, i) => {
			var count = 0;
			if (lang.language) {
				count++;
			}
			if (lang.proficiency) {
				count++;
			}
			if(count !== this.state.count) {
				if (count > 2) {
					count = 2;
				}
				this.saveCount(count);
				this.props.profileStrength(count);
			}
		return (
			<div key={i} className="language-div">
				{lang.language ? (
					<div>{lang.language}</div>
				) : (
					<div className="add-text-blue">Add Language
						<div onMouseEnter={this.showLanguage1.bind(this)} onMouseLeave={this.hideLanguage1.bind(this)} id="Language1" className="question-icon"></div>
						<ToolTip active={this.state.activeLanguage1} position="right" arrow="center" parent="#Language1">
							<div className="popup-pad">
								<div className="sm-text">Language</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
				)}
				{lang.proficiency ? (
					<div>{lang.proficiency}</div>
				) : (
					<div className="add-text-blue">Add Proficiency
						<div onMouseEnter={this.showLanguage2.bind(this)} onMouseLeave={this.hideLanguage2.bind(this)} id="Language2" className="question-icon"></div>
						<ToolTip active={this.state.activeLanguage2} position="right" arrow="center" parent="#Language2">
							<div className="popup-pad">
								<div className="sm-text">Proficiency</div>
								<div className="profile-text">Text here...</div>
							</div>
						</ToolTip>
					</div>
				)}
			</div>
		)
	});

		return (
			<div className="education-box">
				<div className="title-text-gray" onClick={this.deleteLanguages.bind(this)}>Language<div className="trash"></div></div>
				<div className="box-info">
					{languages}
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.language.show()}>Add language</div>
				</div>
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
  addLanguage: addLanguage,
	deleteLanguages: deleteLanguages,
	profileStrength: profileStrength,
	profileStrengthDelete: profileStrengthDelete
};

function mapStateToProps(state) {
	return {
		languageArray: state.profile.languageArray,
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLanguage);
