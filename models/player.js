var mongoose = require('mongoose');

var PlayerSchema = mongoose.Schema({
    name: String,
    played: Number,
    won: Number
})

module.exports = mongoose.model('Player', PlayerSchema);
