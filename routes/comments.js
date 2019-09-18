var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var Comment = require('../models/comment');
var middleware = require('../middleware');

router.post('/:id/comments', middleware.isLoggedIn,  (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) {
            console.log("Err post: " + err);
            res.redirect('/');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    
                    console.log(err);
                } else {

                    comment.user.id = req.user._id;
                    comment.user.username = req.user.username;
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