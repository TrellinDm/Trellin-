import { combineReducers } from 'redux';
import search from './reducers/searchReducer';
import list from './reducers/listReducer';
import connections from './reducers/connectionsReducer';
import user from './reducers/userReducer';
import profile from './reducers/profileReducer';
import message from './reducers/messageReducer';

export default combineReducers({
  search,
  list,
  connections,
  user,
  profile,
  message
});
