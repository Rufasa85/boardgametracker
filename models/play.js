var mongoose = require('mongoose');
var Player = require('./player.js');

var PlaySchema = mongoose.Schema({
    game: String,
    players: [{type:mongoose.Schema.Types.ObjectId, ref:'Player'}],
    winner: String
});

module.exports = mongoose.model('Play', PlaySchema);
