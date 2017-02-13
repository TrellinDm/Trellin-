import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './components/Nav.js';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
