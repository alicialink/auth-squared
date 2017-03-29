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
  res.render('pass', {})
})

router.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password

  // if (users.authenticate(username, password)) {
  //   console.log('They passed!')
  // }
  // else {
  //   console.log('They failed')
  // }

  users
    .authenticate(username, password)
    .then((result) => {
      if (result) {
        console.log('PASSED as promised')
      }
      else {
        console.log('FAILED as promised')
      }
    })

  // res.redirect('/fail')
})

router.post('/logout', (req, res) => {
  res.redirect('/')
})

module.exports = router
