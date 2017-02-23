const All_MESSAGES = 'All_MESSAGES';
const NEW_MESSAGE = 'NEW_MESSAGE';
const message = { };

export default (state = message, action) => {
  switch (action.type) {
    case All_MESSAGES:
      return Object.assign({}, state, action.payload)
    case NEW_MESSAGE:
      return Object.assign({}, state, action.payload)
    default: return state
  }
}

export function allMessages(data) {
  return {
    type: All_MESSAGES,
    payload: data
  }
}

export function newMessage (data) {
  return {
    type: NEW_MESSAGE,
    payload: data
  }
}
