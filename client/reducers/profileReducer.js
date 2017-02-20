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
const LANGCLICKED = 'profile/LANGCLICKED';

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
  profileStrength: 0,
  addLanguageClicked: false
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
  console.log(action)
  switch (action.type) {
    case ADDINFO:
      var stateCopy = Object.assign({}, state);
      var newState = storeInfo(stateCopy, action.payload);
      return Object.assign({}, state, newState);
    case ADDAWARD:
      var awards = Array.from(state.awardsArray);
      awards.unshift(action.payload);
      return Object.assign({}, state, {awardsArray: awards, awardsShow: true});
    case ADDCERT:
      var certifications = Array.from(state.certificationsArray);
      certifications.unshift(action.payload);
      return Object.assign({}, state, {certificationsArray: certifications, certificationsShow: true});
    case ADDCOURSE:
      var courses = Array.from(state.coursesArray);
      courses.unshift(action.payload);
      return Object.assign({}, state, {coursesArray: courses, coursesShow: true});
    case ADDEDU:
      var education = Array.from(state.educationArray);
      education.unshift(action.payload);
      return Object.assign({}, state, {educationArray: education, educationShow: true});
    case ADDEXP:
      var experience = Array.from(state.experienceArray);
      experience.unshift(action.payload);
      return Object.assign({}, state, {experienceArray: experience, experienceShow: true});
    case ADDLANG:
      var language = Array.from(state.languageArray);
      language.unshift(action.payload);
      return Object.assign({}, state, {languageArray: language, languageShow: true});
    case ADDPERS:
      var personal = Array.from(state.personalArray);
      personal.unshift(action.payload);
      return Object.assign({}, state, {personalArray: personal, personalShow: true});
    case ADDSKILL:
      var skills = Array.from(state.skillsArray);
      skills.unshift(action.payload);
      return Object.assign({}, state, {skillsArray: skills, skillsShow: true});
    case ADDSUMMARY:
      var summary = Array.from(state.summaryArray);
      summary.unshift(action.payload);
      return Object.assign({}, state, {summaryArray: summary, summaryShow: true});
    case ADDVOLUN:
      var volunteer = Array.from(state.volunteerArray);
      volunteer.unshift(action.payload);
      return Object.assign({}, state, {volunteerArray: volunteer, volunteerShow: true});
      case LANGCLICKED:
      return Object.assign({}, state, {addLanguageClicked: action.payload});
      console.log(newState)
      return newState
    default:
      return state;
  }
}

export function languageClicked(tog) {
  return {
    type: LANGCLICKED,
    payload: tog
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
