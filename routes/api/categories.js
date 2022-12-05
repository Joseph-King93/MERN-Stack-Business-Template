// routes/api/categories.js
const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

router.get('/', categoriesCtrl.getAllCategories);
router.post('/new', categoriesCtrl.addCategory)

module.exports = router;