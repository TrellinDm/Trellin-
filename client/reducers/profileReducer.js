const ADDINFO = 'profile/ADDINFO';

const initialState = {
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
  personal: [],
  volunteer: [],
  profileStrength: 0
}

function storeInfo(state, userInfo) {
  state.profileStrength = 0;
  for (var prop in userInfo) {
    if (userInfo[prop].length > 0) {
      state.profileStrength++;
      var show = prop + 'Show';
      var array = prop + 'Array';
      state[show] = true;
      userInfo[prop].forEach(function(item, i) {
        state[array].unshift(userInfo[prop][i]);
      });
    }
  }
  return state;
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADDINFO:
      var newState = storeInfo(state, action.payload);
      return Object.assign({}, newState);
    default: return state;
  }
}

export function addInfo(userInfo) {
  return {
    type: ADDINFO,
    payload: userInfo
  }
}
