const express = require('express');
const router = express.Router();
const { postItem, updateItem } = require('../controllers/postPageController');

router.route('/').post(postItem);
router.route('/edit/:id').patch(updateItem);

module.exports = router;
