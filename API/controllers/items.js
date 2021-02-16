const errorHandler = require( '../utils/errorHandler' )
const Items = require( '../models/Items' )

module.exports.getAllItems = async ( req, res ) => {
  try {
    const items = await Items.find()
    return res.status( 200 ).json( items )
  } catch ( error ) {
    errorHandler( res, error )
  }
}
module.exports.addItem = async ( req, res ) => {
  const {
    name,
    imageSrc,
    price,
    discountedPrice,
    qty,
    size,
    color,
    categoryName,
    labels,
    sku,
    description,
  } = req.body;

  const newItem = new Item( {
    name,
    imageSrc,
    price,
    discountedPrice,
    qty,
    size,
    color,
    categoryName: categoryName.split( ',' ).map( el => el = el.trim() ),
    labels: labels.split( ',' ).map( el => el = el.trim() ),
    sku,
    description
  } );

  try {
    await newItem.save()
    res.status( 200 ).json( {
      message: 'Successfuly saved to BD',
      item: newItem
    } )
  } catch ( error ) {
    errorHandler( res, error )
  }
}

module.exports.getItem = function ( req, res ) {
  // console.log( "path - http://localhost:5000/api/categories, controller/categoories" );
  return res.status( 200 ).json( {
    controller: 'TES GET API ITEM'
  } )
}
