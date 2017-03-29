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
  if ('username' in req.session) {
    let username = req.session.username
    res.render('pass', {username: username})
  }
  else {
    res.redirect('/')
  }
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
  req.session = null
  res.redirect('/')
})

module.exports = router
