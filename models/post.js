let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String, 
    date: {type: Date, default: Date.now },
    comments: [
        {
        // Holds comments ID which it will reference to retrieve it
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
        }
    ]
    // user: 
})

module.exports = mongoose.model('Post', postSchema)