const express = require('express');
const router = express.Router();
const {
  getItemDetails,
  getItems,
  deleteItem,
} = require('../controllers/itemsPageContoller');

router.route('/').get(getItems);
router.route('/:id').get(getItemDetails).delete(deleteItem);

module.exports = router;
