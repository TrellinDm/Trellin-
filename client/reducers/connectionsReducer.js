const SETUSERS = 'SETUSERS';
const REMSUGG = 'REMSUGG';

const initialState = {
  connections: [],
  suggestions: []
};

function separateInfo(users, conns, id) {
  var temp = Array.from(users);
  var i = 0;
  temp.forEach((user) => {
    conns.forEach((conn, j) => {
      if (user.id === conn.connection_id) {
        users.splice(i, 1); i--;
      }
    });
    i++;
  });
  return users;
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SETUSERS:
      var suggs = separateInfo(action.users, action.conns, action.id);
      return Object.assign({}, state, {connections: action.conns, suggestions: suggs});
    case REMSUGG:
      var suggArray = Array.from(state.suggestions);
      var connArray = Array.from(state.connections);
      suggArray.forEach((sugg, i) => {
        if (sugg.id === action.id) {
          connArray.push(suggArray.splice(i, 1)[0]);
        }
      });
      return Object.assign({}, state, {connections: connArray, suggestions: suggArray});
    default: return state;
  }
}

export function sendAllUsers(users, conns, id) {
  return {
    type: SETUSERS,
    users: users,
    conns: conns,
    id: id
  }
}

export function removeSugg(id) {
  return {
    type: REMSUGG,
    id: id
  }
}
