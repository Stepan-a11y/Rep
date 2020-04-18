const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const set = require('../set/data');


const LectSchema = mongoose.Schema({
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
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  }
});

const Lect = module.exports = mongoose.model('Lect', LectSchema);


module.exports.getUserByLogin = function(login, callback) {
   const query = {login: login};
   Lect.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
   Lect.findById(id, callback);
};


module.exports.AddLect = function(newLect, callback) {
   bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(newLect.password, salt, (err, hash) => {
       if(err) throw err;
        newLect.password = hash;
        newLect.save(callback);
     });
   });
};


module.exports.compPass = function(passFromUser, userDBPass, callback) {
   bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
     if(err) throw err;
     callback(null, isMatch);
   });
};
