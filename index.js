const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

const set = require('./set/data');
const pc = require('./routes/pc');


const rep = express();

const port = 7777;

rep.use(passport.initialize());
rep.use(passport.session());


rep.use(cors());
rep.use(bodyParser.json());

require('./set/passport')(passport);

mongoose.connect(set.data, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log("sucsses");
});

mongoose.connection.on('error', (err) => {
  console.log("not sucsses" + err);
});

rep.use('/pc', pc);

rep.listen(port, ()=>{
  console.log("connected");
});
