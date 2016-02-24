var mongoose = require('mongoose');

var PlaySchema = mongoose.Schema({
    game: String,
    players: [mongoose.Schema.Types.ObjectId],
    winner: String
});

module.exports = mongoose.model('Play', PlaySchema);
