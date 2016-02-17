var mongoose = require('mongoose');

var PlaySchema = mongoose.Schema({
    game: String,
    players: [String],
    winner: String
});

module.exports = mongoose.model('Play', PlaySchema);
