let db = require('./knex')
let bcrypt = require('bcrypt')

let saltRounds = 10

function hashPassword(clearText) {
  return bcrypt.hashSync(clearText, saltRounds)
}

function authenticate(username, clearTextPassword) {
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
        let hashFromDB = queryResult.password
        bcrypt
          .compare(clearTextPassword, hashFromDB)
          .then((result) => {
            if (result) {
              resolve({id: queryResult.id, username: username})
            }
            else {
              resolve(null)
            }
          })
      })
      .catch((err) => reject(err))
  })
}

module.exports = {
  authenticate: authenticate,
  hashPassword: hashPassword
}
