const SAVE_ID = 'SAVE_ID';

let user = {
  id: null
}

export default (state = user, action) => {

  switch (action.type) {
    case SAVE_ID:
      return Object.assign({}, state, action.data)
      break;

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
