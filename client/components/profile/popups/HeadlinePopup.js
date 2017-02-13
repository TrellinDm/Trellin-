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
			<div>
				<p>Your professional headline</p>
				<input type="text"/>
				<button onClick={this.onSave} >Save</button>
				<button onClick={this.onCancel} >Cancel</button>
			</div>
		)
	}
}

export default HeadlinePopup;
