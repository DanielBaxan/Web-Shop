const app = require( "./app" );
const port = 5000; // process.ENV.PORT ||

app.listen( port, () => {
    console.log( "Server started on port " + port );
} );