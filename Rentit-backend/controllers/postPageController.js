const Product = require('../models/productsModel');
const Users = require('../models/usersModel');

exports.postItem = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (String(user._id) === String(req.headers._id)) {
      const newProduct = await Product.create(req.body);
      res.status(201).json({
        status: 'sucess',
        data: {
          products: newProduct,
        },
      });
    } else {
      res.status(409).json({
        status: 'fail',
        message: 'Autherisation failed',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
