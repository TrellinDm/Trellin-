import React, {Component} from 'react';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';
import axios from 'axios';

class ProfileSummary extends Component {

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
		})
		return (
			//Language section box
			<div className="education-box">
				<div className="title-text-gray">Summary<div className="gray-pencil"></div></div>
				<div className="box-info">{summary}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		summaryArray: state.profile.summaryArray
	}
}

export default connect(mapStateToProps)(ProfileSummary);
