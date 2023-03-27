const express = require('express');
const router = express.Router();
const {
  userLogin,
  getPostedProducts,
} = require('../controllers/userPageController');
const { getSavedProducts } = require('../controllers/getSavedProducts');

router.route('/').post(userLogin);
router.route('/posts/:id').get(getPostedProducts);
router.route('/:id').get(getSavedProducts);

module.exports = router;
