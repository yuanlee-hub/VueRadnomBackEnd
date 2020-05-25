const router = require('express').Router()

router.get('/', async(req, res, next) => {
  res.send({
    code: 0,
    data: {
      name: 'Cookie',
      token: Date.now()
    }
  })
})

module.exports = router
