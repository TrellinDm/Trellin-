import React, { Component } from 'react';
import ReplyBox from './replies.js';
import './messaging.scss';
import $ from 'jquery';
import SkyLight from 'react-skylight';
import {saveReply} from '../../reducers/timelineReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {allReplies} from '../../reducers/timelineReducer';
import {updateCards} from '../../reducers/listReducer';
import {updateList} from '../../reducers/listReducer';
import "../profile/profileStyles.scss";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CommentNum = 3;
const likesNum = 12;

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reply: '',
      dropdownOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.newReply = this.newReply.bind(this);
    this.pinlist = this.pinlist.bind(this);
    this.getLists = this.getLists.bind(this);
    this.gridList = this.gridList.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

  handleChange(e) {
    this.setState({ reply: e.target.value })
  }

	componentDidMount() {
    axios.get('/replies').then( res =>{
      this.props.allReplies(res.data)
    });

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
    let data = {
      reply: this.state.reply,
      message_id: this.props.body.id ? this.props.body.id : 'Unknown',
      userid: this.props.user.id ? this.props.user.id : 'Unknown',
      first_name: this.props.user.first_name ? this.props.user.first_name : this.props.user.display_name,
      picture: this.props.user.picture
    }
    axios.post('/reply', data).then( res => {
      this.props.saveReply(res.data)
    })
  }

  loop() {
    let grid = this.props.timeline.replies.map( (elm, i) => {
      if (elm.message_id == this.props.body.id) {
        return(<ReplyBox className="comment-profilePic" key={i} body={elm}/>)
      }
    });
    return  grid;
  }

  pinlist( id) {
  axios.post('/card', {content: this.props.body.message,
  list_id: id}).then(res => {
    this.props.updateCards(
      res.data
      )
    });
    this.toggle()
  }

  getLists() {
    if (this.props.list.listObj.length < 1) {
      axios.get('/lists').then( res => {
        this.props.updateList( res.data)
      })
    }
    this.toggle()
  }

  gridList() {
    return gridList
  }

  render() {
    console.log(this.props.user);
    if (this.state.dropdownOpen) {
      var gridList = this.props.list.listObj.map( (elm, i) => {//inception :)
        return (
         <div className="pin-list-text" key={i} onClick={() => this.pinlist(elm.id)}>{elm.title}</div>
	      )
      })
    }

    return (
        <div className="comment-wrapper">
          <div className="comment-container">
            <div className="comment-head">
	            { this.props.body.picture ? (<img className='comment-profilePic' src={this.props.body.picture}/>)
		            :
		            (<div className="comment-placeholder"></div>)
	            }
              <p>{this.props.body.first_name} {this.props.body.last_name}</p>
            </div>
            <div className="comment-body">{this.props.body.message}</div>
            <div className="post-reply">
              <div><button onClick={() => this.refs.reply.show()}> Reply </button></div></div>
            <div className="pin-list">
              <div><button onClick={this.getLists}> Pin to List </button>
                {gridList}
              </div>
            </div>

            <SkyLight hideOnOverlayClicked ref="reply" title="Leave a Reply">
              <input className="form-input" type="text" onChange={this.handleChange}/>
              <button className="button-dark-blue" onClick={(event) => { this.newReply(); this.refs.reply.hide()}}>Reply</button>
            </SkyLight>

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
  allReplies,
  updateCards,
  updateList
};

const mapStateToProps = state => {
  return {
    user: state.user,
    timeline: state.message,
    list: state.list
  }
};
export default connect(mapStateToProps, mapDispatchToActions)(CommentBox);
