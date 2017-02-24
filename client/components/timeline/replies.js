// import '../App.js';
import React, { Component } from 'react';



const CommentNum = 3
const likesNum = 12

const profileImageOne = {backgroundImage: 'url(' + "http://kingofwallpapers.com/jack-black/jack-black-005.jpg" + ')'}
const profileImageTwo = {backgroundImage: 'url(' + "http://www.gannett-cdn.com/-mm-/67c23b55d461f83e96855358c4bee23b00420bd6/c=334-0-5437-3836&r=x404&c=534x401/local/-/media/USATODAY/USATODAY/2014/04/03//1396538883000-James-Franco.jpg" + ')'}

class ReplyBox extends React.Component {
  render() {
    return (
        <div className="reply-wrapper">
          <div className="comments-collect">
            <div className="reply-section">
                <div className="reply">
                  <div className="comment-head">
                    <div className="comment-profilePic" style={this.props.image}></div>
                    <p>{this.props.body.userid}</p>
                  </div>
                    <div className="reply-content">
                       {this.props.body.content}
                    </div>
                  <div className="interact-bar comment-bar">
                    <div className="interact-basic interact-likes">{likesNum} Likes</div>
                    <div className="interact-basic ">|</div>
                    <div className="interact-basic interact-comments">{CommentNum} Comments</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ReplyBox;
