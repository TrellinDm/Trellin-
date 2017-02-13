import React, {Component} from 'react';
import NamePopup from './popups/NamePopup';
import HeadlinePopup from './popups/HeadlinePopup';
import IndustryPopup from './popups/IndustryPopup';

class ProfileHeader extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      name: false,
      headline: false,
      industry: false
    };
	
	  this.toggleName = this.toggleName.bind(this);
	  this.toggleHeadline = this.toggleHeadline.bind(this);
	  this.toggleIndustry = this.toggleIndustry.bind(this);
  }
  
  toggleName() {
    this.setState({name : !this.state.name})
  }
  
  toggleHeadline() {
    this.setState({headline : !this.state.headline})
  }
	
	toggleIndustry() {
		this.setState({industry : !this.state.industry})
	}
  
  render() {
    
    var current = ['devmountain ', 'some other place'];
	  var education = ['devmountain ', 'some other place'];
	  var connectionNum = 2834;
    
    return (
      <div>
        <div className="profile-pic">
          <img src="../src/profile pic.png" alt="Profile Picture" />
          <div className="profile-pic-hover">
            <img src="../src/photo.svg" /> Change Photo
          </div>
        </div>
        <div className="profile-name">
          <h1 onClick={this.toggleName} >Your Name Here</h1>
	        {this.state.name ? <NamePopup /> : null}
        </div>
        <div className="profile-headline">
          <h1 onClick={this.toggleHeadline} >Student and Devmountain</h1>
		      {this.state.headline ? <HeadlinePopup /> : null}
        </div>
        <div className="profile-industry">
          <h1 onClick={this.toggleIndustry} >Industry/Location</h1>
		      {this.state.industry ? <IndustryPopup /> : null}
        </div>
        <div>Current: {current}</div>
        <div>Education: {education}</div>
        <div>
          <div>{connectionNum}</div>
          <div>Connections</div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
