const All_MESSAGES = 'All_MESSAGES';
const NEW_MESSAGE = 'NEW_MESSAGE';
const SAVE_REPLY = 'SAVE_REPLY';
const All_REPLIES = 'All_REPLIES';

const initialState = {
  messages: [],
  replies: []
};

function filterConnMess(mess, conns) {
  var filteredMessages = []
  conns.forEach( (elm, i) => {
    mess.forEach( el => {
      if (el.userid === elm.connection_id || elm.id === el.userid) {
        filteredMessages.push(el);
      }
    })
  });
  return filteredMessages;
}


export default (state = initialState, action) => {
  switch (action.type) {
    case All_MESSAGES:
    console.log(action.mess);
    console.log(action.conns);
    var arr = filterConnMess(action.mess, action.conns);
      return Object.assign({}, state, {messages: arr});
    case NEW_MESSAGE:
      return Object.assign({}, state, action.payload);

      case All_REPLIES:
        return Object.assign({}, state, {replies: action.payload})
    default: return state;
  }
}

export function allMessages(mess, conns) {
  return {
    type: All_MESSAGES,
    mess: mess,
    conns: conns
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
