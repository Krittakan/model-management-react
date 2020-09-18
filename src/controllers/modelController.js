const dataValidator = require('../utils/dataValidator');
var { ValidationError } = require('express-json-validator-middleware');
var ajv = new dataValidator();

const model = require('../services/model');

const db = require('../services/database');

const getListModel = async (req, res, next) => {
    const modelService = new model();
    try {
        const modelListResult = await modelService.getListModel(req.body);

        res.send(modelListResult);
    } catch (error) {
        next(error);
    }
}


const createModel = async (req, res, next) => {
    try {
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

module.exports = { getListModel, createModel, detailModel, deleteModel };