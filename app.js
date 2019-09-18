let express  = require('express'),
    app      = express(),

    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    moment = require('moment'), 
    passport = require('passport'),
    LocalStrategy = require('passport-local');
    
;

let seedDB = require('./seed.js');

// ROUTES
let indexRoutes = require('./routes/index');
var commentRoutes = require('./routes/comments');

// MODELS
let Post = require('./models/post');
let Comment = require('./models/comment');
let User = require('./models/user');

// METHOD-OVERRIDE
var methodOverride = require('method-override');


/************************PASSPORT CONFIGURATION ***************************/
app.use(require('express-session')({
    secret: 'You are the coolest',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('view engine', 'ejs'); // Dont have to add .ejs to files
// Another type of encoding is multipart/form-data used to upload binary files
// We will use urlencoded

// Takes request body and parses into JS object which will give the input ‘name’ attribute a value which is input by the user. (used to get form body)
// Make sure it is the first above all other app.use methods, otherwise it wont allow creation of schema
app.use(bodyParser.urlencoded({ extended: true }));


// PASS USER TO EVERY PAGE
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next(); // This moves to the next middleware route
});


app.use('/', indexRoutes);
app.use('/', commentRoutes);

// SERVE STATIC ASSETS
app.use(express.static(__dirname+'/public'));


// seedDB();
// TEST THE DATABASE
// Post.create({
//     title: 'TestPost',
//     image: 'Image-URL'
// })

// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
mongoose.connect("mongodb://localhost:27017/reddit"), { useNewUrlParser: true }; 

app.listen(3000,(req,res)=>{
    console.log('Site is up and running')
});