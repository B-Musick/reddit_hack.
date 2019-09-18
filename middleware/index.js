var middlewareObj = {};
var Post = require('../models/post');
var Comment = require('../models/comment');

middlewareObj.isLoggedIn =
    (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');

    }

module.exports = middlewareObj
