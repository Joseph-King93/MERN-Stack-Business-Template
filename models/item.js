// models/item.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const itemSchema = new Schema({
//     name: {type: String}
//     // category: {
//     //     type: Schema.Types.ObjectId, ref: 'Category'
//     // }
// })

// module.exports = mongoose.model('ItemModel', itemSchema);


// ITEM IS HERE
const mongoose = require('mongoose');

// Ensure that the Category model is loaded in Mongoose
require('./category');

// We want to re-use the itemSchema
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);