// import '../App.js';
import React, {Component} from 'react';
import CommentBox from './comments.js';
import CreateCommentBox from './create-comment.js';
import './messaging.scss';
import axios from 'axios';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {allMessages} from '../../reducers/timelineReducer';
import _ from 'underscore';


class Timeline extends Component {
  constructor(){
    super();
    this.state = {
	    menu: false,
      showLists: false,
      messages:  []
    };
  }
  componentDidMount() {
    if (!this.props.user.id) {
      var id = 3
    }
    else {
      id = this.props.user.id
    }
      axios.get('/getMessages/' + id).then(res => {
        this.props.allMessages(res.data);
      })
 }

  render() {
    let listMessages = _.map(this.props.message, function(mes, i) {
        return (
          <CommentBox key={mes.id} author={mes.userid} body={mes.message} />
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

          {/*Left profile box*/}
          <div className="timeline-col-left">
            <div className="profile-box">
              <div className="timeline-profile-pic">
	              { this.props.user.picture ? (<img className='timeline-profile-pic' src={this.props.user.picture}/>)
		              :
		              (<img className='timeline-profile-pic' src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'/>)
	              }
              </div>
              <div className="profile-name-wrap">
                <div className="profile-text-lg"> {this.props.user.display_name ? (<div className="profile-text-lg">Welcome, {this.props.user.display_name} </div>) : (<div className="profile-text-lg">Welcome, John Doe </div>)}</div>
                <Link to="/profile" className="profile-link"> View Profile </Link>
              </div>
              <div className="profile-name-wrap">
                <div className="profile-text-lg">Connections: <span>15</span></div>
                <Link to="/connections" className="profile-link"> My Network </Link>
              </div>
              <div>
                <div className="list-text">Saved Lists</div>
                <button className="list-btn button-gray" onClick={this.listClick.bind(this)}> {listsButton} </button>
	              {listNodes}
              </div>
            </div>
          </div>

          {/*Middle comments box*/}
          <div className="timeline-col-mid">
            <CreateCommentBox />
            {listMessages}
          </div>

          {/*Right connections box*/}
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


function mapStateToProps(state) {
	return {
		connections: state.search.updatedConnections,
		showResults: state.search.showResults,
		user: state.user,
    message: state.message
	}
}

const mapDispatchToActions = {
  allMessages
}
export default connect(mapStateToProps, mapDispatchToActions)(Timeline);
