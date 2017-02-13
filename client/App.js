import React, { Component } from 'react';
import { connect } from 'react-redux'
import Timeline from './components/timeline/timeline.js'


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Timeline />
      </div>
    );
  }
}
