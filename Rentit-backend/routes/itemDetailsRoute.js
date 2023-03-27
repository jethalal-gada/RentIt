const express = require('express');
const router = express.Router();
const { saveItem } = require('../controllers/itemDetailController');
const { getSavedProducts } = require('../controllers/getSavedProducts');

router.route('/:id').patch(saveItem).get(getSavedProducts);

module.exports = router;
