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
import { connect } from 'react-redux';

class ProfileAddSection extends Component {

	render () {
		return (
			<div className="add-section-box">
				{!this.props.languageShow ? <LanguageForm className="add-section" /> : null}
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
};

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

export default connect(mapStateToProps)(ProfileAddSection);
