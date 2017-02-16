import { combineReducers } from 'redux';
import search from './reducers/searchReducer';
import list from './reducers/listReducer';

export default combineReducers({
  search,
  list
});
