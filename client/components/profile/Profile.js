import React, {Component} from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileExperience from './ProfileExperience';
import ProfileCertifications from './ProfileCertifications';
import ProfileEducation from './ProfileEducation';
import ProfileSkills from './ProfileSkills';
import ProfileFollowing from './ProfileFollowing';
import ProfileSidebar from './ProfileSidebar';
import "./profileStyles.scss";

class Profile extends Component {
  render() {
    return (
      <div id="container">
        <div className="profile-col-left">
          <ProfileHeader />
          <ProfileExperience />
          <ProfileCertifications/>
          <ProfileEducation/>
          <ProfileSkills/>
          <ProfileFollowing/>
        </div>
        <div className="profile-col-right">
          <ProfileSidebar />
        </div>
      </div>
    )
  }
}

export default Profile;
