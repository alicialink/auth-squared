let db = require('./knex')

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    db
      .select('id', 'username', 'password')
      .from('users')
      .where({ username: username })
      .then((queryResult) => {
        if (queryResult.length > 0) {
          return queryResult[0]
        }
        else {
          resolve(null)
        }
      })
      .then((queryResult) => {
        if (queryResult.password === password) {
          resolve(queryResult)
        }
      })
      .catch((err) => reject(err))
  })
}

module.exports = {
  authenticate: authenticate
}
