const UPDATE_LIST = 'UPDATE_LIST';
const SAVE_LIST = 'SAVE_LIST';
const SAVE_CARDS = 'SAVE_CARDS';
const UPDATE_CARDS = 'UPDATE_CARDS';
const REMTABLE = 'REMTABLE';
const REMCARD = 'REMCARD';

const initialState = {
  listObj: [],
  cardObj: []
  };

export default (state = initialState, action = [] ) => {
  switch (action.type) {
    case UPDATE_LIST:
      return Object.assign({}, state, {listObj: action.data});
    case SAVE_LIST:
      let arr = Array.from(state.listObj);
      arr.push(action.data);
      return Object.assign({}, state, {listObj: arr});
    case SAVE_CARDS:
      let list = Array.from(state.listObj);
      let cards = {};
       list.forEach( (elm, i, a) => {
        let arr2 = action.data.filter( card => {
          return card.list_id == elm.id
        });
        cards[elm.id] = arr2
      });
      return Object.assign({}, state, {cardObj: cards});
    case UPDATE_CARDS:
      cards = Object.assign({}, state.cardObj );
      if (!cards[action.data[0].list_id]) {
        cards[action.data[0].list_id] = action.data
      }else {
        cards[action.data[0].list_id].push(action.data[0]);
      }
      return Object.assign({}, state, {cardObj: cards});
    case REMTABLE:
	    let tableArr = Array.from(state.listObj);
	    tableArr.forEach((list, i) => {
	      if ( action.payload === list.id ) {
	        tableArr.splice(i, 1);
        }
      });
	    return Object.assign({}, state, {listObj: tableArr});
	  case REMCARD:
		  let cardArr = Array.from(state.cardObj);
		  cardArr.forEach((list, i) => {
			  if ( action.payload === list.id ) {
				  cardArr.slice(i, i+1);
			  }
		  });
		  return Object.assign({}, state, {cardObj: cardArr});
    default: return state
  }

}
/// make another case to push the single list

export function updateList (data) {
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

export function saveCards (data) {
  return {
    type: SAVE_CARDS,
     data
  }
}

export function updateCards (data) {
  return {
    type: UPDATE_CARDS,
     data
  }
}

export function deleteTable (id) {
	return {
		type: REMTABLE,
		payload: id
	}
}

export function deleteCard (id) {
	return {
		type: REMCARD,
		payload: id
	}
}
