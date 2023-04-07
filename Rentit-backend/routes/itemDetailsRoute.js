const express = require('express');
const router = express.Router();
const { saveItem } = require('../controllers/itemDetailController');
const { getSavedProductsList } = require('../controllers/getSavedProducts');

router.route('/:id').patch(saveItem).get(getSavedProductsList);

module.exports = router;
