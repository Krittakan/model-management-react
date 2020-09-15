// Define a JSON Schema
var schema = {
	type: 'object',
	required: ['fullname'],
	properties: {
		fullname: {
			type: 'string'
		},
		campus: {
			type: 'string'
		}
	}
};

var data = {
	fullname: null,
	campus: null
};

module.exports = {
	schema,
	data
};