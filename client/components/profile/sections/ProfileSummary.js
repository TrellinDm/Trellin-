import React, {Component} from 'react';
import { connect } from 'react-redux';
import {deleteSummary} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileSummary extends Component {
	
	constructor(props) {
		super(props)
	}
	
	deleteSummary() {
	axios.delete('/delete/summary/' + 1).then((res) => {
		this.props.deleteSummary();
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
			padding: '30px'
		};
		var summary = this.props.summaryArray.map((summ, i) => {
			return (<div key={i} className="awards-div">{summ.summary}</div>);
		});
		return (
			//Language section box
			<div className="education-box">
				<div className="title-text-gray" onClick={this.deleteSummary.bind(this)}>Summary<div className="trash"></div></div>
				<div className="box-info">{summary}</div>
			</div>
		)
	}
}

const mapDispatchToProps = {
	deleteSummary: deleteSummary
};

function mapStateToProps(state) {
	return {
		summaryArray: state.profile.summaryArray
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSummary);
