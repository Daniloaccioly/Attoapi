var express = require('express');

// Import controllers
const UserController = require('../controllers/UserController');

//Create router
var router = express.Router();

/* GET users listing. */
router.get('/users', UserController.index);
router.post('/users', UserController.store);

router.get('/', function(req, res, next) {
  res.send('help');
});

module.exports = router;
