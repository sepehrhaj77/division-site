const express = require('express');
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations 

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))//Sets a basic route
app.get('/', (req, res) => {
    var factor1 = Math.floor(Math.random() * 12) + 1;
    var factor2 = Math.floor(Math.random() * 12) + 1;
    var product = factor1 * factor2;
    res.render('main', {layout: 'index', factor1: factor1, factor2: factor2, product: product});
});
//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));