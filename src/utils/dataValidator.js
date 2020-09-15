const Ajv = require('ajv');
var ajv = Ajv({allErrors: true});

class dataValidator{
	jsonValidate(object){
		var ajvValidate = ajv.compile(object.schema);
		var isValid = ajvValidate(object.data);

		if (isValid) {
			return {
				valid:isValid,
				data: object.data
			};
		} else {
			ajvValidate.errors.oop = "sss";
			return {
				valid:isValid,
				data: ajvValidate.errors
			};
		}
	}
}
module.exports = dataValidator;