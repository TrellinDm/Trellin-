import React, { Component } from 'react';
import './messaging.scss';

class CreateCommentBox extends React.Component {
  render() {
    return (
        <div>
          <div className="comment-header">
            <p>Post to timeline</p>
          </div>
          <textarea className="comment-box" placeholder="Write comment here..."/>
          <button className="post-button">Post</button>
        </div>
    );
  }
}

export default CreateCommentBox;
