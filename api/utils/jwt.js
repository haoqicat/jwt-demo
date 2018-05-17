const jwt = require('jsonwebtoken')
const { CERT } = require('../config')

const generateToken = user => {
  // sign 是同步的
  return jwt.sign(user, CERT, {
    expiresIn: 1000 // 单位是秒
  })
}

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, CERT, function(err, decoded) {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ msg: '认证码失效，请重新登录!' })
        } else {
          return res.status(401).json({ msg: '认证失败！' })
        }
      } else {
        if (decoded.admin === true) {
          next()
        } else {
          res.status(401).json({ msg: '认证失败！' })
        }
      }
    })
  } else {
    return res.status(403).json({
      msg: '请提供认证码！'
    })
  }
}

module.exports = { requireAuth, generateToken }
