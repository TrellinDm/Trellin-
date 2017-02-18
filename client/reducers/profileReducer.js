const ADDINFO = 'profile/ADDINFO';
const ADDAWARD = 'profile/ADDAWARD';
const ADDCERT = 'profile/ADDCERT';
const ADDCOURSE = 'profile/ADDCOURSE';
const ADDEDU = 'profile/ADDEDU';
const ADDEXP = 'profile/ADDEXP';
const ADDLANG = 'profile/ADDLANG';
const ADDPERS = 'profile/ADDPERS';
const ADDSKILL = 'profile/ADDSKILL';
const ADDSUMMARY = 'profile/ADDSUMMARY';
const ADDVOLUN = 'profile/ADDVOLUN';

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
  personalArray: [],
  volunteerArray: [],
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
    case ADDAWARD:
      state.awardsArray.unshift(action.payload);
      state.awardsShow = true;
      return Object.assign({}, state);
    case ADDCERT:
      state.certificationsArray.unshift(action.payload);
      state.certificationsShow = true;
      return Object.assign({}, state);
    case ADDCOURSE:
      state.coursesArray.unshift(action.payload);
      state.coursesShow = true;
      return Object.assign({}, state);
    case ADDEDU:
      state.educationArray.unshift(action.payload);
      state.educationShow = true;
      return Object.assign({}, state);
    case ADDEXP:
      state.experienceArray.unshift(action.payload);
      state.experienceShow = true;
      return Object.assign({}, state);
    case ADDLANG:
      state.languageArray.unshift(action.payload);
      state.languageShow = true;
      return Object.assign({}, state);
    case ADDPERS:
      state.personalArray.unshift(action.payload);
      state.personalShow = true;
      return Object.assign({}, state);
    case ADDSKILL:
      state.skillsArray.unshift(action.payload);
      state.skillsShow = true;
      return Object.assign({}, state);
    case ADDSUMMARY:
      state.summaryArray.unshift(action.payload);
      state.summaryShow = true;
      return Object.assign({}, state);
    case ADDVOLUN:
      state.volunteerArray.unshift(action.payload);
      state.volunteerShow = true;
      return Object.assign({}, state);
    default: return state;
  }
}

export function addInfo(userInfo) {
  return {
    type: ADDINFO,
    payload: userInfo
  }
}

export function addAward(awards) {
  return {
    type: ADDAWARD,
    payload: awards
  }
}

export function addCertification(cert) {
  return {
    type: ADDCERT,
    payload: cert
  }
}

export function addCourse(course) {
  return {
    type: ADDCOURSE,
    payload: course
  }
}

export function addEducation(edu) {
  return {
    type: ADDEDU,
    payload: edu
  }
}

export function addExperience(exp) {
  return {
    type: ADDEXP,
    payload: exp
  }
}

export function addLanguage(lang) {
  return {
    type: ADDLANG,
    payload: lang
  }
}

export function addPersonal(pers) {
  return {
    type: ADDPERS,
    payload: pers
  }
}

export function addSkill(skill) {
  return {
    type: ADDSKILL,
    payload: skill
  }
}

export function addSummary(summary) {
  return {
    type: ADDSUMMARY,
    payload: summary
  }
}

export function addVolunteer(volun) {
  return {
    type: ADDVOLUN,
    payload: volun
  }
}
