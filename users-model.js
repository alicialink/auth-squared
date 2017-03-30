// Never do this except for quick tests
let stupidUsername = 'cookie'
let stupidPassword = 'monster'

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    if (username === stupidUsername && password === stupidPassword) {
      resolve(true)
    }
    else {
      resolve(false)
    }
  })
}

module.exports = {
  authenticate: authenticate
}
