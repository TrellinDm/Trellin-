import React, {Component} from 'react';
import { connect } from 'react-redux';
import {deleteSummary} from '../../../reducers/profileReducer';
import axios from 'axios';

class ProfileSummary extends Component {

	constructor(props) {
		super(props);
	}

	deleteSummary() {
		axios.delete('/delete/summary/' + this.props.user.id).then((res) => {
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
		var summaryArray = [];
		if (this.props.conn.showConn) {
			if (this.props.conn.summaryArray) {
				summaryArray = this.props.conn.summaryArray;
			} else {
				summaryArray = this.props.summaryArray;
			}
		} else {
			summaryArray = this.props.summaryArray;
		}
		var summary = summaryArray.map((summ, i) => {
			return (<div key={i} className="awards-div">{summ.summary}</div>);
		});
		return (
			//Language section box
			<div className="education-box">

					<div className="title-text-gray">Summary
						{this.props.conn.showConn ? (null) : (
							<div className="trash" onClick={this.deleteSummary.bind(this)}></div>
						)}
					</div>

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
		summaryArray: state.profile.summaryArray,
		conn: state.connProfile,
		user: state.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSummary);
