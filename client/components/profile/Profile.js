import React, {Component} from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileExperience from './ProfileExperience';
import ProfileCertifications from './ProfileCertifications';
import ProfileEducation from './ProfileEducation';
import ProfileSkills from './ProfileSkills';
import ProfileFollowing from './ProfileFollowing';
import ProfileSidebar from './ProfileSidebar';
import ProfileAddSection from './ProfileAddSection';
import "./profileStyles.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile-background">
        <div className="container">
          <div className="profile-col-left">
            <ProfileHeader />
            <div><span className="sm-text-gray">Add a section to your profile - </span><span className="smlr-text-gray">be discovered for your next career step.</span></div>
            <ProfileAddSection/>
            <div className="section-view-more">
              <div className="bottom-add">
                <div className="bottom-add-text">View More  ▽</div>
              </div>
            </div>
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
      </div>
    )
  }
}

export default Profile;
