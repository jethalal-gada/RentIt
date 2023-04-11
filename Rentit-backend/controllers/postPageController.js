const Product = require('../models/productsModel');
const User = require('../models/usersModel');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`,
});

exports.postItem = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (
      req.headers.access_token &&
      String(user.access_token) === String(req.headers.access_token)
    ) {
      const response = await cloudinary.uploader.upload(req.body.image, {
        folder: 'RentIt',
      });
      const image = { image: response.url, public_id: response.public_id };
      req.body.image = image;
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
