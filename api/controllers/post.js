const Post = require('../models/post.js')

exports.new = async (req, res) => {
  try {
    const p = new Post(req.body)
    await p.save()
    res.json({
      id: p._id,
      title: p.title,
      body: p.body
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: '保存错误' })
  }
}

exports.all = async (req, res) => {
  try {
    const data = await Post.find()
    const posts = data.map(t => ({
      id: t._id,
      title: t.title,
      body: t.body
    }))
    res.json(posts)
  } catch (err) {
    res.status(500).json({ msg: '服务器出错啦' })
  }
}
