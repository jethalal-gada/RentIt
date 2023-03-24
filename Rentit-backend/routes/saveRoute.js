const express = require('express');
const router = express.Router();
const { saveItem } = require('../controllers/itemDetailController');

router.route('/:id').patch(saveItem);

module.exports = router;
