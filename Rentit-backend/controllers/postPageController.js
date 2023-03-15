const Product = require('../models/productsModel');

exports.postItem = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        products: newProduct,
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
