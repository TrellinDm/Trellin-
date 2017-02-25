const All_MESSAGES = 'All_MESSAGES';
const NEW_MESSAGE = 'NEW_MESSAGE';
const SAVE_REPLY = 'SAVE_REPLY';
const All_REPLIES = 'All_REPLIES';

const initialState = {
  messages: [],
  replies: []
};

function filterConnMess(mess, conns, id) {
  var filteredMessages = []
  mess.forEach( (me, i) => {
    if (me.userid == id) {
      filteredMessages.push(me);
    }
    conns.forEach( co => {
      if ( me.userid == co.connection_id ) {
        filteredMessages.push(me);
      }
    })
  });
  return filteredMessages;
}


export default (state = initialState, action) => {
  switch (action.type) {
    case All_MESSAGES:
    var arr = filterConnMess(action.mess, action.conns, action.currId);
      return Object.assign({}, state, {messages: arr});
    case NEW_MESSAGE:
      let mesg = Array.from(state.messages)
      mesg.push(action.payload[0])
      return Object.assign({}, state, {messages: mesg});

      case All_REPLIES:
        return Object.assign({}, state, {replies: action.payload})

      case SAVE_REPLY:
       let rpls = Array.from(state.replies)
       rpls.push(action.payload[0])
        return Object.assign({}, state, {replies: rpls})
    default: return state;
  }
}

export function allMessages(mess, conns, id) {
  return {
    type: All_MESSAGES,
    mess: mess,
    conns: conns,
    currId: id
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
