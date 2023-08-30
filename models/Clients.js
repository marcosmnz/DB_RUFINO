const knex = require('../config')

const createClient = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('clients')
    .returning('*')
}

module.exports = {
  createClient
}
