import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import { connect } from 'react-redux';
import {languageClicked} from '../../../reducers/profileReducer';


class ProfileLanguage extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeLanguage1: false,
			activeLanguage2: false
		};
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


	render() {
		var languages = this.props.languageArray.map((lang, i) => {
			return (
				<div key={i}>
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
				<div className="title-text-gray">Language<div className="gray-pencil"></div></div>
				<div className="box-info">

					{languages}

				</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.props.languageClicked(true)}>Add language</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = {
	languageClicked: languageClicked
}

function mapStateToProps(state) {
  return {
		languageArray: state.profile.languageArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLanguage);
