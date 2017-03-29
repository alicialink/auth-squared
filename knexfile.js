require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.PG_DEV_DATABASE,
      user: process.env.PG_DEV_USERNAME,
      password: process.env.PG_DEV_PASSWORD,
      port: process.env.PG_DEV_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
