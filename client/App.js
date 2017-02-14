import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import Nav from './components/nav/Nav.js';
import './reset.scss';
import './main.scss';

export default class App extends Component {

  test () {
    axios.post('/test').then(res => {
      console.log(res.data);
    })
  }
  render() {
    console.log('hello');
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
