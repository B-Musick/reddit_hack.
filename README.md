moment.js
- Good way to interact with dates
- https://momentjs.com/docs/#/displaying/fromnow/


ERRORS

1. 'TypeError: Router.use() requires a middleware function but got a Object'
- SOLUTION --> https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object

2. Cannot POST if you define the app.use() for the route as something, then add the extenstion in the route file as well. So for app.use('/:id/comments', commentRoutes) and also had the post route as '/:id/comments' so I had to change the app.use in app.js to app.use('/') just the root.