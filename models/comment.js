let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Refers to the model
        },
        username: String
    }, 

    comment: String,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', commentSchema);