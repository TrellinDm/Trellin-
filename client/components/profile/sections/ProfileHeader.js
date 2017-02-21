import React, {Component} from 'react';
import NamePopup from '../headlineForms/NamePopup';
import HeadlinePopup from '../headlineForms/HeadlinePopup';
import IndustryPopup from '../headlineForms/IndustryPopup';
import SkyLight from 'react-skylight';


class ProfileHeader extends Component {
  constructor(props){
    super(props);

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
	
	  const style = {
		  width: '50%',
		  height: 'auto',
		  marginTop: '-300px',
		  marginLeft: '-25%',
		  paddingBottom: '70px',
		  padding: '30px',
		  color: 'black'
	  };
	
	
	  var current = ['devmountain ', 'some other place'];
	  var education = ['devmountain ', 'some other place'];
	  var connectionNum = 283;
    
    return (
      <div className="header-box">
	      
        <div className="profile-pic-container">
          <div className="profile-pic"></div>
        </div>
	      
        <div className="header-info-container">
          <div className="profile-name">
            {/*<div onClick={this.toggleName} className="popup">*/}
              <span className="title-text">John Doe</span>
              {/*<div className="pencil-lg"></div>*/}
            {/*</div>*/}
            {this.state.name ? <NamePopup /> : null}
          </div>
          <div className="add-text-blue" >Add Headline
		        
          </div>
          <div className="profile-headline">
            {/*<div onClick={this.toggleHeadline} className="popup profile-text">Devmountain</div>*/}
            {this.state.headline ? <HeadlinePopup /> : null}
          </div>
          
          <div className="profile-industry profile-text">
            {/*<div onClick={this.toggleIndustry} className="popup">Industry/Location</div>*/}
            {this.state.industry ? <IndustryPopup /> : null}
          </div>
          
	        <div className="profile-text"><span className="sm-gray-text">Current</span> {current}</div>
	        <div className="profile-text"><span className="sm-gray-text">Education</span> {education}</div>
          <div className="connections-float-R">
            <div className="connections-num">{connectionNum}</div>
            <div className="sm-gray-text">connections</div>
          </div>
        </div>
	      
				<div>
					<button onClick={() => this.refs.profile.show()} className="button-dark-blue title-text" > Edit profile</button>
						<SkyLight dialogStyles={style} hideOnOverlayClicked ref="profile" title="Edit profile">
							<div>
								<div className="form-title">Profile Picture</div>
								
								<input type="file" id="file-input" />
								<p id="status" />
								<img id="preview" src="/images/default.png" />
								
								<form method="POST" action="/save-header" >
									<input className="form-input" type="hidden" id="avatar-url" name="avatar-url" value="/images/default.png" />
									<div className="form-title">Full Name</div>
									<input className="form-input" type="text" name="fullName" placeholder="Full Name" />
									<div className="form-title">Headline</div>
									<input className="form-input" type="text" name="lastName" placeholder="Last Name" />
									<div className="form-title">Country</div>
									<input className="form-input" type="text" name="lastName" placeholder="Last Name" />
									<div className="form-title">City</div>
									<input className="form-input" type="text" name="lastName" placeholder="Last Name" />
									<div className="form-title">State</div>
									<input className="form-input" type="text" name="lastName" placeholder="Last Name" />
									<div className="form-title">Industry</div>
									<input className="form-input" type="text" name="lastName" placeholder="Last Name" />
								</form>
								<div className="form-btn">
									<button className="button-dark-blue" >Save</button>
								</div>
							</div>
						</SkyLight>
				</div>
	      
      </div>
    )
  }
}

export default ProfileHeader;
