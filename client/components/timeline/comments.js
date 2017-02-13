import React, { Component } from 'react';
import ReplyBox from './replies.js';
import './messaging.scss';

const exampleComment = "This is the comment I am using as an example of a single imported comment"
const exampleReply = "This is the REPLY REPLY I am using as an example of a single imported comment"
const CommentNum = 3
const likesNum = 12

const chevronImg = "https://d30y9cdsu7xlg0.cloudfront.net/png/221782-200.png"
const profileImageOne = {backgroundImage: 'url(' + "http://kingofwallpapers.com/jack-black/jack-black-005.jpg" + ')'}
const profileImageTwo = {backgroundImage: 'url(' + "http://www.gannett-cdn.com/-mm-/67c23b55d461f83e96855358c4bee23b00420bd6/c=334-0-5437-3836&r=x404&c=534x401/local/-/media/USATODAY/USATODAY/2014/04/03//1396538883000-James-Franco.jpg" + ')'}


class CommentBox extends React.Component {
  render() {
    return (
        <div className="single-comment-wrapper">
          <div className="single-comment-container">
            <div className="single-comment-head">
              <div className="single-comment-profilePic"></div>
              <p>Marcus Ogden</p>
            </div>
            <div className="single-comment-body">{exampleComment}</div>
              <div className="post-reply">
                <button className="">Edit</button>
                <button className="">Reply</button>
                <button className="">Pin to list <img src={chevronImg} /></button>
              </div>
            <div className="interact-bar">
              <div className="interact-basic interact-likes">{likesNum} Likes</div>
              <div className="interact-basic ">|</div>
              <div className="interact-basic interact-likes">{CommentNum} Comments</div>
            </div>
          </div>
          <ReplyBox image={profileImageOne} author="Jack black" body={exampleComment}/>
          <ReplyBox image={profileImageTwo} author="James Franko" body={exampleComment}/>
          <div className="horizontal-line"></div>
        </div>
    );
  }
}

export default CommentBox;
