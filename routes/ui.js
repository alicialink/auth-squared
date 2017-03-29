let express = require('express')
let users = require('../users')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('login', {})
})

router.get('/fail', (req, res) => {
  res.render('fail', {})
})

router.get('/pass', (req, res) => {
  let username = req.session.username
  res.render('pass', {username: username})
})

router.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password

  users
    .authenticate(username, password)
    .then((result) => {
      if (result) {
        req.session.username = username
        res.redirect('/pass')
      }
      else {
        res.redirect('/fail')
      }
    })
})

router.post('/logout', (req, res) => {
  res.session = null
  res.redirect('/')
})

module.exports = router
