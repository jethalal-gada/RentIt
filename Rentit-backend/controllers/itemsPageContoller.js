const fs = require('fs');
const Product = require('../models/productsModel');

const items = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/fakedata.json`)
);

exports.getItems = async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json({
      status: 'sucess',
      results: items.length,
      data: {
        items: items,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getItemDetails = async (req, res) => {
  try {
    const item = await Product.findById(req.params.id);
    if (req.params.id > items.length - 1)
      return res.status(404).json({
        status: 'fail',
        message: 'invalid ID',
      });
    res.status(200).json({
      status: 'sucess',
      data: {
        item: item,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
