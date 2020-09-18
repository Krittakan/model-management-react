const express = require("express");
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');
const fs = require('fs');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const { ValidationError } = require('express-json-validator-middleware');

//Read .env
dotenv.config();

const app = express();

// ------- LOG -------
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const logDir = 'log';
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

var accessLogStream = rfs.createStream('access.log', {
	interval: '1d', // rotate daily
	path: path.join(__dirname, 'log')
})

const dailyRotateFileTransport = new transports.DailyRotateFile({
	filename: `${logDir}/error-%DATE%.log`,
	datePattern: 'YYYY-MM-DD'
});

var wLogger = createLogger({
	format: format.combine(
		format.simple(),
		format.errors({ stack: true }),
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.prettyPrint(),
	),
	transports: [
		dailyRotateFileTransport
	]
});
// -------------------

app.set("port", process.env.PORT);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	// setup the logger
	app.use(morgan(':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
		, {
			stream: accessLogStream
		}));
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var modelRoute = require('./src/routes/model');

app.use('/api/', modelRoute);

// Error handler for valication errors
var resError = require('./src/models/resError');
app.use(async function (err, req, res, next) {
	let resErrs = new resError();
	wLogger.error(err);
	if (err instanceof ValidationError) {
		resErrs.errors.push(err);
		res.status(400).send(resErrs);
		next();
	}
	else {
		let ee = {
			name: err.name,
			code: err.code,
			message: err.message
		}
		resErrs.errors.push(ee);
		res.status(500).send(resErrs);
		next();
	};
});

app.listen(app.get("port"), () => {
	console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
	console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});