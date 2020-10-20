var express = require('express');

// Import books-controller
//const usersRoutes = require('./../controllers/Controller.js')

//Create router
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
