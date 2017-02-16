import { combineReducers } from 'redux';
import search from './reducers/searchReducer';
import list from './reducers/listReducer';
import connections from './reducers/connectionsReducer';

export default combineReducers({
  search,
  list,
  connections
});
