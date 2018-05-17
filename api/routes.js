const User = require('./controllers/user')

module.exports = app => {
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
}
