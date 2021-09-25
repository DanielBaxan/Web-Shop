const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const categorySchema = new Schema( {
    name: {
        type: 'string',
        required: true
    },
    imageSrc: {
        // here we provide PATH to the image stored LOCALLY on front-end server in assets dir (I suppose)
        type: 'string',
        default: ''
    }
} )

module.exports = mongoose.model( 'categories', categorySchema )