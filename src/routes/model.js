const express = require('express');
var router = express.Router();
const fs = require('fs');
var multer = require('multer');
var upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let path = `./uploads/model/${file.fieldname}/test`;
            fs.mkdirSync(path, {recursive: true});
            callback(null, path);
        },
        filename: (req, file, callback) => {
            callback(null, Date.now()+ '_' +file.originalname  );
        }
    })
})

var controller = require('../controllers/modelController');

router.post(
    '/model/list',
    controller.getListModel
);

router.post(
    '/model/add',
    upload.any(),
    controller.addModel
);

router.get(
    '/model/:id',
    controller.detailModel
);

router.get(
    '/model/androidFile/:id',
    controller.getAndroidFilelModel
);


router.get(
    '/model/delete/:id',
    controller.deleteModel
);

module.exports = router;