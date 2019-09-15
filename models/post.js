let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String, 
    date: {type: Date, default: Date.now }
    // user: 
})

module.exports = mongoose.model('Post', postSchema)