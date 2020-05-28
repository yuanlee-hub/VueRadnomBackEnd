const router = require('express').Router()

router.get('/', async(req, res, next) => {
  const token = Date.now()
  res.cookie('token', token)
  res.cookie('expires', '2020-06-25')
  res.cookie('maxAge', 3600 * 24)
  res.cookie('test-1', 'test-1')
  res.cookie('test-2', 'test-2')
  res.cookie('Object', JSON.stringify({name:'Tom',age:20}))

  res.send({
    code: 0,
    data: {
      name: 'Cookie',
      token
    }
  })
})

module.exports = router
