const mysql = require('mysql');
if (process.env.JAWSDB_URL)
    module.exports = mysql.createConnection(process.env.JAWSDB_URL);
else
    module.exports = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'ODBC',
        password: 'erwq',
        database: 'burger_db'
    });