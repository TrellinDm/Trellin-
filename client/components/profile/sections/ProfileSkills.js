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
		};

		this.addNewSkill = this.addNewSkill.bind(this);
		this.saveSkill = this.saveSkill.bind(this);
	}

	addNewSkill() {
		var skill = this.state;
		skill.id = this.props.user.id;
		axios.post('/setSkills', skill).then(() => {
			this.props.addSkill(this.state);
		});
	}

	saveSkill(e) {
		this.setState({ skill: e.target.value });
	}

	deleteSkills() {
		axios.delete('/delete/skills/' + this.props.user.id).then ((res) => {
			this.props.deleteSkills();
		});
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
		var skillsArray = [];
		if (this.props.conn.showConn) {
			if (this.props.conn.skillsArray) {
				skillsArray = this.props.conn.skillsArray;
			} else {
				skillsArray = this.props.skillsArray;
			}
		} else {
			skillsArray = this.props.skillsArray;
		}
		var skills = skillsArray.map((sklz, i) => {
			return (
				<div key={i} className="skill-div">
					{sklz.skill}
				</div>
			)
		});
		return (

			<div className="education-box">
				<div className="title-text-gray">Skills
					{this.props.conn.showConn ? null : (
						<div className="trash" onClick={this.deleteSkills.bind(this)}></div>
					)}
				</div>
				<div className="skills-div">
					{skills}
				</div>
				{this.props.conn.showConn ? null : (
					<div className="bottom-add">
						<div className="bottom-add-text" onClick={() => this.refs.skills.show()}>Add skill</div>
					</div>
				)}
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
		skillsArray: state.profile.skillsArray,
		user: state.user,
		conn: state.connProfile
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSkills);
