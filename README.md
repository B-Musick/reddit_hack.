moment.js
- Good way to interact with dates
- https://momentjs.com/docs/#/displaying/fromnow/

- <div>submitted <%=moment(post.date).fromNow()%> by</div>

REGISTER FORM
- I was able to frame a register form by attaching it to the header.ejs, then appying a script so that when the user hits sign up, a class is toggled on to dispay the form on top of everything
ERRORS

1. 'TypeError: Router.use() requires a middleware function but got a Object'
- SOLUTION --> https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object

2. Cannot POST if you define the app.use() for the route as something, then add the extenstion in the route file as well. So for app.use('/:id/comments', commentRoutes) and also had the post route as '/:id/comments' so I had to change the app.use in app.js to app.use('/') just the root.

3. Error: passport.initialize() middleware not in use
- https://stackoverflow.com/questions/16781294/passport-js-passport-initialize-middleware-not-in-use
- Things may be out of order in app.ejs file

4. Was getting cast error ''Cast to ObjectId failed for value "logout" at path "_id" for model "Post"',
- https://stackoverflow.com/questions/52946792/passport-logout-error-cast-to-objectid-failed-for-value-logout-at-path-id