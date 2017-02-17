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

export default class ProfileAddSection extends Component {
	
	render () {
		return (
			<div className="add-section-box">
				<LanguageForm className="add-section" />
				<SummaryForm className="add-section" />
				<CertificationsForm className="add-section" />
				<EducationForm className="add-section" />
				<SkillsForm className="add-section" />
				<ExperienceForm className="add-section" />
				<PersonalForm className="add-section" />
				<VolunteerForm className="add-section" />
				<AwardsForm className="add-section" />
				<CoursesForm className="add-section" />
			</div>
		)
	}
};
		
