const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/userPageController');

router.route('/').post(userLogin);

module.exports = router;
