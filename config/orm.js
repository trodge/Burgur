const connection = require('./connection.js');
module.exports = {
    selectAll: callBack => {
        connection.query('SELECT * FROM burgers', callBack);
    },
    insertOne: (data, callBack) => {
        connection.query('INSERT INTO burgers SET ?', data, callBack);
    },
    updateOne: (data, select, callBack) => {
        connection.query('UPDATE burgers SET ? WHERE ?', [data, select], callBack);
    }
};