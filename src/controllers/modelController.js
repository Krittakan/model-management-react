const dataValidator = require('../utils/dataValidator');
var { ValidationError } = require('express-json-validator-middleware');
var ajv = new dataValidator();

const model = require('../services/model');

const db = require('../services/database');

const getListModel = async (req, res, next) => {
    const modelService = new model();
    try {
        const modelListResult = await modelService.getList(req.body);

        res.send(modelListResult);
    } catch (error) {
        next(error);
    }
}


const addModel = async (req, res, next) => {
    const modelService = new model();
    try {
        const insertModelResult = await modelService.insert(
            req.body.title,
            req.body.description,
            req.files[0].filename,
            req.files.length > 1 ? req.files[1].filename : null,
            "test"
        );

        console.log(insertModelResult);

        res.send("Created");
    } catch (error) {
        next(error);
    }
}

const detailModel = async (req, res, next) => {
    const modelId = req.params.id;
    try {
        res.send("Detail");
    } catch (error) {
        next(error);
    }
}

const deleteModel = async (req, res, next) => {
    const modelId = req.params.id;
    try {
        res.send("Deleted");
    } catch (error) {
        next(error);
    }
}

module.exports = { getListModel, addModel, detailModel, deleteModel };