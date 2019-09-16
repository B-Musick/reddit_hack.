var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var Comment = require('../models/comment');

router.post('/:id/comments',  (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) {
            console.log("Err post: " + err);
            res.redirect('/');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    
                    console.log(err);
                } else {

                    // comment.author.id = req.user._id;
                    // comment.author.username = req.user.username;
                    comment.save();
                    post.comments.push(comment);

                    post.save();
                    
                    res.redirect('/' + post._id);
                }
            });
        }
    })
});

module.exports = router;