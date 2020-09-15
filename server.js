const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { ValidationError } = require('express-json-validator-middleware');
const app = express();
//Read .env
dotenv.config();

app.set("port", process.env.PORT);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

var examples = require('./src/routes/example');

app.use('/api/', examples);

// Error handler for valication errors
app.use(function(err, req, res, next) {
	if (err instanceof ValidationError) {
			res.status(400).send(err);
			next();
	}
	else {
		next(err)
	};
});

app.listen(app.get("port"), () => {
  console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});