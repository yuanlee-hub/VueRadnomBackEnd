const router = require('express').Router()
const cookieParser = require('cookie-parser')

// cookies
router.use(cookieParser(), async(req, res, next) => {
    console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',new Date().toLocaleString())
    console.warn(req.method, req.url)
    console.warn('req.headers:', JSON.stringify(req.headers, null, 2))
    console.warn('req.cookies:', JSON.stringify(req.cookies, null, 2))
    console.warn('req.query:', JSON.stringify(req.query, null, 2))
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    next()
})

// API
router.use('/cookie', require('./cookie'))
router.use('/qrcode', require('./qrcode'))
router.use('/json', require('./json'))

module.exports = router
