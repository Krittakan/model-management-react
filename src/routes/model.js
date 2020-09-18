const express = require('express');
var router = express.Router();

var multer = require('multer');

var controller = require('../controllers/modelController');

router.post(
    '/model/list',
    controller.getListModel
);

router.post(
    '/model/create',
    multer().none(),
    controller.createModel
);

router.get(
    '/model/:id',
    controller.detailModel
);

router.get(
    '/model/delete/:id',
    controller.deleteModel
);

module.exports = router;