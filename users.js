function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    resolve(false)
  })
}

module.exports = {
  authenticate: authenticate
}
