const mongoose = require('mongoose');
const set = require('../set/data');

const KursShema = mongoose.Schema({
  student: {
    type: Object,
    required: true
  },
  lector: {
    type: Object,
    required: true
  },
  kurs: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Kurs = module.exports = mongoose.model('Kurs', KursShema);
