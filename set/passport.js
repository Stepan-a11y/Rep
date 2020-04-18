const set = require('../set/data');
const Stud = require('../shems/stud');
const Lect = require('../shems/rep');

let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

    module.exports = function(passport) {
      let opts = {}
      opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
      opts.secretOrKey = set.secret;
      passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
          Stud.findOne({id: jwt_payload.sub}, function(err, user) {
              if (err) {
                  return done(err, false);
              }
              if (user) {
                  return done(null, user);
              } else {
                  return done(null, false);
              }
          });
      }));
    };

    module.exports = function(passport) {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = set.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      Lect.findOne({id: jwt_payload.sub}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              return done(null, user);
          } else {
              return done(null, false);
          }
      });
  }));
};
