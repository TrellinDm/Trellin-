// import '../App.js';
import React, {Component} from 'react';
import CommentBox from './comments.js';
import CreateCommentBox from './create-comment.js';
import './messaging.scss';
import axios from 'axios';
import {Link} from 'react-router';

class Timeline extends Component {
  constructor(){
    super();
    this.state = {
      showLists: false,
      messages:  []
    };
  }
  componentDidMount() {
      axios.post('/getMessages').then(res => {
        console.log(res.data);
        this.setState({
          messages: res.data
        });
        console.log(this.state.messages)
      })
 }

  render() {
    let listMessages = this.state.messages.map( function(mes, i) {
        return (
          <CommentBox key={i} author={mes.userid} body={mes.message} />
        )
      });

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
      <div className="profile-background">
        <div className="container-Timeline">
          
          <div className="timeline-col-left">
            <div className="profile-box">
              <div className="profile-image comment-profilePic"></div>
              <div className="profile-name-wrap">
                <p>Welcome, John Doe</p>
                <Link to="/profile" className="profile-link"> View Profile </Link>
              </div>
              <div className="profile-name-wrap">
                <p><span>15</span> Connections</p>
                <Link to="/connections" className="profile-link"> My Network </Link>
              </div>
              <button className="trello-button" onClick={this.listClick.bind(this)}> {listsButton} </button>
	            {listNodes}
            </div>
          </div>
          
          <div className="timeline-col-mid">
            <CreateCommentBox />
            {listMessages}
          </div>
          
          <div className="timeline-col-right">
            <div className="connection-box">
              <div className="profileInfo-title">Connections</div>
              <div className="timeline-contact-wrap">
                <div className="comment-profilePic"></div>
                <p>Marcus Ogden</p>
              </div>
              <div className="timeline-contact-wrap">
                <div className="comment-profilePic"></div>
                <p>Erik Golden</p>
              </div>
              <div className="timeline-contact-wrap">
                <div className="comment-profilePic"></div>
                <p>Marc-Andy Noel Jeune</p>
              </div>
              <div className="timeline-contact-wrap">
                <div className="comment-profilePic"></div>
                <p>William Cox</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  
  listClick() {
    this.setState({
      showLists: !this.state.showLists
    });
  }
}

export default Timeline;
