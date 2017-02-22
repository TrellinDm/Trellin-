import React, { Component } from 'react';
import ReplyBox from './replies.js';
import './messaging.scss';
import $ from 'jquery';


const exampleComment = "This is the comment I am using as an example of a single imported comment";
const exampleReply = "This is the REPLY REPLY I am using as an example of a single imported comment";
const CommentNum = 3;
const likesNum = 12;
const chevronImg = "https://d30y9cdsu7xlg0.cloudfront.net/png/221782-200.png";


class CommentBox extends Component {
  
	componentDidMount() {
		$(document).ready(function() {
			let flag = false;
			$(".toggle_container").hide();
			$("button.comment-reveal").click(function() {
				if(!flag){
					$(this).toggleClass("active").next().stop().slideDown("slow")
					flag = true;
						$(this).text('Collapse  ▲');
				}
				else {
					$(this).toggleClass("active").next().stop().slideUp("slow")
					flag = false;
					$(this).text('View Comments ▼');
				}
			});
		});
	}
  
  render() {
    return (
        <div className="comment-wrapper">
          <div className="comment-container">
            <div className="comment-head">
              <div className="comment-profilePic"></div>
              <p>{this.props.author}</p>
            </div>
            <div className="comment-body">{this.props.body}</div>
              <div className="post-reply">
                <button className="">Edit</button>
                <button className="">Reply</button>
                <button className="">Pin to list <img src={chevronImg} /></button>
              </div>
            <div className="interact-bar">
              <div className="interact-basic interact-likes">{likesNum} Likes</div>
              <div className="interact-basic ">|</div>
              <div className="interact-basic interact-likes">{CommentNum} Comments
              </div>
            </div>
          </div>
  
          <button className="comment-reveal" > View Comments ▼ </button>
          <div className="toggle_container" >
            <div className="block">
              <ReplyBox className="comment-profilePic" author="Jack black" body={exampleComment}/>
              <ReplyBox className="comment-profilePic" author="James Franco" body={exampleComment}/>
              <div className="horizontal-line"></div>
            </div>
          </div>
          
        </div>
    );
  }
}

export default CommentBox;
