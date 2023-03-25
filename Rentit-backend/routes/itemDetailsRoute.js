const express = require('express');
const router = express.Router();
const {
  saveItem,
  getUserDetails,
} = require('../controllers/itemDetailController');

router.route('/:id').patch(saveItem).get(getUserDetails);

module.exports = router;
