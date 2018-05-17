const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    // 用户名，密码不能为空，在客户端判断，服务器就不给出相关报错处理了
    username: { type: String, unique: true },
    password: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
