import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addLanguage} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileLanguage extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeLanguage1: false,
			activeLanguage2: false,
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
		language.id = 1;
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
				<div className="title-text-gray">Language<div className="trash"></div></div>
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
  addLanguage: addLanguage
}

function mapStateToProps(state) {
	return {
		languageArray: state.profile.languageArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLanguage);
