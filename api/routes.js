const User = require('./controllers/user')
const Post = require('./controllers/post')
const { requireAuth } = require('./utils/jwt')

module.exports = app => {
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.post('/post', requireAuth, Post.new)
  app.get('/posts', Post.all)
}
