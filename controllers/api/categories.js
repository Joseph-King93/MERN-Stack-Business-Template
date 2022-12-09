// controllers/api/categories.js

const Item = require('../../models/item')
const Category = require('../../models/category');

module.exports = {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    addItem,
    updateItem,
    deleteItem
}

async function getAllCategories(req, res) {
    const categories = await Category.find({}).populate('items')
    res.json(categories)
}

async function addCategory(req, res) {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
}

async function updateCategory(req, res) {
    const startValue = req.body.startValue.startValue
    const payload = req.body.payload
    const updateDBCatDone = await Category.updateOne({name: startValue}, payload, {new: true} )
    res.json(updateDBCatDone)
}

async function deleteCategory(req, res) {
    const deleteCategoryDone = await Category.findOneAndDelete({name: req.body.name})
    res.json(deleteCategoryDone)
}

async function addItem(req, res) {
    const newItem = await Item.create(req.body)
    const foundCategory = await Category.findOne({name: req.params.categoryType})
    foundCategory.items.push(newItem)
    foundCategory.save()
    res.json(newItem)
}

async function updateItem(req, res) {
    const startValue = req.body.startValue.startValue
    const payload = req.body.payload
    const updateDBItemDone = await Item.findOneAndUpdate({name: startValue}, payload)
    res.json(updateDBItemDone)
}

async function deleteItem(req, res) {
    const deleteItemDone = await Item.findOneAndDelete({name: req.body.name})
    res.json(deleteItemDone)
}
