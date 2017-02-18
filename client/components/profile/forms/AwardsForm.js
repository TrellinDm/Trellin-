import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import {addAward} from '../../../reducers/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class AwardsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			associated: '',
			issuer: '',
			recieved: '',
			description: ''
		}
		this.addNewAward = this.addNewAward.bind(this);
		this.saveTitle = this.saveTitle.bind(this);
		this.saveAssociated = this.saveAssociated.bind(this);
		this.saveIssuer = this.saveIssuer.bind(this);
		this.saveRecieved = this.saveRecieved.bind(this);
		this.saveDescription = this.saveDescription.bind(this);
	}

	addNewAward() {
		var awards = this.state;
		awards.id = 1;
		axios.post('/setAwards', awards).then(() => {
			this.props.addAward(this.state);
		});
	}

	saveTitle(e) {
		this.setState({ title: e.target.value });
	}

	saveAssociated(e) {
		this.setState({ associated: e.target.value });
	}

	saveIssuer(e) {
		this.setState({ issuer: e.target.value });
	}

	saveRecieved(e) {
		this.setState({ recieved: e.target.value });
	}

	saveDescription(e) {
		this.setState({ description: e.target.value });
	}

	render() {

		// Style formatting of form popup container
		const style = {
			width: '50%',
			height: 'auto',
			marginTop: '-300px',
			marginLeft: '-25%',
			padding: '30px',
		};

		return (

		<div className="add-section">
			{/*Honors and Awards Section*/}
			<div className="icon-box">
				<div className="icon9"></div>
			</div>
			<div className="mini-info-box">

				{/*Honors and Awards popup form*/}
				<div className="section-title-text">Honors and Awards</div>
				<div className="gray-text">Show the recognition you’ve earned.</div>
			</div>
			<div className="section-info"></div>
			<button className="bottom-add" onClick={() => this.refs.awards.show()}><div className="bottom-add-text-section">Add honors and awards</div></button>
			<SkyLight dialogStyles={style} hideOnOverlayClicked ref="awards" title="Add Honors and Awards">
				<div>Title</div>
				<input type="text" onChange={this.saveTitle}/>
				<div>Associated with</div>
				<input type="text" onChange={this.saveAssociated}/>
				<div>Issuer</div>
				<input type="text" onChange={this.saveIssuer}/>
				<input type="date" id="myMonth" onChange={this.saveRecieved}/>
				<div>Description</div>
				<div>
					<textarea rows="6" cols="100" onChange={this.saveDescription} />
				</div>
				<div>
					<button className="button-dark-blue" onClick={(event) => { this.addNewAward(); this.refs.awards.hide()}}>Save</button>
				</div>
			</SkyLight>
		</div>

		)
	}
}

const mapDispatchToProps = {
  addAward: addAward
}

export default connect(null, mapDispatchToProps)(AwardsForm);

