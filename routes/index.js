let express = require('express')
router = express.Router(), passport = require('passport');

let User = require('../models/user');
let Post = require('../models/post');

router.get('/', (req, res) => {
    Post.find({}, (err, foundPosts) => {
        // Return the posts from the database {} of the Post schema type
        err ? console.log(err) : res.render('index', { posts: foundPosts, currentUser: req.user })
    })
});

// LOGOUT ROUTE
router.get('/logout', function (req, res) {
    req.logout();
    // req.session.destroy();
    res.redirect('/');


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
    Post.findById(req.params.id).populate('comments').exec((err,showPost)=>{
        err ? console.log(err):res.render("posts/show", {post:showPost})
    })
})

// REGISTER ROUTES

// Register post route
router.post('/register', (req, res) => {
    var newUser = new User({ username: req.body.username });

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(user);
            return res.render('index');
        } else {
            passport.authenticate('local')(req, res, () => res.redirect('/'));
        }
    })
})

// LOGIN POST ROUTE


router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }
), (req, res) => { });




module.exports = router;