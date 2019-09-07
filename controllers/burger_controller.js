const burger = require('../models/burger.js');
const router = require('express').Router();
router.get('/', (req, res) => {
    burger.read((err, burgers) => {
        if (err) throw err;
        console.log(burgers);
        let etn = [], ntn = [];
        burgers.forEach(b => (b.devoured ? etn : ntn).push(b));
        res.render('index', { eaten: etn, uneaten: ntn });
    });
});
router.post('/api/create', (req, res) => {
    console.log(req.body);
    burger.create(req.body, (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
});
router.put('/api/eat', (req, res) => {
    console.log(req.body);
    burger.eat(req.body.id, (err, result) => {
        if (err) res.send(err);
        res.send(result);
    })
})
module.exports = router;