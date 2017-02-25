import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {newMessage} from '../../reducers/timelineReducer'

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
    let data = {
      message: message,
      userid: this.props.user.id ? this.props.user.id : userid,
      listid: listid,
      messageType:messageType
    };
    axios.post('/createNewMessage', data).then(res => {
      this.props.newMessage(res.data)
    })
  }

  handleChange(event) {
     this.setState({value: event.target.value});
   }

  handleSubmit(event) {
    this.createNewMessage(this.state.value,this.state.userid,this.state.listid,this.state.messageType)
    event.preventDefault();
  }

  render() {
    return (
        <div className="comment-box">
          <div className="comment-header">
            <p className="comment-header-title"> Post to timeline </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <textarea className="comment-input" placeholder="Write comment here..." value={this.state.value} onChange={this.handleChange}/>
            <input type="submit" className="timeline-bottom-add timeline-bottom-add-text" />
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToActions = {
  newMessage
}
export default connect(mapStateToProps, mapDispatchToActions)(CreateCommentBox);
