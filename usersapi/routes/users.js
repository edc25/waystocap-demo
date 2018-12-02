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

let setUserProperties = function(values){
  var updated = {};
  updated['email'] = values['email'];
  updated['name'] = values['name'];
  if (values['imageChanged'])
  {
    updated['image'] = new Buffer(values['image'], "base64");
    updated['imageType'] = values['imageType'];
  }
  return updated;
}

router.post('/', function(req,res){ 
  
  var updated = setUserProperties(req.body);
  User.create(updated).then(user => {
    res.json(user);
  })
  .catch(err => {
    logger.error(err);
    res.status(500).send(err);
  });
});

router.put('/:id', function(req,res){
  var user_id = req.params.id;

  var updated = setUserProperties(req.body);
  

  User.findByIdAndUpdate(user_id, updated, function(err, values) {
    if (!err) {
        res.json("okay");
    } else {
        res.write("fail");
    }
  });
})

router.get('/:id/avatar', function(req,res){
  User.findById(req.params.id, function(err,user){
    console.log(user.imageType);
    console.log(user.name);
    console.log(req.params.id)
    if (user.image && user.imageType)
    {
      console.log('sending image of type ' + user.imageType);
      res.contentType(user.imageType);
      console.log(user.image);
      res.end(user.image, "binary");
    }
    else{
      res.statusCode=404;
      res.send("");
    }
  }).select('image imageType');
})

module.exports = router;
