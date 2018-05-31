const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/main', (req, res) => {
    res.render('beginning')
})

app.get('/middle', (req, res) => {
    res.render('middle')
})

app.get('/theend', (req, res) => {
    res.render('theend')
})

app.get("*", (req, res) => {
    res.redirect("/main");
})

app.listen(3000, () => {
    console.log('server running')
})