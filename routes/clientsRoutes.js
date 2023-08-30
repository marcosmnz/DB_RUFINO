const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clientsController')

router.get('/clients', clientsController.findAllClients)
router.get('/clients/:clientId', clientsController.findOneClient)
router.post('/clients', clientsController.createClient)
router.patch('/clients/:clientId', clientsController.updateClient)
router.delete('/clients/:clientId', clientsController.softDeleteOneClient)
router.delete('/clients/destroy/:clientId', clientsController.destroyOneClient)
router.patch('/clients/recovery/:clientId', clientsController.recoveryClient)

module.exports = router
