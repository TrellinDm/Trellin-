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
const PRFSTR = 'profile/PRFSTR';
const PRFSTRDEL = 'profile/PRFSTRDEL';

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
};

function storeInfo(state, userInfo) {
  for (let prop in userInfo) {
    if (userInfo[prop].length > 0) {
      let show = prop + 'Show';
      let array = prop + 'Array';
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
     let stateCopy = Object.assign({}, state);
     let newState = storeInfo(stateCopy, action.payload);
     return Object.assign({}, state, newState);
   case ADDAWARD:
     let awards = Array.from(state.awardsArray);
     awards.unshift(action.payload);
     return Object.assign({}, state, {awardsArray: awards, awardsShow: true});
   case ADDCERT:
     let certifications = Array.from(state.certificationsArray);
     certifications.unshift(action.payload);
     return Object.assign({}, state, {certificationsArray: certifications, certificationsShow: true});
   case ADDCOURSE:
     let courses = Array.from(state.coursesArray);
     courses.unshift(action.payload);
     return Object.assign({}, state, {coursesArray: courses, coursesShow: true});
   case ADDEDU:
     let education = Array.from(state.educationArray);
     education.unshift(action.payload);
     return Object.assign({}, state, {educationArray: education, educationShow: true});
   case ADDEXP:
     let experience = Array.from(state.experienceArray);
     experience.unshift(action.payload);
     return Object.assign({}, state, {experienceArray: experience, experienceShow: true});
   case ADDLANG:
     let language = Array.from(state.languageArray);
     language.unshift(action.payload);
     return Object.assign({}, state, {languageArray: language, languageShow: true});
   case ADDPERS:
     let personal = Array.from(state.personalArray);
     personal.unshift(action.payload);
     return Object.assign({}, state, {personalArray: personal, personalShow: true});
   case ADDSKILL:
     let skills = Array.from(state.skillsArray);
     skills.unshift(action.payload);
     return Object.assign({}, state, {skillsArray: skills, skillsShow: true});
   case ADDSUMMARY:
     let summary = Array.from(state.summaryArray);
     summary.unshift(action.payload);
     return Object.assign({}, state, {summaryArray: summary, summaryShow: true});
   case ADDVOLUN:
     let volunteer = Array.from(state.volunteerArray);
     volunteer.unshift(action.payload);
     return Object.assign({}, state, {volunteerArray: volunteer, volunteerShow: true});
   case REMSUMMARY:
     return Object.assign({}, state, {summaryArray: [], summaryShow: false});
   case REMAWARDS:
     return Object.assign({}, state, {awardsArray: [], awardsShow: false});
   case REMCERTIFICATIONS:
     return Object.assign({}, state, {certificationsArray: [], certificationsShow: false});
   case REMCOURSES:
     return Object.assign({}, state, {coursesArray: [], coursesShow: false});
   case REMEDUCATION:
     return Object.assign({}, state, {educationArray: [], educationShow: false});
   case REMEXPERIENCE:
     return Object.assign({}, state, {experienceArray: [], experienceShow: false});
   case REMLANGUAGES:
     return Object.assign({}, state, {languageArray: [], languageShow: false});
   case REMPERSONAL:
     return Object.assign({}, state, {personalArray: [], personalShow: false});
   case REMSKILLS:
     return Object.assign({}, state, {skillsArray: [], skillsShow: false});
   case REMVOLUNTEER:
     return Object.assign({}, state, {volunteerArray: [], volunteerShow: false});
    case PRFSTR:
      var profileCount = state.profileStrength;
      profileCount += action.count;
      console.log(profileCount);
	    return Object.assign({}, state, {profileStrength: profileCount});
	  case PRFSTRDEL:
		  var profileCount = state.profileStrength;
		  profileCount -= action.count;
		  console.log(profileCount);
		  return Object.assign({}, state, {profileStrength: profileCount});
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

export function profileStrength(count) {
  return {
    type: PRFSTR,
    count: count
  }
}

export function profileStrengthDelete(count) {
	return {
		type: PRFSTRDEL,
		count: count
	}
}






