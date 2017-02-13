import { combineReducers } from 'redux';
import testReducer from './reducers/testReducer';

const initialProject = {title: ''};

export default combineReducers({
  testReducer
});
