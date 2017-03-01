import React, {Component} from 'react';
import ProfileHeader from './sections/ProfileHeader';
import ProfileAddSection from './sections/ProfileAddSection.js'
import ProfileSidebar from './sections/ProfileSidebar.js'
import ProfileLanguage from './sections/ProfileLanguage';
import ProfileSummary from './sections/ProfileSummary';
import ProfileCertifications from './sections/ProfileCertifications';
import ProfileCourses from './sections/ProfileCourses';
import ProfileAwards from './sections/ProfileAwards';
import ProfileEducation from './sections/ProfileEducation';
import ProfileSkills from './sections/ProfileSkills';
import ProfileExperience from './sections/ProfileExperience';
import ProfilePersonal from './sections/ProfilePersonal';
import ProfileVolunteer from './sections/ProfileVolunteer';
import {addInfo} from '../../reducers/profileReducer';
import axios from 'axios';
import { connect } from 'react-redux';
import "./profileStyles.scss";
import $ from 'jquery';


class Profile extends Component {

  componentDidMount() {

	  $(document).ready(function() {
		  $(".toggle_container").hide();
		  $("button.reveal").click(function() {
			  $(this).toggleClass("active").next().slideToggle("fast");
			  if ($.trim($(this).text()) === 'View More  ▼') {
				  $(this).text('View Less  ▲');
			  } else {
				  $(this).text('View More  ▼');
			  }
			  return false;
		  });
	  });
  }

  render() {
    return (
      <div className="profile-background">
        <div className="container">
          <div className="profile-col-left">
            <ProfileHeader />
            {this.props.showConn ? (null) : (
              <div><span className="sm-text-gray">Add a section to your profile - </span><span className="smlr-text-gray">be discovered for your next career step.</span></div>
            )}
            {this.props.showConn ? (null) : (
              <div className="section-view-more">
                <button className="reveal reveal-text"> View More  ▼ </button>
                <div className="toggle_container">
                  <div className="block"><ProfileAddSection /></div>
                </div>
              </div>
            )}

            {this.props.summaryShow || (this.props.conn.summaryShow && this.props.showConn) ? <ProfileSummary /> : null}
            {this.props.languageShow || (this.props.conn.languageShow && this.props.showConn) ? <ProfileLanguage /> : null}
            {this.props.certificationsShow || (this.props.conn.certificationsShow && this.props.showConn) ? <ProfileCertifications /> : null}
            {this.props.coursesShow || (this.props.conn.coursesShow && this.props.showConn) ? <ProfileCourses /> : null}
            {this.props.awardsShow || (this.props.conn.awardsShow && this.props.showConn) ? <ProfileAwards /> : null}
            {this.props.educationShow || (this.props.conn.educationShow && this.props.showConn) ? <ProfileEducation /> : null}
            {this.props.skillsShow || (this.props.conn.skillsShow && this.props.showConn) ? <ProfileSkills /> : null}
            {this.props.experienceShow || (this.props.conn.experienceShow && this.props.showConn) ? <ProfileExperience /> : null}
            {this.props.personalShow || (this.props.conn.personalShow && this.props.showConn) ? <ProfilePersonal /> : null}
            {this.props.volunteerShow || (this.props.conn.volunteerShow && this.props.showConn) ? <ProfileVolunteer /> : null}

          </div>
          <div className="profile-col-right">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addInfo: addInfo
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
	  volunteerShow: state.profile.volunteerShow,
    user: state.user,
    showConn: state.connProfile.showConn,
    conn: state.connProfile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
