let usersModel = require('../users-model')

exports.seed = function (knex, Promise) {
  let tableName = 'users'

  let rows = [
    {username: 'cookie', password: usersModel.hashPassword('monster')}
  ]

  return knex(tableName)
    .del()
    .then(() => knex(tableName).insert(rows))
}
