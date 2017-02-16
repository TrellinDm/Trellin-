let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  getLanguage: function(req, res) {
    db.getLanguage(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setLanguage: function(req, res) {
    var newLanguage = [
      req.body.id,
      req.body.language,
      req.body.proficiency
    ];
    db.setLanguage(newLanguage, function(err, result) {
      res.status(200).send(result);
    });
  },

  getSummary: function(req, res) {
    db.getSummary(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setSummary: function(req, res) {
    var newSummary = [
      req.body.id,
      req.body.summary
    ];
    db.setSummary(newSummary, function(err, result) {
      res.status(200).send(result);
    });
  },

  getCertifications: function(req, res) {
    db.getCertifications(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setCertifications: function(req, res) {
    var newCertifications = [
      req.body.id,
      req.body.name,
      req.body.authority,
      req.body.license_no,
      req.body.certification_url,
      req.body.begdate,
      req.body.enddate,
      req.body.expire
    ];
    db.setCertifications(newCertifications, function(err, result) {
      res.status(200).send(result);
    });
  },

  getEducation: function(req, res) {
    db.getEducation(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setEducation: function(req, res) {
    var newEducation = [
      req.body.id,
      req.body.school,
      req.body.begdate,
      req.body.enddate,
      req.body.field,
      req.body.grade,
      req.body.activities,
      req.body.description
    ];
    db.setEducation(newEducation, function(err, result) {
      res.status(200).send(result);
    });
  },

  getSkills: function(req, res) {
    db.getSkills(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setSkills: function(req, res) {
    var newSkills = [
      req.body.id,
      req.body.skill
    ];
    db.setSkills(newSkills, function(err, result) {
      res.status(200).send(result);
    });
  },

  getExperience: function(req, res) {
    db.getExperience(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setExperience: function(req, res) {
    var newExperience = [
      req.body.id,
      req.body.title,
      req.body.company,
      req.body.begdate,
      req.body.enddate,
      req.body.current,
      req.body.description
    ];
    db.setExperience(newExperience, function(err, result) {
      res.status(200).send(result);
    });
  },

  getVolunteer: function(req, res) {
    db.getVolunteer(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setVolunteer: function(req, res) {
    var newVolunteer = [
      req.body.id,
      req.body.organization,
      req.body.role,
      req.body.cause,
      req.body.begdate,
      req.body.current,
      req.body.description
    ];
    db.setVolunteer(newVolunteer, function(err, result) {
      res.status(200).send(result);
    });
  },

  getPersonal: function(req, res) {
    db.getPersonal(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setPersonal: function(req, res) {
    var newPersonal = [
      req.body.id,
      req.body.birthday,
      req.body.marital
    ];
    db.setPersonal(newPersonal, function(err, result) {
      res.status(200).send(result);
    });
  },

  getAwards: function(req, res) {
    db.getAwards(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setAwards: function(req, res) {
    var newAwards = [
      req.body.id,
      req.body.title,
      req.body.associated,
      req.body.issuer,
      req.body.recieved,
      req.body.description
    ];
    db.setAwards(newAwards, function(err, result) {
      res.status(200).send(result);
    });
  },

  getCourses: function(req, res) {
    db.getCourses(req.body.id, function(err, result) {
      res.status(200).send(result);
    });
  },
  setCourses: function(req, res) {
    var newCourses = [
      req.body.id,
      req.body.name,
      req.body.course_no,
      req.body.associated
    ];
    db.setCourses(newCourses, function(err, result) {
      res.status(200).send(result);
    });
  }

}
