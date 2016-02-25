var express = require('express');
var router = express.Router();
var Play = require('../models/play');
var Player = require('../models/player');

router.get('/', function(req, res) {
    Play.find({}, function(err, plays) {
        if (err) res.send(err);
        // res.send(plays);
        res.render('plays/index', {plays:plays})
    })
});

router.route('/new')
    .get(function(req, res) {
        Player.find({}, function(err, players) {
            if (err) res.send(err);
            res.render('plays/new', {players:players})
        });
}).post(function(req, res) {
    console.log(req.body);
    var playerArray = [];
    if (req.body.player1 !== 'false') {
        playerArray.push(req.body.player1);
        Player.findById(req.body.player1, function(err, player) {
            player.played +=1;
            player.save();
        });
    };
    if (req.body.player2 !== 'false') {
        playerArray.push(req.body.player2);
        Player.findById(req.body.player2, function(err, player) {
            player.played +=1;
            player.save();
        });
    };
    if (req.body.player3 !== 'false') {
        playerArray.push(req.body.player3);
        Player.findById(req.body.player3, function(err, player) {
            player.played +=1;
            player.save();
        });
    };
    if (req.body.player4 !== 'false') {
        playerArray.push(req.body.player4);
        Player.findById(req.body.player4, function(err, player) {
            player.played +=1;
            player.save();
        });
    };
    if (req.body.player5 !== 'false') {
        playerArray.push(req.body.player5);
        Player.findById(req.body.player5, function(err, player) {
            player.played +=1;
            player.save();
        });
    };
    console.log(playerArray);
    var newPlay = Play({
        game:req.body.game,
        players:playerArray,
        winner: req.body.winner
    });

    // res.send(newPlay);
    newPlay.save(function(err) {
        if (err) console.log(err);
    });
    res.redirect('/plays');
});

router.route('/:id')
    .get(function(req,res) {
        Play.findById(req.params.id, function(err, play) {
            if (err) console.log(err);
            // res.send(play);
            res.render('plays/show', {play:play});
        });
    }).delete(function(req,res) {
        Play.findByIdAndRemove(req.params.id, function(err, play) {
            if (err) console.log(err);
            res.send('deleted');
        })
    });

module.exports = router;
