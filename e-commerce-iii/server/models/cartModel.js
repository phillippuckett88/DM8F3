/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

/** Schema Object*/
var cartSchema = Schema({
    quanity: { type: Number, min: 1, required: true },
    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
    ]
})

/** The model for the schema above*/
module.exports = cartSchema;