import React from "react";
import { render } from "react-dom";
import { Provider} from 'react-redux';
import  thunk  from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import { Router, hashHistory } from "react-router";
import rootReducer from './rootReducer';


let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

import Routes from './Routes';

render(
  <Provider store={store}>
      <Router history={hashHistory} routes={Routes}/>
  </Provider>
  , document.getElementById('root')
);
