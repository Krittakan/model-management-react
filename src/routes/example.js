const express = require('express');
var router = express.Router();

var controller = require('../controllers/exampleController');

router.get('/', controller.index);
module.exports = router;