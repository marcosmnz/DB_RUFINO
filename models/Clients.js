const knex = require('../config')

const createClient = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('clients')
    .returning('*')
}

const findAllClients = () => {
  return knex
    .select('*')
    .from('clients')
    .where({ active: true })
}
const findOneClient = (clientId) => {
  return knex
    .select('*')
    .from('clients')
    .where({ client_id: clientId })
    .where({ active: true })
}

const updateClient = (clientId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('clients')
    .where({ active: true })
    .where({ client_id: clientId })
    .returning('*')
}

const destroyOneClient = (clientId) => {
  return knex
    .delete()
    .from('clients')
    .where({ active: true })
    .where({ client_id: clientId })
}

const softDeleteOneClient = (clientId) => {
  return knex
    .update({ active: false })
    .from('clients')
    .where({ client_id: clientId })
}

module.exports = {
  createClient,
  findAllClients,
  findOneClient,
  updateClient,
  destroyOneClient,
  softDeleteOneClient
}
