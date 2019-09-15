let express = require('express')
    router  = express.Router();

let Post = require('../models/post');

router.get('/', (req, res) => {
    Post.find({}, (err, foundPosts) => {
        // Return the posts from the database {} of the Post schema type
        err ? console.log(err) : res.render('index', { posts: foundPosts })
    })
});

/************************** POST ROUTES ************************************** */

// NEW ROUTE
router.get('/new-post',(req,res)=>{
    // Get the 'new' post page
    res.render('posts/new');
})

// CREATE ROUTE
router.post('/',(req,res)=>{
    // Send post requrest to landing page the post to the landing page
    let newPost = {title:req.body.title, text:req.body.text, image:req.body.image};

    Post.create(newPost,(err,post)=>{
        // If post works then redirect to the landing page
        err ? console.log(err):res.redirect('/');
    })
})

// SHOW ROUTE
router.get('/:id',(req,res)=>{
    Post.findById(req.params.id,(err,showPost)=>{
        err ? console.log(err):res.render("posts/show", {post:showPost})
    })
})

module.exports = router;