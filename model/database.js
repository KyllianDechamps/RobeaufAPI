var mysql = require('mysql');
require('dotenv/config')
//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASS,
    database : process.env.DB
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
