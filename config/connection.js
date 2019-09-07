const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'ODBC',
    password: 'erwq',
    database: 'burgers_db'
});