const All_MESSAGES = 'All_MESSAGES';
const NEW_MESSAGE = 'NEW_MESSAGE';
const SAVE_REPLY = 'SAVE_REPLY';
const All_REPLIES = 'All_REPLIES';

const initialState = {
  replies: []
};

export default (state = initialState, action) => {

  console.log(action);
  switch (action.type) {
    case All_MESSAGES:
      return Object.assign({}, state, action.payload)

    case NEW_MESSAGE:
      return Object.assign({}, state, action.payload)

    case All_REPLIES:
      return Object.assign({}, state, {replies: action.payload})

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

export function saveReply(data) {
  return {
    type: SAVE_REPLY,
    payload: data
  }
}

export function allReplies(data) {
  return {
    type: All_REPLIES,
    payload: data
  }
}
