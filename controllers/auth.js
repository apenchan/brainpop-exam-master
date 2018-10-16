var express = require ('express');
var router = express.Router();
// var mongoose = require('mongoose');
var passport = require('../server/models/passport.js');
var User = require('../server/models/userModel.js');
var jwt = require('jsonwebtoken');

//Start passport
router.use(passport.initialize());

router.post('/register', function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) {
      console.log(err)
      res.status(500).end();
    }
    console.log(user);
    res.send(user.username);
  });
});

router.post('/login', passport.authenticate('local', { session: false }), function(req, res, next) {
  console.log('==========================');
	console.log('req.body: ' + req.user._id);
	console.log('==========================');

	var token = jwt.sign({user: req.user._id}, process.env.JWT_SECRET, {
		expiresIn: 1400
	});

	var username = req.user.username;
	var userId = req.user._id;

	console.log(token);
	res.json({ 
		token: token, 
		userId: userId,
		username: username
	});
});




module.exports = router;