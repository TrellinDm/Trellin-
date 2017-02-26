let app = require('../server.js') ;
let db = app.get('db');

module.exports = {

  getUserInformation: function(req, res) {
    let userInfo = {};
    db.profileGets.getLanguage(req.body.id, function(err, response) {
      userInfo.language = response;
      db.profileGets.getSummary(req.body.id, function(err, response) {
        userInfo.summary = response;
        db.profileGets.getCertifications(req.body.id, function(err, response) {
          userInfo.certifications = response;
          db.profileGets.getEducation(req.body.id, function(err, response) {
            userInfo.education = response;
            db.profileGets.getSkills(req.body.id, function(err, response) {
              userInfo.skills = response;
              db.profileGets.getExperience(req.body.id, function(err, response) {
                userInfo.experience = response;
                db.profileGets.getPersonal(req.body.id, function(err, response) {
                  userInfo.personal = response;
                  db.profileGets.getVolunteer(req.body.id, function(err, response) {
                    userInfo.volunteer = response;
                    db.profileGets.getAwards(req.body.id, function(err, response) {
                      userInfo.awards = response;
                      db.profileGets.getCourses(req.body.id, function(err, response) {
                        userInfo.courses = response;
                        res.status(200).send(userInfo);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  },

  setLanguage: function(req, res) {
    let newLanguage = [
      req.body.id,
      req.body.language,
      req.body.proficiency
    ];
    db.profileSets.setLanguage(newLanguage, function(err, result) {
      res.status(200).send(result);
    });
  },

  setSummary: function(req, res) {
    let newSummary = [
      req.body.id,
      req.body.summary
    ];
    db.profileSets.setSummary(newSummary, function(err, result) {
      res.status(200).send(result);
    });
  },

  setCertifications: function(req, res) {
    let newCertifications = [
      req.body.id,
      req.body.name,
      req.body.authority,
      req.body.license_no,
      req.body.certification_url,
      req.body.begdate,
      req.body.enddate
    ];
    db.profileSets.setCertifications(newCertifications, function(err, result) {
      res.status(200).send(result);
    });
  },

  setEducation: function(req, res) {
    let newEducation = [
      req.body.id,
      req.body.school,
      req.body.begdate,
      req.body.enddate,
      req.body.degree,
      req.body.field,
      req.body.grade,
      req.body.activities
    ];
    db.profileSets.setEducation(newEducation, function(err, result) {
      res.status(200).send(result);
    });
  },

  setSkills: function(req, res) {
    let newSkills = [
      req.body.id,
      req.body.skill
    ];
    db.profileSets.setSkills(newSkills, function(err, result) {
      res.status(200).send(result);
    });
  },

  setExperience: function(req, res) {
    let newExperience = [
      req.body.id,
      req.body.title,
      req.body.company,
      req.body.begdate,
      req.body.enddate,
      req.body.current,
      req.body.description
    ];
    db.profileSets.setExperience(newExperience, function(err, result) {
      res.status(200).send(result);
    });
  },

  setVolunteer: function(req, res) {
    let newVolunteer = [
      req.body.id,
      req.body.organization,
      req.body.role,
      req.body.cause,
      req.body.begdate,
      req.body.enddate,
      req.body.current,
      req.body.description
    ];
    db.profileSets.setVolunteer(newVolunteer, function(err, result) {
      res.status(200).send(result);
    });
  },

  setPersonal: function(req, res) {
    let newPersonal = [
      req.body.id,
      req.body.birthday,
      req.body.marital
    ];
    db.profileSets.setPersonal(newPersonal, function(err, result) {
      res.status(200).send(result);
    });
  },

  setAwards: function(req, res) {
    let newAwards = [
      req.body.id,
      req.body.title,
      req.body.associated,
      req.body.issuer,
      req.body.recieved,
      req.body.description
    ];
    db.profileSets.setAwards(newAwards, function(err, result) {
      res.status(200).send(result);
    });
  },

  setCourses: function(req, res) {
    let newCourses = [
      req.body.id,
      req.body.name,
      req.body.course_no,
      req.body.associated
    ];
    db.profileSets.setCourses(newCourses, function(err, result) {
      res.status(200).send(result);
    });
  },

  deleteSummary: function(req, res) {
    db.deleteSections.deleteSummary(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted summary');
    });
  },

  deleteAwards: function(req, res) {
    db.deleteSections.deleteAwards(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted awards');
    })
  },

  deleteCertifications: function(req, res) {
    db.deleteSections.deleteCertifications(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted certifications');
    })
  },

  deleteCourses: function(req, res) {
    db.deleteSections.deleteCourses(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted courses');
    })
  },

  deleteEducation: function(req, res) {
    db.deleteSections.deleteEducation(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted education');
    })
  },

  deleteExperiences: function(req, res) {
    db.deleteSections.deleteExperiences(req.params.id, function(err, result) {
      res.status(200).send('Successfully delete experiences');
    })
  },

  deleteLanguages: function(req, res) {
    db.deleteSections.deleteLanguages(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted languages');
    })
  },

  deletePersonal: function(req, res) {
    db.deleteSections.deletePersonal(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted personal details');
    })
  },

  deleteSkills: function(req, res) {
    db.deleteSections.deleteSkills(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted skills');
    })
  },

  deleteVolunteer: function(req, res) {
    db.deleteSections.deleteVolunteer(req.params.id, function(err, result) {
      res.status(200).send('Successfully deleted volunteer experience');
    })
  }



};
