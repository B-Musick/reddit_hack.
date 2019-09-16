let mongoose = require('mongoose'),
    Comment    = require('./models/comment'),
    Post    = require('./models/post');

let data = [
    {
        title: "Terry Fox",
        text: "This is a tribute",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
]

function seedDB() {
    Post.remove({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Removed Posts from Database!');

        data.forEach((seed) => {
            // For each post in the array create a post and add comments
            Post.create(seed, (err, post) => {
                if (err) {
                    console.log(err);
                }

                console.log('Added Post!');

                Comment.create({
                    user: 'Brendan',
                    comment: 'I suck balls'
                }, (err, createdComment) => {
                    if (err) {
                        console.log(err);
                    } else {
                        post.comments.push(createdComment);
                        post.save();
                        console.log('Added a comment!');
                    }
                });

            });
        });
    });
};

module.exports = seedDB;
