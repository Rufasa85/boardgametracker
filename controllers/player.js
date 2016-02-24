var express = require('express');
var router = express.Router();
var Player = require('../models/player');

router.get('', function(req, res) {
    Player.find({}, function (err, players) {
        if (err) res.send(err);
        // res.send(players);
        res.render('players/index', {players:players});
    });
});


router.route('/new')
    .get(function(req,res) {
        res.render('players/new');
    })
    .post(function(req, res) {
        var newPlayer = Player({
            name:req.body.name,
            won:0,
            played:0
        });
        newPlayer.save(function (err) {
            if (err) console.log(err);
        });
        res.redirect('/players');
    });

module.exports = router;
