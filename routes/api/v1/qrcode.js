const router = require('express').Router()
const QRCode = require('qrcode')
const bodyParser = require('body-parser')

router.post('/', bodyParser(), async(req, res, next) => {
  console.log('Post/qrcode>body:', req.body)
  QRCode.toDataURL(req.body.content || 'I am a pony!', function (err, url) {
    console.log(url)
    res.send({
      code: 0,
      data: {
        url
      }
    })
  })
})

module.exports = router
