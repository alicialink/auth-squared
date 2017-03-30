exports.seed = function (knex, Promise) {
  let tableName = 'users'

  let rows = [
    {username: 'cookie', password: 'monster'}
  ]

  return knex(tableName)
    .del()
    .then(() => knex(tableName).insert(rows))
}
