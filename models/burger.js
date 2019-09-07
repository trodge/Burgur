const orm = require('../config/orm.js');
module.exports = {
    create: (dt, cB) => orm.insertOne(dt, cB),
    read: cB => orm.selectAll(cB),
    eat: (i, cB) => orm.updateOne({ devoured: true }, { id: i }, cB)
};