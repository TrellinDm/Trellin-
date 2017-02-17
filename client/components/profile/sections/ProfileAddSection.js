import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export default class ProfileAddSection extends Component {
	constructor(props){
		super(props);
	}
	
	render () {
		
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			padding: '30px',
		};
		
		return (
			<div className="add-section-box">
				<div className="add-section">
					<div className="icon-box">
						<div className="icon1"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Language</div>
						<div className="gray-text">This can help you find a new job, get a promotion, or transfer overseas.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.language.show()}><div className="bottom-add-text-section">Add language</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="language" title="Add Language">
						<div>language</div>
						<input type="text"/>
						<div>proficiency</div>
						<input type="text"/>
						<div>
							<label className="switch">
								<input type="checkbox" />
								<div className="slider round"></div>
							</label>
							<div>Do not update my network
								<div>Your connections will not see this change in your feed or email</div>
							</div>
						</div>
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon2"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Summary</div>
						<div className="gray-text">Adding a summary is a quick and easy way to highlight your experience and interests.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.summary.show()}><div className="bottom-add-text-section">Add summary</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="summary" title="Add Summary">
						<div>
							<textarea rows="20" cols="100" />
						</div>
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon3"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Certifications</div>
						<div className="gray-text">Members with a certification on their profile get double the profile views.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.certification.show()}><div className="bottom-add-text-section">Add certifications</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="certification" title="Add Certification">
						<div>Certification name</div>
						<input type="text"/>
						<div>Certification authority</div>
						<input type="text"/>
						<div>License number</div>
						<input type="text"/>
						<div>Time period</div>
						<div>From</div>
						<input type="month" id="myMonth" value="2014-05" />
						<div>To</div>
						<input type="month" id="myMonth" value="2014-05" />
						<div>
							<label className="switch">
								<input type="checkbox" />
								<div className="slider round"></div>
							</label>
							This certification does not expire
						</div>
						<div>Certification Url</div>
						<input type="text"/>
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon4"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Education</div>
						<div className="gray-text">Members with a school on their profile get 7 times more profile views.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.education.show()}><div className="bottom-add-text-section">Add education</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="education" title="Education">
						<div>School</div>
						<input type="text"/>
						<div>Degree</div>
						<input type="text"/>
						<div>Field of study</div>
						<input type="text"/>
						<div>Grade</div>
						<input type="text"/>
						<div>Activities and societies</div>
						<div>
							<textarea rows="6" cols="100" />
						</div>
						<div>From Year</div>
						<input type="month" id="myMonth" value="2014-05" />
						<div>To Year (or expected)</div>
						<input type="month" id="myMonth" value="2014-05" />
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon5"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Skills</div>
						<div className="gray-text">Members with skills on their profile get 4 times as many profile views.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.skills.show()}><div className="bottom-add-text-section">Add skills</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="skills" title="Skills">
						<div>Skills</div>
						<input type="text"/>
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon6"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Experience</div>
						<div className="gray-text">People could be looking for someone with your experience.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.experience.show()}><div className="bottom-add-text-section">Add experience</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="experience" title="Experience">
						
						Experience form goes here...
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon7"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Personal Details</div>
						<div className="gray-text">You can control who will see this information.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.details.show()}><div className="bottom-add-text-section">Add personal details</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="details" title="Personal Details">
						
						Personal details form goes here...
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon8"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Volunteering Experience</div>
						<div className="gray-text">1 in 5 managers hired someone because of their volunteer experiences.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.volunteer.show()}><div className="bottom-add-text-section">Add volunteering experience</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="volunteer" title="Volunteer Experience">
						
						Volunteer experience goes here...
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon9"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Honors and Awards</div>
						<div className="gray-text">Show the recognition you’ve earned.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.awards.show()}><div className="bottom-add-text-section">Add honors and awards</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="awards" title="Honors and Awards">
						
						Honors and awards form goes here...
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
				<div className="add-section">
					<div className="icon-box">
						<div className="icon10"></div>
					</div>
					<div className="mini-info-box">
						<div className="section-title-text">Courses</div>
						<div className="gray-text">Showing more information about your background will help you get found for more opportunities.</div>
					</div>
					<div className="section-info"></div>
					<button className="bottom-add" onClick={() => this.refs.courses.show()}><div className="bottom-add-text-section">Add courses</div></button>
					<SkyLight dialogStyles={style} hideOnOverlayClicked ref="courses" title="Courses">
						
						Courses form goes here...
						<div>
							<button className="button-dark-blue">Save</button>
						</div>
					</SkyLight>
				</div>
			</div>
		)
	}
};
		
