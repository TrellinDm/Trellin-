import React, { Component } from 'react';
import axios from 'axios';

class CreateCommentBox extends React.Component {


  constructor(){
    super();
    this.state = {
      value: "",
      userid: 3,
      listid: 5,
      messageType: 'message'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  createNewMessage(message,userid,listid,messageType) {
    let data = {message: message,userid:userid,listid:listid,messageType:messageType}
    axios.post('/createNewMessage', data).then(res => {
      console.log(this.state.value)
      console.log(res.data);
    })
  }
  handleChange(event) {
     this.setState({value: event.target.value});
   }
  handleSubmit(event) {
    console.log(this.state);
    this.createNewMessage(this.state.value,this.state.userid,this.state.listid,this.state.messageType)
    event.preventDefault();
  }

  render() {
    return (
        <div>
          <div className="comment-header">
            <p>Post to timeline</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <textarea className="comment-box" placeholder="Write comment here..." value={this.state.value} onChange={this.handleChange}/>
            <input type="submit"className="post-button" />
          </form>
        </div>
    );
  }
}

export default CreateCommentBox;
