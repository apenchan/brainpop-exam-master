var express = require ('express');
var router = express.Router();
var passport = require('../server/models/passport.js');
var User = require('../server/models/userModel.js');

// router.use(passport.authenticate('jwt', { session: false }));


// router.use(passport.authenticate('jwt', { session: false }));

router.post('/register', function (req, res){
	User.create(req.body, function(err, user){
		if (err) {
			console.log(err)
			res.status(500).end();
		}
		res.send(true);
	});
});

router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log(err)
    } else {
      res.send(user)
    }
  })
})


module.exports = router;