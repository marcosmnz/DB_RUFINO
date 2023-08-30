const knex = require('../config')

const createSale = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('sales')
    .returning('*')
}

const findAllSales = () => {
  return knex
    .select('*')
    .from('sales')
    .where({ active: true })
}
const findOneSale = (saleId) => {
  return knex
    .select('*')
    .from('sales')
    .where({ sale_id: saleId })
    .where({ active: true })
}

const updateSale = (saleId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('sales')
    .where({ active: true })
    .where({ sale_id: saleId })
    .returning('*')
}

const destroyOneSale = (saleId) => {
  return knex
    .delete()
    .from('sales')
    .where({ active: true })
    .where({ sale_id: saleId })
}

const softDeleteOneSale = (saleId) => {
  return knex
    .update({ active: false })
    .from('sales')
    .where({ sale_id: saleId })
}
const recoverySale = (saleId) => {
  return knex
    .update({ active: true })
    .from('sales')
    .where({ sale_id: saleId })
    .where({ active: false })
    .returning('*')
}

module.exports = {
  createSale,
  findAllSales,
  findOneSale,
  updateSale,
  destroyOneSale,
  softDeleteOneSale,
  recoverySale
}
