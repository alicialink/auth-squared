let tableName = 'users'

exports.up = function (knex, Promise) {
  return knex
    .schema
    .createTable(tableName, (tbl) => {
      tbl.increments()
      tbl
        .string('username')
        .notNullable()
      tbl
        .string('password', 256)
        .notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
