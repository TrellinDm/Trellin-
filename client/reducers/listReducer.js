const UPDATE_LIST = 'UPDATE_LIST';

const list = [];

export default (state = list, action = {}) => {
console.log(action);
  switch (action.type) {
    case UPDATE_LIST:
      return Object.assign({}, state, action.payload)

    default: return state
  }

}


export function updateList (data) {
  console.log('he');
  return {
    type: UPDATE_LIST,
    payload: data
  }
}
