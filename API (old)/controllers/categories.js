const errorHandler = require( '../utils/errorHandler' )
const Category = require( '../models/Categories' )

module.exports.getAllCategories = async ( req, res ) => {
    try {
        const categories = await Category.find()
        const resCat = []
        categories.forEach( cat => {
            resCat.push( {
                name: cat.name,
                imageSrc: cat.imageSrc
            } )
        } )

        return res.status( 200 ).json( resCat )
    } catch ( error ) {
        errorHandler( res, error )
    }
}
module.exports.addCategory = async ( req, res ) => {
    const {
        name,
        imageSrc
    } = req.body;

    const newCategory = new Category( {
        name,
        imageSrc,
    } );

    try {
        await newCategory.save()
        res.status( 200 ).json( {
            message: 'Successfuly saved to BD'
        } )
    } catch ( error ) {
        errorHandler( res, error )
    }
}

module.exports.getCategoryById = function ( req, res ) {
    try {

    } catch ( error ) {
        errorHandler( res, error )
    }
}

module.exports.getTest = function ( req, res ) {
    // console.log( "path - http://localhost:5000/api/categories, controller/categoories" );
    return res.status( 200 ).json( {
        controller: 'TES GET API categories'
    } )
}