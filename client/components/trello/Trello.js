import React, {Component } from 'react';
import List from './List';
import {connect} from 'react-redux';
import './List.scss';
import axios from 'axios';
import {updateList} from '../../reducers/listReducer'

class Trello extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    console.log(this.props.list);

      axios.get('/lists')
        .then( res => {
          console.log(res.data);
          this.props.updateList( res.data)
        })


  }

  render() {
    return (
      <div className='trello'>
        <List/>
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
 updateList
}

export default connect(mapStateToProps, mapDispatchToActions)(Trello);
