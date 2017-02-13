import React, {Component} from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div className="profile-pic">
          <img src="../src/profile pic.png" alt="Profile Picture" />
          <div className="profile-pic-hover">
            <img src="../src/photo.svg" /> Change Photo
          </div>
        </div>
        <div className="profile-name">
          
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
