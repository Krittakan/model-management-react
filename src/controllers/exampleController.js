const express = require('express');
const dataValidator = require('../utils/dataValidator');
var {ValidationError } = require('express-json-validator-middleware');

var userModel = require('../models/userInfo');
var ajv = new dataValidator();

const index = (req, res, next) => {
	//userModel.data.fullname = 'John Due';
	userModel.data.campus = 'มหาวิทยาลัยเกษรศาสตร์บางเขน';

	var validate = ajv.jsonValidate(userModel);

	if (validate.valid) {
		res.send(validate.data);
	} else {
		next(new ValidationError(validate.data));
		//throw new ValidationError(validate.data);
	}
};
module.exports = {index};