const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const set = require('../set/data');

const StudShema = mongoose.Schema({
  firstName: {
  type: String,
  required: true
},
lastName: {
  type: String,
  required: true
},
email: {
  type: String,
  required: true
},
login: {
  type: String,
  required: true
},
password: {
  type: String,
  required: true}
});

const Stud = module.exports = mongoose.model('Stud', StudShema);

module.exports.getUserByLogin = function(login, callback) {
   const query = {login: login};
   Stud.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
   Stud.findById(id, callback);
};


module.exports.AddStud = function(newStud, callback) {
   bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(newStud.password, salt, (err, hash) => {
       if(err) throw err;
        newStud.password = hash;
        newStud.save(callback);
     });
   });
};

module.exports.compPass = function(passFromUser, userDBPass, callback) {
   bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
     if(err) throw err;
     callback(null, isMatch);
   });
};
