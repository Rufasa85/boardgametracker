var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var moongoose = require('mongoose');
var Play = require('./models/play.js');

var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/static/'));
moongoose.connect('mongodb://localhost/boardgametracker');


app.get('/', function(req, res) {
    res.render('index');
});

app.use('/plays', require('./controllers/play.js'))

app.listen(3000);
