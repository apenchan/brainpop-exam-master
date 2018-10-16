var User = require('./userModel.js');
var LocalStrategy = require('passport-local').Strategy;
const passport = require('passport')
const bcrypt = require('bcrypt')
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var JwtOpts = {};

var util = require("util");
JwtOpts.jwtFromRequest = function(req) {
  var token = null;
  if (req && req.session) {
      token = req.session['jwt_token'];
  }
  return token;
};

JwtOpts.secretOrKey = process.env.JWT_SECRET;


passport.use(new JwtStrategy(JwtOpts, function(jwt_payload, done) {
    console.log( "JWT PAYLOAD" + util.inspect(jwt_payload));

    User.findOne({username: jwt_payload._doc.username}, function(err, user) {

        if (err) {
            return done(err, false);
        }

        if (user) {
            console.log("user is " + user.username + "I am line 31!!!!!!!!!!!!!!!!!!!!!!!!!!")
            done(null, user);
        } else {
            done(null, false);
        }
    });
}));

passport.use( new LocalStrategy(
  function(username, password, done ) {
    console.log('I got this')
    User.findOne({ username: username}, function( err, dbUser ) {
      console.log(username)
      console.log("++++++++++++++++++++++++++++++++")
      console.log(dbUser)
      console.log("++++++++++++++++++++++++++++++++")
      if (err) { 
        return done(err); }
      if (!dbUser) {
        return done(null, false);
      }
      if (!dbUser.verifyPassword(password)) {
        return done(null, false);
      }

      return done(null, dbUser);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


module.exports = passport;