const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

module.exports = mongoose.model('Dog', dogSchema);