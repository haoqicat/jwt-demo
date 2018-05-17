const User = require('../models/user.js')

exports.signup = async (req, res) => {
  try {
    const u = new User(req.body)
    await u.save()
    res.json({
      token: generateToken({ username: u.username, admin: u.admin })
    })
  } catch (err) {
    res.status(406).json({ msg: '用户名重复' })
  }
}

const { generateToken } = require('../utils/jwt')

exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const u = await User.findOne({ username })
    if (!u.comparePassword(password)) throw Error('密码错误')
    res.json({
      token: generateToken({ username: u.username, admin: u.admin })
    })
  } catch (err) {
    res.status(406).json({ msg: '用户名密码错误' })
  }
}
