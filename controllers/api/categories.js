// controllers/api/categories.js

const Item = require('../../models/item')
const Category = require('../../models/category');



module.exports = {
    getAllCategories,
    addCategory,
    deleteCategory,
    addItem
}

async function getAllCategories(req, res) {
    console.log("category controller started")
    const categories = await Category.find({}).populate('items')
    console.log("this is here")

    console.log(categories)
    res.json(categories)
}

async function addCategory(req, res) {
    console.log("addCategory Controller started")
    console.log(req.body)
    const newCategory = await Category.create(req.body)
    console.log(newCategory)
    res.json(newCategory)
}

async function deleteCategory(req, res) {
    console.log("deleteCategory Controller started")
    console.log(req.body)
    console.log(req.body.name)
    const deleteCategoryDone = await Category.findOneAndDelete({name: req.body.name})
    console.log(deleteCategoryDone)
    res.json(deleteCategoryDone)
}

async function addItem(req, res) {
    // console.log("addItem Controller started")
    // console.log(req.body)
    const newItem = await Item.create(req.body)
    // console.log("this is newItem", newItem)
    // console.log(newItem._id)
    const foundCategory = await Category.findOne({name: req.params.categoryType})
    // console.log("foundCategory item", foundCategory.items)
    foundCategory.items.push(newItem)
    foundCategory.save()
    // console.log(testing)
    // console.log(newItem)
    // console.log("addItemWorks?")
    res.json(newItem)
}