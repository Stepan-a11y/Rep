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


router.post('/authStud', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    Stud.getUserByLogin(login, (err, stud) => {
      if(err) throw err;
      if(!stud)
         return res.json({success: false, msg: "user not found"});

    Stud.compPass(password, stud.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
          const token = jwt.sign(stud.toJSON(), set.secret, {
            expiresIn: 3600 * 24
          });

          res.json({
              success: true,
              token: 'JWT' + token,
              stud: {
                id: stud._id,
                firstName: stud.firstName,
                lastName: stud.lastName,
                login: stud.login,
                email: stud.email
              }
            });

          } else
    return res.json({success: false, msg: "password not match"});
  });
    });
    });






router.post('/authLect', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    Lect.getUserByLogin(login, (err, user) => {
      if(err) throw err;
      if(!user)
         return res.json({success: false, msg: "user not found"});

    Lect.compPass(password, lect.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
          const token = jwt.sign(lect.toJSON(), config.secret, {
            expiresIn: 3600 * 24
          });

          res.json({
              success: true,
              token: 'JWT' + token,
              lect: {
                id: lect._id,
                firstName: lect.firstName,
                lastName: lect.lastName,
                login: lect.login,
                email: lect.email
              }
            });
          } else
    return res.json({success: false, msg: "password not match"});
  });
    });
    });


    router.get('/perscab', passport.authenticate('jwt', {session: false}), (req, res) => {
         res.send('personal cabinet');
    });


module.exports = router;
