import React, {Component } from 'react';

import {connect} from 'react-redux';
import {saveCards} from '../../reducers/listReducer';
import {updateCards} from '../../reducers/listReducer';
import axios from 'axios';


class Card extends Component {
  // get reducer by id
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
    this.renderCard = this.renderCard.bind(this)
  }

  handleChange(e) {
    this.state.content = e.target.value
  }

  postCard() {

    axios.post('/card', this.state).then(res => {
      this.props.saveCards(res.data)

      })
  }

componentDidMount() {
  axios.get('/cards').then(res => {
      console.log(res.data);
      this.props.saveCards(res.data)

    })
}

renderCard() {
  if (this.props.list.cardObj[this.props.id]) {
    var grid = this.props.list.cardObj[this.props.id].map((elm, i) => {
      console.log(elm);
     return (<li key={i}>{elm.content} : {elm.id}</li>)
   })
   return grid
  }
}


  render() {

    return (

      <div>
        <ul>
          {this.renderCard()}
      </ul>
        <div >
          <input className='input-main' onChange={this.handleChange} />
          <button onClick={this.postCard} className='button-gray'>Add Card</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
 return {
   list: state.list
 }
}


const mapDispatchToActions = {
saveCards,
updateCards
}

export default connect(mapStateToProps, mapDispatchToActions)(Card);
