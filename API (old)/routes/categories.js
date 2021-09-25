const express = require( 'express' )
const router = express.Router()
const controller = require( '../controllers/categories' )

router.get( '/', controller.getTest )
router.get( '/getAll', controller.getAllCategories )
router.post( '/addCategory', controller.addCategory )
router.get( '/getCategoryById/:Id', controller.getCategoryById )

module.exports = router