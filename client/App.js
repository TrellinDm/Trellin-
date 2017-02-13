import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import Nav from './components/Nav.js';


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
        <Nav />
        {this.props.children}

      </div>
    );
  }
}
