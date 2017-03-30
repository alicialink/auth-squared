let express = require('express')
let users = require('../users-model')
let router = express.Router()

router.get('/', (req, res) => {
  if ('username' in req.session) {
    res.redirect('/pass')
  }
  else {
    res.render('login', {})
  }
})

router.get('/fail', (req, res) => {
  if ('username' in req.session) {
    res.redirect('/pass')
  }
  else {
    res.render('fail', {})
  }
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
    .then((authenticationSuccessful) => {
      if (authenticationSuccessful !== null) {
        req.session.username = username
        res.redirect('/pass')
      }
      else {
        req.session = null
        res.redirect('/fail')
      }
    })
})

router.post('/logout', (req, res) => {
  req.session = null
  res.redirect('/')
})

module.exports = router
