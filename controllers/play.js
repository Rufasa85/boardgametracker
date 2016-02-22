var express = require('express');
var router = express.Router();
var Play = require('../models/play');

router.get('/', function(req, res) {
    Play.find({}, function(err, plays) {
        if (err) res.send(err);
        // res.send(plays);
        res.render('plays/index', {plays:plays})
    })
});

router.route('/new')
    .get(function(req, res) {
        res.render('plays/new')
}).post(function(req, res) {
    console.log(req.body);
    var playerArray = req.body.players.split(', ');
    var newPlay = Play({
        game:req.body.game,
        players:playerArray,
        winner: req.body.winner
    });
    newPlay.save(function(err) {
        if (err) console.log(err);
    });
    res.redirect('/plays');
});

module.exports = router;
