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
          {all: res.data}
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
  console.log(this.props.list);
    return (

      <div className='list'>
        <div>
          <ul>
             </ul>
        </div>

        <div>
          <input onChange={this.handleChange} />
          <button onClick={this.postList} className='button-gray'>Create list</button>
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
  updateList
}

export default connect(mapStateToProps, mapDispatchToActions)(List);
