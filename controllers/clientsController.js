const clientsModel = require('../models/Clients')

const createClient = (req, res) => {
  clientsModel.createClient(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findAllClients = (req, res) => {
  clientsModel.findAllClients()
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findOneClient = (req, res) => {
  clientsModel.findOneClient(req.params.clientId)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const updateClient = (req, res) => {
  clientsModel.updateClient(req.params.clientId, req.body)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const destroyOneClient = (req, res) => {
  clientsModel.destroyOneClient(req.params.clientId)
    .then(() => res.status(204).send({ message: 'Eliminado con exito...' }))
    .catch(err => res.status(400).send(err.message))
}

const softDeleteOneClient = (req, res) => {
  clientsModel.softDeleteOneClient(req.params.clientId)
    .then(() => res.status(204).send())
    .catch(err => res.status(400).send(err.message))
}

module.exports = {
  createClient,
  findAllClients,
  findOneClient,
  updateClient,
  destroyOneClient,
  softDeleteOneClient
}
