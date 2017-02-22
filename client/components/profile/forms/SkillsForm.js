import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addSkill} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class SkillsForm extends Component {
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

		return (

		<div className="add-section">
			{/*Skills Section*/}
			<div className="icon-box">
				<div className="icon5"></div>
			</div>
			<div className="mini-info-box">
				<div className="section-title-text">Skills</div>
				<div className="gray-text">Members with skills on their profile get 4 times as many profile views.</div>
			</div>
			<div className="section-info"></div>

			{/*Skills popup form*/}
			<button className="bottom-add" onClick={() => this.refs.skills.show()}><div className="bottom-add-text-section">Add skills</div></button>
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
  addSkill: addSkill
}

export default connect(null, mapDispatchToProps)(SkillsForm);
