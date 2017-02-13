import React, { Component } from 'react';
import { connect } from 'react-redux';ls



export default class Nav extends Component {
  render() {
    return (
      <div className="App">
        Hello
        {this.props.children}
      </div>
    );
  }
}
