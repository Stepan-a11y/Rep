const express = require('express');
const router = express.Router();
const set = require('../set/data');
const Stud = require('../shems/stud');
const Lect = require('../shems/rep');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/regStud', (req, res) => {
     let newStud = new Stud({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       login: req.body.login,
       password: req.body.password
     });

     Stud.AddStud(newStud, (err, user) => {
          if(err)
           res.json({success: false, msg: "not add"});
         else
           res.json({success: true, msg: "add successful"});
        });
});

router.post('/regLect', (req, res) => {
    let newLect = new Lect({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       login: req.body.login,
       password: req.body.password,
       subject: req.body.subject,
       stage: req.body.stage
     });

     Lect.AddLect(newLect, (err, user) => {
       if(err)
        res.json({success: false, msg: "not add"});
      else
        res.json({success: true, msg: "add successful"});
     });
});

module.exports = router;
