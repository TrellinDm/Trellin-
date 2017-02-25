import React, { Component } from 'react';
import ReplyBox from './replies.js';
import './messaging.scss';
import $ from 'jquery';
import SkyLight from 'react-skylight';
import {saveReply} from '../../reducers/timelineReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {allReplies} from '../../reducers/timelineReducer';


const exampleComment = "This is the comment I am using as an example of a single imported comment";
const exampleReply = "This is the REPLY REPLY I am using as an example of a single imported comment";
const CommentNum = 3;
const likesNum = 12;
const chevronImg = "https://d30y9cdsu7xlg0.cloudfront.net/png/221782-200.png";


class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reply: '',
      message_id: this.props.body.id,
      userid: this.props.user.id ? this.props.user.id : 3
    }

    this.handleChange = this.handleChange.bind(this);
    this.newReply = this.newReply.bind(this);
  }

  handleChange(e) {
    this.setState({ reply: e.target.value })
  }

	componentDidMount() {
    axios.get('/replies').then( res =>{
      this.props.allReplies(res.data)

    })

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

  handleChange(e) {
    this.setState({reply: e.target.value});
  }

  newReply() {
    axios.post('/reply', this.state).then( res => {
      console.log(res.data, 'comm');
      this.props.saveReply(res.data)
    })
  }

  loop() {
    let grid = this.props.timeline.replies.map( (elm, i) => {
      console.log(elm.message_id, this.props.body.id);
      if (elm.message_id == this.props.body.id) {
        return(<ReplyBox className="comment-profilePic" key={i} body={elm}/>)
      }


    })
    return  grid;
  }

  render() {
    return (
        <div className="comment-wrapper">
          <div className="comment-container">
            <div className="comment-head">
              <div className="comment-profilePic"></div>
              <p>{this.props.author}</p>
            </div>
            <div className="comment-body">{this.props.body.message}</div>

              <div className="post-reply">
                {/*<button className="">Edit</button>*/}
                <button onClick={() => this.refs.reply.show()} className="">
                  Reply
                </button>
                <button className="">Pin to list <img src={chevronImg} /></button>
              </div>
              <SkyLight hideOnOverlayClicked ref="reply" title="Leave a Reply">
                <input className="form-input" type="text" onChange={this.handleChange}/>
                <button className="button-dark-blue" onClick={(event) => { this.newReply(); this.refs.reply.hide()}}>Reply</button>
              </SkyLight>

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

              {this.loop()}


              <div className="horizontal-line"></div>
            </div>
          </div>
        </div>
    );
  }
}

const mapDispatchToActions = {
  saveReply,
  allReplies
}

const mapStateToProps = state => {
  return {
    user:state.user,
    timeline: state.message
  }
}
export default connect(mapStateToProps, mapDispatchToActions)(CommentBox);
