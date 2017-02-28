// import '../App.js';
import React, { Component } from 'react';
import {connect} from 'react-redux';


const CommentNum = 3
const likesNum = 12

class ReplyBox extends React.Component {
	constructor(props) {
		super(props);
	}
	
		render() {
    return (
        <div className="reply-wrapper">
          <div className="comments-collect">
            <div className="reply-section">
                <div className="reply">
                  <div className="comment-head">
	                  { this.props.body.picture ? (<img className='comment-profilePic' src={this.props.body.picture}/>)
		                  :
		                  (<div className="comment-placeholder"></div>)
	                  }
                    <p>{this.props.body.first_name} {this.props.body.last_name}</p>
                  </div>
                  <div className="reply-content">
                     {this.props.body.content}
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
};
export default connect(null, mapStateToProps)(ReplyBox);