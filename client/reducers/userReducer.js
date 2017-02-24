const SAVE_ID = 'user/SAVE_ID';
const UPDATE = 'user/UPDATE'

let user = {
  id: null
}

export default (state = user, action) => {

  switch (action.type) {
    case SAVE_ID:
      for (var prop in action.data) {
        if (action.data[prop] === null) {
          action.data[prop] = '';
        }
      }
      if (action.data.location) {
        action.data.city = action.data.location.split(', ')[0];
        action.data.state = action.data.location.split(', ')[1];
      }
      return Object.assign({}, state, action.data);
      break;
    case UPDATE:
      return Object.assign({}, state, action.data);
    default: return state

  }
}



////---------------user action--------------

export function saveId(data) {
  return {
    type: SAVE_ID,
    data
  }
}

export function updateUser(data) {
  return {
    type: UPDATE,
    data
  }
}
