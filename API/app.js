const express = require( 'express' );
const app = express();

let counter = 0;
// const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' )
// const passport = require( 'passport' )

const keys = require( './config/keys' );

const mongoDB = () => {
    console.log( "start to connect to MongoDB" );
    mongoose.connect(
            keys.mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            } )
        .then( () => console.log( "MONGODB connected" ) )
        .catch( ( err ) => console.log( "Error MONGODB +", err ) )
}

mongoDB()

app.get( '/', ( req, res, next ) => {
    console.log( "get /" + counter );
    res.status( 200 ).json( {
        message: `successful ${counter++}`
    } );
} )

//morgan - look at server logs more comfortable 
app.use( require( 'morgan' )( 'dev' ) )
app.use( require( 'cors' )() )
app.use( express.json() )

// app.use( passport.initialize() )
// require( './middleware/passport' )( passport )

// app.use( '/uploads', express.static( './uploads' ) )
// app.use( express.urlencoded( { extended: true } ) )


app.use( '/api/auth', require( './routes/auth' ) )
// app.use( '/api/analytics', require( './routes/analytics' ) )
app.use( '/api/categories', require( './routes/categories' ) )
// app.use( '/api/order', require( './routes/order' ) )
// app.use( '/api/position', require( './routes/position' ) )

// if ( process.env.NODE_ENV === 'production' )
// {
//     app.use( express.static( 'client/dist/client' ) )
//     app.get( '*', ( req, res ) =>
//     {
//         res.sendFile(
//             path.resolve(
//                 __dirname, 'client', 'dist', 'client', 'index.html'
//             )
//         )
//     } )
// }

module.exports = app