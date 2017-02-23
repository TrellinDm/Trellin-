import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import {addSkill} from '../../../reducers/profileReducer';
import {deleteSkills} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileSkills extends Component {
	constructor(props) {
		super(props);

		this.state = {
			skill: ''
		}
		this.addNewSkill = this.addNewSkill.bind(this);
		this.saveSkill = this.saveSkill.bind(this);
	}

	addNewSkill() {
		var skill = this.state;
		skill.id = 1;
		axios.post('/setSkills', skill).then(() => {
			this.props.addSkill(this.state);
		});
	}

	saveSkill(e) {
		this.setState({ skill: e.target.value });
	}
	
	deleteSkills() {
		axios.delete('/delete/skills/' + 1).then ((res) => {
			this.props.deleteSkills();
		})
	}

	render() {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			paddingBottom: '70px',
			padding: '30px',
		};

		var skills = this.props.skillsArray.map((sklz, i) => {
			return (
				<div key={i} className="skill-div">
					{sklz.skill}
				</div>
			)
		});
		return (

			<div className="education-box">
				<div className="title-text-gray" onClick={this.deleteSkills.bind(this)}>Skills<div className="trash"></div></div>
				<div className="skills-div">
					{skills}
				</div>
				<div className="bottom-add">
					<div className="bottom-add-text" onClick={() => this.refs.skills.show()}>Add skill</div>
				</div>
				<SkyLight dialogStyles={style} hideOnOverlayClicked ref="skills" title="Add Skills">
					<div className="form-title">Skills</div>
					<input className="form-input" type="text" onChange={this.saveSkill}/>
					<div className="form-btn">
						<button className="button-dark-blue" onClick={(event) => { this.addNewSkill(); this.refs.skills.hide()}}>Save</button>
					</div>
				</SkyLight>
			</div>
		)
	}
}

const mapDispatchToProps = {
  addSkill: addSkill,
	deleteSkills: deleteSkills
};

function mapStateToProps(state) {
	return {
		skillsArray: state.profile.skillsArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSkills);
