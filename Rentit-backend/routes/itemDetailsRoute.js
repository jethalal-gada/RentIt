const express = require('express');
const router = express.Router();
const {
  saveItem,
  upateItem,
  updateLikes,
} = require('../controllers/itemDetailController');
const { getSavedProductsList } = require('../controllers/getSavedProducts');

router.route('/:id').patch(saveItem).get(getSavedProductsList);
router.route('/:update/:id').patch(upateItem);
router.route('/like/:like/:id').patch(updateLikes);

module.exports = router;
