// models/category.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const categorySchema = new Schema({
//     name: {type: String},
//     items: [{
//         type: Schema.Types.ObjectId, ref: 'ItemModel'
//     }]
// })

// module.exports = mongoose.model('Category', categorySchema);


// Category is here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('Category', categorySchema);