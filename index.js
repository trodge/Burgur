const express = require('express');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 8080;
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(require('./controllers/burger_controller.js'));
app.listen(PORT, () => {
    console.log('Server listening on localhost:' + PORT);
});