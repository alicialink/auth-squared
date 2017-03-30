let environment = process.env.NODE_ENV || 'development'
let knexConfig = require('./knexfile')[environment]
let knex = require('knex')(knexConfig)

module.exports = knex
