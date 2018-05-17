const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema(
  {
    // 用户名，密码不能为空，在客户端判断，服务器就不给出相关报错处理了
    username: { type: String, unique: true },
    password: { type: String },
    admin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

UserSchema.pre('save', function(next) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(this.password, salt)
  this.password = hash
  next()
})

UserSchema.methods = {
  comparePassword(password) {
    // NODE: 因为涉及到使用 this ，所以要慎重使用 es6
    return bcrypt.compareSync(password, this.password)
  }
}

module.exports = mongoose.model('User', UserSchema)
