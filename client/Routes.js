import React from "react";
import { Router, Route, hashHistory } from "react-router";

import Connections from './components/Connections';
import Login from './components/Login';
import Profile from './components/Profile';
//import Timeline from './components/Timeline';
import Trello from './components/Trello';
import Nav from './Nav';

export default (
  <Router history={hashHistory}>
    <Route path="/login" component={Login} />
    <Route path="/" component={Nav}>
      {/* <Route path="/timeline" component={Timeline}/> */}
      <Route path="/profile" component={Profile}/>
      <Route path="/trello" component={Trello}/>
      <Route path="/connections" component={Connections}/>
    </Route>
  </Router>
);
