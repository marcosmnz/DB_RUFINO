const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/products', productsController.findAllProducts)
router.get('/products/:productId', productsController.findOneProduct)
router.post('/products', productsController.createProduct)
router.patch('/products/:productId', productsController.updateProduct)
router.delete('/products/:productId', productsController.softDeleteOneProduct)
router.delete('/products/destroy/:productId', productsController.destroyOneProduct)
router.patch('/products/recovery/:productId', productsController.recoveryProduct)

module.exports = router
