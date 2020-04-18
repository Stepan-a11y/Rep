const mongoose = require('mongoose');
const set = require('../set/data');

const SubjShema = mongoose.Schema({
  name: {
    type: String,
    required: true
        }
});

const Subj = module.exports = mongoose.model('Subj', SubjShema);
