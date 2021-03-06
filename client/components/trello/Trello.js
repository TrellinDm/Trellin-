import React, {Component } from 'react';
import List from './List';
import Card from './Card';
import {connect} from 'react-redux';
import './List.scss';
import axios from 'axios';
import {updateList} from '../../reducers/listReducer';
import {saveCards} from '../../reducers/listReducer';

class Trello extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('/lists').then( res => {
      this.props.updateList( res.data)
    })
  }

  render() {
    return (
      <div className='outer-table-container'>
        <div className="list-wrapper">
          <List />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
   listObj: state.list
 }
};

const mapDispatchToActions = {
 updateList,
 saveCards
}

export default connect(mapStateToProps, mapDispatchToActions)(Trello);
