import React, { Component } from "react";

class NamePopup extends Component {
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
				<p>Name</p>
				<input type="text"/>
				<input type="text"/>
				<button onClick={this.onSave} >Save</button>
				<button onClick={this.onCancel} >Cancel</button>
			</div>
		)
	}
}

export default NamePopup;