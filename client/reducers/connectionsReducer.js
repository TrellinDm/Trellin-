const SETCONN = 'SETCONN';

const initialState = {
  connections: []
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SETCONN:
      return Object.assign({}, state, {connections: action.payload});
    default: return state;
  }
}

export function setConnections(conns) {
  return {
    type: SETCONN,
    payload: conns
  }
}
