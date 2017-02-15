// const NEW_MESSAGE = 'NEW_MESSAGE';

const message = { };

export default (state = message, action) => {
console.log(action);
  switch (action.type) {
    case NEW_MESSAGE:
      return Object.assign({}, state, action.payload)
  }
}

export function newMessage (data) {
  console.log('he');
  return {
    type: NEW_MESSAGE,
    payload: messageInfo
  }
}
