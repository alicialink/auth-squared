let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('login', {})
})

router.get('/fail', (req, res) => {
  res.render('fail', {})
})

router.get('/pass', (req, res) => {
  res.render('pass', {})
})

module.exports = router
