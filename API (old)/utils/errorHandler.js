module.exports = ( res, err ) => {
    console.log( "Error handler work  ", err );
    res.status( 500 ).json( {
        message: err.message ? err.message : error,
        success: false
    } )
}