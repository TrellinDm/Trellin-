import React, {Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';


class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      list_id: this.props.listId,
      allCards: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.postCard = this.postCard.bind(this);
    // this.props.updateList = this.props.updateList.bind(this);
  }

  handleChange(e) {
    this.state.content = e.target.value
  }

  postCard() {

    axios.post('/card', this.state).then(res => {
      this.state.allCards.push(res.data)
        this.setState({allCards: this.state.allCards})
      })
  }


  render() {
    console.log(this.state.allCards);

    return (

      <div >
        <ul>
        {this.state.allCards.map( (elm, i) => {
            console.log(elm);
          return (<li key={i}>{elm[0].content}</li>)
        })}
      </ul>
        <div >
          <input className='input-main' onChange={this.handleChange} />
          <button onClick={this.postCard} className='button-gray'>Add Card</button>
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
