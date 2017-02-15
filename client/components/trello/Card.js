import React, {Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';


class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newCard: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.postList = this.postList.bind(this);
    // this.props.updateList = this.props.updateList.bind(this);
  }

  handleChange(e) {
    this.setState({
      newCard: e.target.value
    })
  }

  postList() {
  var self  = this
    axios.post('/list', this.state).then(res => {//work with arrow function
      //but if you use function it will not with function

      })
  }


  render() {


    return (

      <div >



        <div className='addList'>
          <input className='input-main' onChange={this.handleChange} />
          <button onClick={this.postList} className='button-gray'>Add Card</button>
        </div>
      </div>
    )
  }
}


// const mapStateToProps = state => {
//  return {
//    list: state.list
//  }
// }
//
//
// const mapDispatchToActions = {
//  saveList
// }

export default Card;
