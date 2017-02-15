import { combineReducers } from 'redux';
import testReducer from './reducers/testReducer';
import search from './reducers/searchReducer';

const initialProject = {title: ''};

export default combineReducers({
  testReducer, search
});
