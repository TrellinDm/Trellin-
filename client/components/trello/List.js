import React, {Component } from 'react';
import {saveList} from '../../reducers/listReducer';
import {saveCards} from '../../reducers/listReducer';
import {deleteTable} from '../../reducers/listReducer';
import {connect} from 'react-redux';
import './List.scss';
import axios from 'axios';
import Card from './Card';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {newList: ''};
	
	  this.deleteTable = this.deleteTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postList = this.postList.bind(this);
  }

  handleChange(e) {
    this.state.newList = e.target.value
  }

  postList() {
  let self  = this;
    axios.post('/list', this.state).then(res => {
      this.props.saveList(
         res.data[0]
      )
    });
  }
  
  deleteTable(id) {
    axios.delete('/delete/table/' + id).then((res) => {
      this.props.deleteTable(id);
    })
  }

  render() {
    return (
      <div>
        <div className="input-box">
          <input className='input-table' onChange={this.handleChange} />
          <button onClick={this.postList} className='button-dark-blue'>Create list</button>
        </div>
        {this.props.list.map( (elm, i) =>{
          return (<div key={i} className="list-wrapper"><div className='list'>
            <h3 className="table-header" onClick={() => {this.deleteTable(elm.id)}}>{elm.title} <div className="trello-trash"></div></h3>
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
};

const mapDispatchToActions = {
  saveList,
  saveCards,
	deleteTable: deleteTable
};

export default connect(mapStateToProps, mapDispatchToActions)(List);
