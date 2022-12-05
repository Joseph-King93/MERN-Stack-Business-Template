// controllers/api/categories.js

const Category = require('../../models/category');
const User = require('../../models/user');

module.exports = {
    getAllCategories,
    addCategory
}

async function getAllCategories(req, res) {
    console.log("category controller started")
    const categories = await Category.find({})
    console.log(categories)
    res.json(categories)
}

async function addCategory(req, res) {
    const newCategory = await Category.create(req.body)
    console.log(newCategory)
    res.json(newCategory)
}
