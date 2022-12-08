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

async function updateCategory(req, res) {
    const startValue = req.body.startValue.startValue
    const payload = req.body.payload
    const updateDBDone = await Category.findOneAndUpdate({name: startValue}, payload)
    console.log(updateDBDone)
    console.log("updateCategory started")
    console.log(req.body)
    console.log(startValue)
    console.log(payload)
    res.json(updateDBDone)
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


async function updateItem(req, res) {
    const startValue = req.body.startValue.startValue
    const payload = req.body.payload
    const updateDBDone = await Item.findOneAndUpdate({name: startValue}, payload)
    console.log(updateDBDone)
    console.log("updateItem started")
    console.log(req.body)
    console.log(startValue)
    console.log(payload)
    res.json(updateDBDone)
}

async function deleteItem(req, res) {
    console.log("deleteItem Controller started")
    console.log(req.body)
    console.log(req.body.name)

    const deleteItemDone = await Item.findOneAndDelete({name: req.body.name})
    // const foundCategory = await Category.findOne({name: req.params.categoryType})
    // // console.log("foundCategory item", foundCategory.items)
    // foundCategory.items.push(newItem)
    // foundCategory.save()
    // // console.log(testing)
    // // console.log(newItem)
    // // console.log("addItemWorks?")

}

async function deleteCategory(req, res) {
    console.log("deleteItem Controller started")
    console.log(req.body)
    console.log(req.body.name)
    const deleteCategoryDone = await Category.findOneAndDelete({name: req.body.name})
    console.log(deleteCategoryDone)
    res.json(deleteCategoryDone)
}