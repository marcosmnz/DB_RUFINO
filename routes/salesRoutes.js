const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')

router.get('/sales', salesController.findAllSales)
router.get('/sales/:productId', salesController.findOneSale)
router.post('/sales', salesController.createSale)
router.patch('/sales/:saleId', salesController.updateSale)
router.delete('/sales/:saleId', salesController.softDeleteOneSale)
router.delete('/sales/destroy/:saleId', salesController.destroyOneSale)
router.patch('/sales/recovery/:saleId', salesController.recoverySale)

module.exports = router
