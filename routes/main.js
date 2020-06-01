const express = require('express');
const router = express.Router();
const set = require('../set/data');
const Stud = require('../shems/stud');

//Попытка отобразить список студентов из базы на странице


router.get('/getStud', (req, res) => {
     Stud.find({}, (err, stud) => {
       if(err) throw err;
       return res.status(200).json({
         status:'success',
         data: stud
       })
     });
});

module.exports = router;
