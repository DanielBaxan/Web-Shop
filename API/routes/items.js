const express = require( 'express' )
const router = express.Router()
const controller = require( '../controllers/items' )

router.get( '/getItem/:id', controller.getItem )
router.get( '/getAllItems', controller.getAllItems )
router.post( '/addItem', controller.addItem )

module.exports = router
