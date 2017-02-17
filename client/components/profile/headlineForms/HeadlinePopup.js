import React, { Component } from "react";

class HeadlinePopup extends Component {
	constructor(props) {
		super(props);
		
		this.onSave = this.onSave.bind(this);
		this.onCancel = this.onCancel.bind(this);
	}
	
	onSave() {
		console.log("Saved");
	}
	
	onCancel() {
		console.log("Canceled");
	}
	
	render() {
		return (
			<div className="name-popup-box">
				<p>Your professional headline</p>
				<input className="input-main" type="text"/>
				<button className="button-dark-blue" onClick={this.onSave} >Save</button>
				<button className="button-gray" onClick={this.onCancel} >Cancel</button>
			</div>
		)
	}
}

export default HeadlinePopup;
