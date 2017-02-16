const SEARCH = 'srch/SEARCH';
const INIT = 'srch/INIT';
const TOGGLE = 'srch/TOGGLE';

const initialState = {
  connections: [],
  updatedConnections: [],
  showResults: false
}

function filterConnections(conns, srch) {
  var BreakException = {};
  var srch = srch.toLowerCase();
  var filteredItems = [];
  conns.forEach(function(conn) {
    try {
      Object.keys(conn).forEach(function(key) {
        var infoToSearch = conn[key].toString().toLowerCase();
        if (infoToSearch.indexOf(srch) >= 0) {
          filteredItems.unshift(conn);
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) { throw e };
    }
  });
  return filteredItems;
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SEARCH:
      var updatedConnections = filterConnections(state.connections, action.payload);
      state.updatedConnections = updatedConnections;
      state.showResults = true;
      return Object.assign({}, state);
    case INIT:
      state.connections = action.payload;
      return Object.assign({}, state);
    case TOGGLE:
      state.showResults = !state.showResults;
      return Object.assign({}, state);
    default: return state;
  }
}

export function filterSrch(srch) {
  return {
    type: SEARCH,
    payload: srch
  }
}

export function setInitState(conns) {
  return {
    type: INIT,
    payload: conns
  }
}

export function toggleResults() {
  return {
    type: TOGGLE
  }
}
