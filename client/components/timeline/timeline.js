
// import '../App.js';
import React, { Component } from 'react';
import CommentBox from './comments.js';
import CreateCommentBox from './create-comment.js';
import './messaging.scss';

const profileImageThree = {backgroundImage: 'url(' + 'http://res.cloudinary.com/devmountain-discover/image/upload/v1486891391/marcus-ogden_b16vtd.jpg' + ')'}
const profileImageOne = {backgroundImage: 'url(' + "http://kingofwallpapers.com/jack-black/jack-black-005.jpg" + ')'}
const profileImageTwo = {backgroundImage: 'url(' + "http://www.gannett-cdn.com/-mm-/67c23b55d461f83e96855358c4bee23b00420bd6/c=334-0-5437-3836&r=x404&c=534x401/local/-/media/USATODAY/USATODAY/2014/04/03//1396538883000-James-Franco.jpg" + ')'}



class Timeline extends React.Component {
  constructor(){
    super();
    this.state = {
      showLists: false
    };
  }
  render() {

    let listNodes;
    let listsButton = 'Show Lists';
    if(this.state.showLists){
    listNodes =  <div className="trello-lists">
        <div>{this.state.showLists}...</div>
        <div>list</div>
        <div>list</div>
        <div>list</div>
        <div>list</div>
        <div>list</div>
      </div>
    listsButton = 'hide lists';
    }
    return (
      <section className="timelineSection">
        <div className="timeline-profileInfo">
          <div className="profile-image single-comment-profilePic" style={profileImageThree}></div>
          <div className="profile-name-wrap">
            <p>Welcome, Marcus!</p>
            <p className="edit-profile">View Profile</p>
          </div>
          <div className="profile-name-wrap">
            <p><span>15</span> Connections</p>
            <p className="edit-profile">My Network</p>
          </div>
        </div>
        <div className="centerTimeline">
          <CreateCommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </div>
        <div className="timeline-profileInfo">
          <div className="profileInfo-title">Connections</div>
          <div className="timeline-contact-wrap">
            <div className="single-comment-profilePic"></div>
            <p>Marcus Ogden</p>
          </div>
          <div className="timeline-contact-wrap">
            <div className="single-comment-profilePic" style={profileImageOne}></div>
            <p>Jack Black</p>
          </div>
          <div className="timeline-contact-wrap">
            <div className="single-comment-profilePic" style={profileImageTwo}></div>
            <p>Jack Black</p>
          </div>
        </div>
        <div className="trello-button" onClick={this.listClick.bind(this)}> {listsButton} </div>
        {listNodes}
      </section>
    );
  }
  listClick() {
    this.setState({
      showLists: !this.state.showLists
    });
  }
}


export default Timeline;
