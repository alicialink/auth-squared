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

router.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password

  res.redirect('/pass')
})

module.exports = router
