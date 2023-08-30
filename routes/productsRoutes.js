const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/products', productsController.findAllProducts)
router.get('/products/:productId', productsController.findOneProduct)
router.post('/products', productsController.createProduct)

module.exports = router
