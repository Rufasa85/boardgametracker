var express = require('express');
var router = express.Router();
var Player = require('..model/player');

router.get('', function(req, res) {
    res.render('players/index');
});


router.route('/new')
    .get(function(req,res) {
        render('players/new');
    })
    .post(function(req, res) {
        var newPlayer = Player.new({
            name:req.body.name,
            won:0,
            played:0
        });
        newPlayer.save();
        res.redirect('/plays');
    });

module.exports = router;
