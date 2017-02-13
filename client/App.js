import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


export default class App extends Component {

  test () {
    axios.post('/test').then(res => {
      console.log(res.data);
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.test}> test Endpoint</button>
      </div>
    );
  }
}
