const router = require('express').Router()
const bodyParser = require('body-parser')

router.get('/', async(req, res, next) => {
  res.send({
    code: 0,
    data: {
      string: 'string',
      number: 112233,
      bool: true,
      symbol: Symbol(),
      NULL: null,
      UNDEFINED: undefined,
      NAN: NaN,
      Infinity: Infinity,
      date: new Date(),
      regex: /\w+/,
      map: new Map([[1, 'one']]),
      set: new Set([1, 2, 3]),
      func: function () {}
    }
  })
})

router.post('/', bodyParser(), async(req, res, next) => {
  const body = req.body
  console.log('req>json>body:')
  console.log(JSON.stringify(body, null, 2))
  res.send({
    code: 0,
    json: body
  })
})

module.exports = router
