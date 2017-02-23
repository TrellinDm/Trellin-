import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveId} from './reducers/userReducer';

import axios from 'axios';
import Nav from './components/nav/Nav.js';
import './reset.scss';
import './main.scss';

 class App extends Component {

  constructor(props) {
    super(props)
    if(!this.props.user.id) {
      axios.get('/auth/me').then( res => {
        this.props.saveId(res.data)
      }).catch( err => {
      })
    }
  }

  render() {

    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToActions = {
  saveId
}

export default connect(mapStateToProps, mapDispatchToActions)(App)
