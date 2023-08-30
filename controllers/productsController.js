const productsModel = require('../models/Products')

const createProduct = (req, res) => {
  productsModel.createProduct(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}
const findAllProducts = (req, res) => {
  productsModel.findAllProducts()
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findOneProduct = (req, res) => {
  productsModel.findOneProduct(req.params.productId)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}
const updateProduct = (req, res) => {
  productsModel.updateProduct(req.params.productId, req.body)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const destroyOneProduct = (req, res) => {
  productsModel.destroyOneProduct(req.params.productId)
    .then(row => res.status(204).send(row))
    .catch(err => res.status(400).send(err.message))
}

const softDeleteOneProduct = (req, res) => {
  productsModel.softDeleteOneProduct(req.params.productId)
    .then(row => res.status(204).send(row))
    .catch(err => res.status(400).send(err.message))
}

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  destroyOneProduct,
  softDeleteOneProduct
}
