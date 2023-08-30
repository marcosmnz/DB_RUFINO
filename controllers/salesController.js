const salesModel = require('../models/Sales')

const createSale = (req, res) => {
  salesModel.createSale(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}
const findAllSales = (req, res) => {
  salesModel.findAllSales()
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findOneSale = (req, res) => {
  salesModel.findOneSale(req.params.saleId)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}
const updateSale = (req, res) => {
  salesModel.updateSale(req.params.saleId, req.body)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const destroyOneSale = (req, res) => {
  salesModel.destroyOneSale(req.params.saleId)
    .then(() => res.status(204).send())
    .catch(err => res.status(400).send(err.message))
}

const softDeleteOneSale = (req, res) => {
  salesModel.softDeleteOneSale(req.params.saleId)
    .then(() => res.status(204).send())
    .catch(err => res.status(400).send(err.message))
}

const recoverySale = (req, res) => {
  salesModel.recoverySale(req.params.saleId)
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send(err.message))
}

module.exports = {
  findOneSale,
  findAllSales,
  createSale,
  updateSale,
  destroyOneSale,
  softDeleteOneSale,
  recoverySale
}
