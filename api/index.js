const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello Client')
})

const User = require('./models/user.js')

app.post('/user/signup', (req, res) => {
  const u = new User(req.body)
  u.save()
  res.json({
    msg: 'saved'
  })
})

const { PORT, DB_NAME } = require('./config')

// mongoose START
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
const db = mongoose.connection
db.on('error', () => console.error('Mongo Failed to Connect!!!!'))
db.on('connected', () => console.log('Mongo Connected'))
// mongoose END

app.listen(PORT, () => console.log(`running on port ${PORT}...`))
