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
      list_id: this.props.id
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
      this.props.updateCards(res.data)

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
      
     return (<div className="card" key={i}>{elm.content}</div>)
   });
   return grid
  }
}


  render() {

    return (

      <div>
        <div>
          {this.renderCard()}
      </div>
        <div >
          <input className='input-table' onChange={this.handleChange} />
          <button onClick={this.postCard} className='button-dark-blue'>Add Card</button>
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
