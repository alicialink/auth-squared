let tableName = 'messages'

exports.up = function (knex, Promise) {
  return knex
    .schema
    .createTable(tableName, (tbl) => {
      tbl.increments()
      tbl
        .string('message', 512)
        .notNullable()
      tbl
        .integer('user_id')
        .references('id')
        .inTable('users')
        .notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
