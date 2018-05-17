const User = require('../models/user.js')

exports.signup = async (req, res) => {
  try {
    const u = new User(req.body)
    await u.save()
    res.json({
      id: u._id,
      username: u.username
    })
  } catch (err) {
    res.status(406).json({ msg: '用户名重复' })
  }
}

exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const u = await User.findOne({ username })
    if (!u.comparePassword(password)) throw Error('密码错误')
    res.json({
      username: u.username
    })
  } catch (err) {
    res.status(406).json({ msg: '用户名密码错误' })
  }
}
