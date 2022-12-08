// routes/api/categories.js
const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

router.get('/', categoriesCtrl.getAllCategories);
router.post('/new', categoriesCtrl.addCategory)
router.post('/update', categoriesCtrl.updateCategory)
router.post('/delete', categoriesCtrl.deleteCategory)
router.post('/:categoryType/new', categoriesCtrl.addItem)
router.post('/:categoryType/update', categoriesCtrl.updateItem)
router.post('/:categoryType/delete', categoriesCtrl.deleteItem)

module.exports = router;