// models/category.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String}
})

const categorySchema = new Schema({
    name: {type: String, required: true},
    items: [itemSchema]
})

module.exports = mongoose.model('Category', categorySchema);