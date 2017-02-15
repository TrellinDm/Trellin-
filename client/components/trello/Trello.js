import React, {Component } from 'react';
import List from './List';
import {connect} from 'react-redux';
import './List.scss';

class Trello extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='trello'>
        <List/>
      </div>
    )
  }
}

function mapStateToProps(state) {

}

export default Trello;
