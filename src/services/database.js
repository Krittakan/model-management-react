const mysql = require('mysql2');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.HOST,
	user: process.env.USER,
	port: 3388,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

const promisePool = pool.promise();

module.exports = promisePool;