const errorHandler = require( '../utils/errorHandler' )
const Items = require( '../models/Items' )

module.exports.getAllItems = async ( req, res ) => {
  try {
    const items = await Items.find()
    setTimeout( () => {
      return res.status( 200 ).json( items )
    }, 2000 )
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
  try {
    const itemsAllFromDB = await Items.find( {
      "sku": sku
    } )
    if ( itemsAllFromDB.length > 0 ) {
      return res.status( 200 ).json( {
        message: `such SKU already exist in DB, attention wasn't rewrited, please apply UPDATE method !`,
        item: itemsAllFromDB
      } )

    } else {
      const newItem = new Items( {
        name,
        imageSrc: imageSrc.split( ',' ).map( el => el = el.trim() ),
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
      await newItem.save()
      return res.status( 200 ).json( {
        message: 'Successfuly saved to BD',
        item: newItem
      } )
    }
  } catch ( error ) {
    errorHandler( res, error )
  }
}

module.exports.getItem = async function ( req, res ) {
  // id is inside req.params.id
  const item = await Items.findById( req.params.id )
  return res.status( 200 ).json( item )
}
