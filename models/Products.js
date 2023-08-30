const knex = require('../config')

const createProduct = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('products')
    .returning('*')
}

const findAllProducts = () => {
  return knex
    .select('*')
    .from('products')
    .where({ active: true })
}
const findOneProduct = (productId) => {
  return knex
    .select('*')
    .from('products')
    .where({ product_id: productId })
    .where({ active: true })
}

const updateProduct = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('products')
    .where({ active: true })
    .where({ product_id: productId })
    .returning('*')
}

const destroyOneProduct = (productId) => {
  return knex
    .delete()
    .from('products')
    .where({ active: true })
    .where({ product_id: productId })
}

const softDeleteOneProduct = (productId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where({ product_id: productId })
}
const recoveryProduct = (productId) => {
  return knex
    .update({ active: true })
    .from('products')
    .where({ product_id: productId })
    .where({ active: false })
    .returning('*')
}

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  destroyOneProduct,
  softDeleteOneProduct,
  recoveryProduct
}
