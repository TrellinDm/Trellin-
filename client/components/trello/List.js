import React, {Component } from 'react';
import {updateList} from '../../reducers/listReducer'
import {connect} from 'react-redux';
import './List.scss';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newList: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.postList = this.postList.bind(this);
    // this.props.updateList = this.props.updateList.bind(this);
  }

  handleChange(e) {
    this.setState({
      newList: e.target.value
    })
  }

  postList() {
  var self  = this
    axios.post('/list', this.state).then(res => {//work with arrow function
      //but if you use function it will not with function 
        console.log(res.data);
        this.props.updateList(
          res.data
        )
      })
  }

  render() {
    return (
      <div className='list'>
        <input onChange={this.handleChange} />
        <button onClick={this.postList} className='button-gray'>Create list</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}


const mapDispatchToActions = {
  updateList
}

export default connect(mapStateToProps, mapDispatchToActions)(List);
