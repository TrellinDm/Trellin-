import React, { Component } from 'react';
import LanguageForm from '../../../../client/components/profile/forms/LanguageForm.js';
import AwardsForm from '../../../../client/components/profile/forms/AwardsForm.js';
import CertificationsForm from '../../../../client/components/profile/forms/CertificationsForm.js';
import CoursesForm from '../../../../client/components/profile/forms/CoursesForm.js';
import ExperienceForm from '../../../../client/components/profile/forms/ExperienceForm.js';
import PersonalForm from '../../../../client/components/profile/forms/PersonalForm.js';
import SkillsForm from '../../../../client/components/profile/forms/SkillsForm.js';
import SummaryForm from '../../../../client/components/profile/forms/SummaryForm.js';
import VolunteerForm from '../../../../client/components/profile/forms/VolunteerForm.js';
import EducationForm from '../../../../client/components/profile/forms/EducationForm.js';
import {languageClicked} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';


class ProfileAddSection extends Component {

	render () {
		return (
			<div className="add-section-box">
				{!this.props.languageShow ? (
					<div className="add-section">
						<div className="icon-box">
							<div className="icon1"></div>
						</div>
						<div className="mini-info-box">
							<div className="section-title-text">Language</div>
							<div className="gray-text">This can help you find a new job, get a promotion, or transfer overseas.</div>
						</div>
						<div className="section-info"></div>
						<button className="bottom-add" onClick={() => this.props.languageClicked(true)}><div className="bottom-add-text-section">Add language</div></button>
						<LanguageForm className="add-section" />
					</div>
				) : null}
				{!this.props.summaryShow ? <SummaryForm className="add-section" /> : null}
				{!this.props.certificationsShow ? <CertificationsForm className="add-section" /> : null}
				{!this.props.educationShow ? <EducationForm className="add-section" /> : null}
				{!this.props.skillsShow ? <SkillsForm className="add-section" /> : null}
				{!this.props.experienceShow ? <ExperienceForm className="add-section" /> : null}
				{!this.props.personalShow ? <PersonalForm className="add-section" /> : null}
				{!this.props.volunteerShow ? <VolunteerForm className="add-section" /> : null}
				{!this.props.awardsShow ? <AwardsForm className="add-section" /> : null}
				{!this.props.coursesShow ? <CoursesForm className="add-section" /> : null}
			</div>
		)
	}
}

const mapDispatchToProps = {
	languageClicked: languageClicked
}

function mapStateToProps(state) {
  return {
    languageShow: state.profile.languageShow,
		summaryShow: state.profile.summaryShow,
	  certificationsShow: state.profile.certificationsShow,
	  coursesShow: state.profile.coursesShow,
	  awardsShow: state.profile.awardsShow,
	  educationShow: state.profile.educationShow,
	  skillsShow: state.profile.skillsShow,
	  experienceShow: state.profile.experienceShow,
	  personalShow: state.profile.personalShow,
	  volunteerShow: state.profile.volunteerShow
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddSection);
