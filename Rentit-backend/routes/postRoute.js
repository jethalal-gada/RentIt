const express = require('express');
const router = express.Router();
const { postItem } = require('../controllers/postPageController');

router.route('/').post(postItem);

module.exports = router;
