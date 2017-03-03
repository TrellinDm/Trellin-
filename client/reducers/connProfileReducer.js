const VIEWCONN = 'VIEWCONN';
const VIEWYOU = 'VIEWYOU';
const ADDCONN = 'ADDCONN';
const ADDCONNUSER = 'ADDCONNUSER';

const initialState = {
  showConn: false,
  languageShow: false,
  summaryShow: false,
  certificationsShow: false,
  coursesShow: false,
  awardsShow: false,
  educationShow: false,
  skillsShow: false,
  experienceShow: false,
  personalShow: false,
  volunteerShow: false,
  languageArray: [],
  summaryArray: [],
  certificationsArray: [],
  coursesArray: [],
  awardsArray: [],
  educationArray: [],
  skillsArray: [],
  experienceArray: [],
  personalArray: [],
  volunteerArray: [],
  current: 'where you currently work...',
  education: 'where you went/go to school....',
  connUser: {}
}

function storeInfo(state, userInfo) {

  state.languageShow = false;
  state.summaryShow = false;
  state.certificationsShow = false;
  state.coursesShow = false;
  state.awardsShow = false;
  state.educationShow = false;
  state.skillsShow = false;
  state.experienceShow = false;
  state.personalShow = false;
  state.volunteerShow = false;
  state.languageArray = [];
  state.summaryArray = [];
  state.certificationsArray = [];
  state.coursesArray = [];
  state.awardsArray = [];
  state.educationArray = [];
  state.skillsArray = [];
  state.experienceArray = [];
  state.personalArray = [];
  state.volunteerArray = [];

  for (let prop in userInfo) {
    if (userInfo[prop].length > 0) {
      let show = prop + 'Show';
      let array = prop + 'Array';
      state[show] = true;
      if (prop === 'experience') { state.current = userInfo[prop][0].title; }
      if (prop === 'education') { state.education = userInfo[prop][0].school; }
      userInfo[prop].forEach(function(item, i) {
        state[array].unshift(userInfo[prop][i]);
      });
    }
  }
  return state;
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADDCONN:
      let stateCopy = Object.assign({}, state);
      let newState = storeInfo(stateCopy, action.payload);
      return Object.assign({}, state, newState);
    case ADDCONNUSER:
      for (var prop in action.payload) {
        if (action.payload[prop] === null) {
          action.payload[prop] = '';
        }
      }
      if (action.payload.location) {
        action.payload.city = action.payload.location.split(', ')[0];
        action.payload.state = action.payload.location.split(', ')[1];
      }
      return Object.assign({}, state, {connUser: action.payload});
    case VIEWCONN:
      return Object.assign({}, state, {showConn: true});
    case VIEWYOU:
      return Object.assign({}, state, {showConn: false});
    default: return state;
  }
}

export function addConnInfo(data) {
  return {
    type: ADDCONN,
    payload: data
  }
}

export function addConnUser(data) {
  return {
    type: ADDCONNUSER,
    payload: data
  }
}

export function viewConn() {
  return {
    type: VIEWCONN
  }
}

export function viewYou() {
  return {
    type: VIEWYOU
  }
}
