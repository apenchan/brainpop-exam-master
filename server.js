const express = require('express');
var path = require('path');
const app = express();
var passport = require('passport');
var bodyParser = require('body-parser');
var auth = require('./controllers/auth.js');
var user = require('./controllers/user.js');
var mongoose = require('mongoose')
var db = process.env.MONGODB_URI || "mongodb://localhost/brainpop-exam";
mongoose.connect(db);
var port = process.env.PORT || 3000;

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(express.static('./controllers'));
app.use(express.static('./server'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

var auth = require('./controllers/auth.js');
app.use('/auth', auth);

var user = require('./controllers/user.js');
app.use('/user', user);

app.get('/currentuser', function(req, res, next) {
  console.log('user is' + user);
  User.findById(req.params._id).then(function(err, user) {
    if(err){
      console.log(err)
    } else {
      res.send(user)
    }
	});
});

//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});