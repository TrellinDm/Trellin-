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
    axios.post('/getUserInformation', {id: 1}).then(res => {
      this.props.addInfo(res.data);
    });
  }

  render() {
	

    
    return (
      <div className="profile-background">
        <div className="container">
          <div className="profile-col-left">
            <ProfileHeader />
            <div><span className="sm-text-gray">Add a section to your profile - </span><span className="smlr-text-gray">be discovered for your next career step.</span></div>
            
            <div id="flip" className="section-view-more">
              <div className="bottom-add">
                <div className="bottom-add-text">View More  ▽</div>
              </div>
            </div>
            <div id="panel" >
              <ProfileAddSection />
            </div>
            
            <ProfileSummary />
            <ProfileLanguage />
            <ProfileCertifications />
            <ProfileCourses />
            <ProfileAwards />
            <ProfileEducation />
            <ProfileSkills />
            <ProfileExperience />
            <ProfilePersonal />
            <ProfileVolunteer />
          </div>
          <div className="profile-col-right">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    )
  }
}

$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
	});
});

const mapDispatchToProps = {
  addInfo: addInfo
};

function mapStateToProps(state) {
  return {
    languageShow: state.profile.languageShow
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
