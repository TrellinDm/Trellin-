const UPDATE_LIST = 'UPDATE_LIST';
const SAVE_LIST = 'SAVE_LIST';

const list = {
  all: []
  };

export default (state = list, action = []) => {
console.log(action);
  switch (action.type) {
    case UPDATE_LIST:
      return Object.assign({}, state, {all: action.data})
      break;

    case SAVE_LIST:
      let arr = Array.from(state.all);
      arr.push(action.data)
      return Object.assign({}, state, {all: arr})

    default: return state
  }

}
/// make another case to push the single list

export function updateList (data) {
  console.log('up');
  return {
    type: UPDATE_LIST,
     data
  }
}

export function saveList (data) {
  return {
    type: SAVE_LIST,
     data
  }
}
