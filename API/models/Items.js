const mongoose = require( 'mongoose' )
const {
  myColors
} = require( '../utils/constants' )

const Schema = mongoose.Schema

const itemSchema = new Schema( {
  name: {
    type: String,
    required: true
  },
  imageSrc: [ {
    // here we provide PATH to the image stored LOCALLY on front-end server in assets dir (I suppose)
    type: String
  } ],
  price: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number
  },
  qty: {
    type: Number,
    default: 0,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  color: {
    type: String,
    enum: myColors,
    required: true
  },
  categoryName: [ {
    type: String,
    required: true
  } ],
  labels: [ {
    type: String,
    required: true
  } ],
  sku: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
} )

module.exports = mongoose.model( 'items', itemSchema )
