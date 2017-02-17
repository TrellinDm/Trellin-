import React, {Component} from 'react';
import NamePopup from '../headlineForms/NamePopup';
import HeadlinePopup from '../headlineForms/HeadlinePopup';
import IndustryPopup from '../headlineForms/IndustryPopup';

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
	  var connectionNum = 283;
    
    return (
      <div className="header-box">
	      
        <div className="profile-pic-container">
          <div className="profile-pic">
		        {/*<img src="../src/profile pic.png" alt="Profile Picture" />*/}
		        {/*<div className="profile-pic-hover">*/}
		        {/*<img src="../src/photo.svg" /> Change Photo*/}
		        {/*</div>*/}
          </div>
        </div>
	      
        <div className="header-info-container">
          <div className="profile-name">
            <div onClick={this.toggleName} className="popup">
              <span className="title-text">John Doe</span>
              <div className="pencil-lg"></div>
            </div>
            {this.state.name ? <NamePopup /> : null}
          </div>
	        <div className="add-text-blue" >Add Headline
		        
	        </div>
          <div className="profile-headline">
            <div onClick={this.toggleHeadline} className="popup profile-text">Devmountain</div>
            {this.state.headline ? <HeadlinePopup /> : null}
          </div>
          
          <div className="profile-industry profile-text">
            <div onClick={this.toggleIndustry} className="popup">Industry/Location</div>
            {this.state.industry ? <IndustryPopup /> : null}
          </div>
          
	        <div className="profile-text"><span className="sm-gray-text">Current</span> {current}</div>
	        <div className="profile-text"><span className="sm-gray-text">Education</span> {education}</div>
          <div className="connections-float-R">
            <div className="connections-num">{connectionNum}</div>
            <div className="sm-gray-text">connections</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
