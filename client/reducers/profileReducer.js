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
const REMSUMMARY = 'profile/REMSUMMARY';
const REMAWARDS = 'profile/REMAWARDS';
const REMCERTIFICATIONS = 'profile/REMCERTIFICATIONS';
const REMCOURSES = 'profile/REMCOURSES';
const REMEDUCATION = 'profile/REMEDUCATION';
const REMEXPERIENCE = 'profile/REMEXPERIENCE';
const REMLANGUAGES = 'profile/REMLANGUAGES';
const REMPERSONAL = 'profile/REMLANGUAGE';
const REMSKILLS = 'profile/REMSKILLS';
const REMVOLUNTEER = 'profile/REMVOLUNTEER';

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
  current: 'where you currently work...',
  education: 'where you went/go to school....'
};

function storeInfo(state, userInfo) {
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

function calcStrength(state) {
  var count = 0;
  for (var stateProp in state) {
    if (Array.isArray(state[stateProp])) {
      for (var arrayProp in state[stateProp][0]) {
        if (state[stateProp][0][arrayProp] && arrayProp !== 'id') {
          count++;
        }
      }
    }
  }
  return count;
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
   case ADDINFO:
     let stateCopy = Object.assign({}, state);
     let newState = storeInfo(stateCopy, action.payload);
     newState.profileStrength = calcStrength(state);
     return Object.assign({}, state, newState);
   case ADDAWARD:
     let awards = Array.from(state.awardsArray);
     awards.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {awardsArray: awards, awardsShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDCERT:
     let certifications = Array.from(state.certificationsArray);
     certifications.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {certificationsArray: certifications, certificationsShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDCOURSE:
     let courses = Array.from(state.coursesArray);
     courses.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {coursesArray: courses, coursesShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDEDU:
     let education = Array.from(state.educationArray);
     education.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {educationArray: education, educationShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDEXP:
     let experience = Array.from(state.experienceArray);
     experience.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {experienceArray: experience, experienceShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDLANG:
     let language = Array.from(state.languageArray);
     language.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {languageArray: language, languageShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDPERS:
     let personal = Array.from(state.personalArray);
     personal.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {personalArray: personal, personalShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDSKILL:
     let skills = Array.from(state.skillsArray);
     skills.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {skillsArray: skills, skillsShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDSUMMARY:
     let summary = Array.from(state.summaryArray);
     summary.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {summaryArray: summary, summaryShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case ADDVOLUN:
     let volunteer = Array.from(state.volunteerArray);
     volunteer.unshift(action.payload);
     var stateCopy = Object.assign({}, state, {volunteerArray: volunteer, volunteerShow: true});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMSUMMARY:
     var stateCopy = Object.assign({}, state, {summaryArray: [], summaryShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMAWARDS:
     var stateCopy = Object.assign({}, state, {awardsArray: [], awardsShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMCERTIFICATIONS:
     var stateCopy = Object.assign({}, state, {certificationsArray: [], certificationsShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMCOURSES:
     var stateCopy = Object.assign({}, state, {coursesArray: [], coursesShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMEDUCATION:
     var stateCopy = Object.assign({}, state, {educationArray: [], educationShow: false, education: 'where you went/go to school...'});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMEXPERIENCE:
     var stateCopy = Object.assign({}, state, {experienceArray: [], experienceShow: false, education: 'where you currently work...'});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMLANGUAGES:
     var stateCopy = Object.assign({}, state, {languageArray: [], languageShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMPERSONAL:
     var stateCopy = Object.assign({}, state, {personalArray: [], personalShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMSKILLS:
     var stateCopy = Object.assign({}, state, {skillsArray: [], skillsShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   case REMVOLUNTEER:
     var stateCopy = Object.assign({}, state, {volunteerArray: [], volunteerShow: false});
     stateCopy.profileStrength = calcStrength(stateCopy);
     return Object.assign({}, state, stateCopy);
   default:
     return state;
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

export function deleteSummary() {
  return {
    type: REMSUMMARY
  }
}

export function deleteAwards() {
  return {
    type: REMAWARDS
  }
}

export function deleteCertifications() {
  return {
    type: REMCERTIFICATIONS
  }
}

export function deleteCourses() {
  return {
    type: REMCOURSES
  }
}

export function deleteEducation() {
  return {
    type: REMEDUCATION
  }
}

export function deletePersonal() {
  return {
    type: REMPERSONAL
  }
}

export function deleteLanguages() {
  return {
    type: REMLANGUAGES
  }
}

export function deleteSkills() {
  return {
    type: REMSKILLS
  }
}

export function deleteVolunteer() {
  return {
    type: REMVOLUNTEER
  }
}

export function deleteExperiences() {
	return {
		type: REMEXPERIENCE
	}
}
