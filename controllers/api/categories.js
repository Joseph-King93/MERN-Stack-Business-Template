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
    console.log("getAllCategory controller started")
    const categories = await Category.find({}).populate('items')
    console.log("this is all cats", categories)
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
    console.log("updateCat Controller started")
    console.log("this is req", req.body)

    console.log("this is req.pay", req.body.payload)
    const startValue = req.body.startValue.startValue
    console.log("this is startValue", startValue)
    const payload = req.body.payload
    console.log("this is payload", payload)
    const updateDBCatDone = await Category.updateOne({name: startValue}, payload, {new: true} )
    console.log("this is updateDone", updateDBCatDone)
    res.json(updateDBCatDone)
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
    console.log("addItem Controller started")
    console.log(req.body)
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
    console.log("updateItem Controller started")
    console.log("this is req", req.body)

    console.log("this is req.SV", req.body.startValue.startValue)

    console.log("this is req.pay", req.body.payload)

    const startValue = req.body.startValue.startValue
    const payload = req.body.payload
    console.log("this is SV", startValue)
    console.log("this is pay", payload)
    const updateDBItemDone = await Item.findOneAndUpdate({name: startValue}, payload)
    console.log(updateDBItemDone)
    console.log(req.body)
    console.log(startValue)
    console.log(payload)
    res.json(updateDBItemDone)
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
    res.json(deleteItemDone)
}
