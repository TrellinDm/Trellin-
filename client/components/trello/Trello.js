import React, {Component } from 'react';
import List from './List';
import Card from './Card';
import {connect} from 'react-redux';
import './List.scss';
import axios from 'axios';
import {updateList} from '../../reducers/listReducer'
import {saveCards} from '../../reducers/listReducer'

class Trello extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    console.log(this.props.listObj);
      axios.get('/lists')
        .then( res => {
          console.log(res.data);
          this.props.updateList( res.data)
        })
  }

  render() {
    return (
      <div className='trello-bg'>
        
          <List />

      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
   listObj: state.list
 }
}

const mapDispatchToActions = {
 updateList,
 saveCards
}

export default connect(mapStateToProps, mapDispatchToActions)(Trello);
