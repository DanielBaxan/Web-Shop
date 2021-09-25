module.exports.login = function ( req, res ) {
    console.log( "path - http://localhost:5000/api/auth, controller/auth" );
    return res.status( 200 ).json( {
        login: false
    } )
}