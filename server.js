const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 6100

app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({extended: false}))

// 设置允许跨域访问该服务.
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use('/api/v1', require('./routes/api/v1'))

app.listen(port, () => {
  console.log('VueRandom listen on port:', port, new Date().toLocaleString())
})

