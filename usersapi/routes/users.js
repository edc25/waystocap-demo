var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return console.error(err);
    res.json(users);
  })
});

router.post('/', function(req,res){
 // const data = Object.assign(req.body, { user: req.user.sub }) || {};
 
  User.create(req.body).then(user => {
    res.json(user);
  })
  .catch(err => {
    logger.error(err);
    res.status(500).send(err);
  });
});

module.exports = router;
