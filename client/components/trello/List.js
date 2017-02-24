import React, {Component } from 'react';
import {saveList} from '../../reducers/listReducer';
import {saveCards} from '../../reducers/listReducer';
import {connect} from 'react-redux';
import './List.scss';
import axios from 'axios';
import Card from './Card';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newList: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.postList = this.postList.bind(this);
    // this.props.updateList = this.props.updateList.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/cards')
  //     .then(res => {
  //       console.log(res.data);
  //       this.props.saveCards(res.data)
  //     })
  // }

  handleChange(e) {
    this.state.newList = e.target.value

  }

  postList() {
  var self  = this
    axios.post('/list', this.state).then(res => {//work with arrow function
      //but if you use function it will not with function
        this.props.saveList(
           res.data[0]
        )
      })
  }
  // <ul>
  //   {this.props.list.map( (elm, i) =>{
  //     return elm.title
  // })} </ul>

  render() {
  //   var list = this.props.list.map( (elm, i) =>{
  //     return <li key={i}>{elm.title}</li>
  // })



    return (

      <div>
  
        <div className="input-box">
          <div>
            <input className='input-table' onChange={this.handleChange} />
          </div>
          <button onClick={this.postList} className='button-dark-blue'>Create list</button>
        </div>
        {this.props.list.map( (elm, i) =>{
          return (<div className="list-wrapper"><div className='list' key={elm.id}>
            <h3>{elm.title}</h3>
            <br/>
            <Card className="card" id={elm.id} />
          </div></div>)
        })}
      </div>
    )
  }
}



 const mapStateToProps = state => {
  return {
    list: state.list.listObj,
    cards: state.list.cardObj
  }
}


const mapDispatchToActions = {
  saveList,
  saveCards
}

export default connect(mapStateToProps, mapDispatchToActions)(List);
