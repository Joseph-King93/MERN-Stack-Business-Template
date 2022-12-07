const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String }  
});

module.exports = itemSchema;