const User = require('../models/usersModel');
const Product = require('../models/productsModel');

exports.userLogin = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        users: newUser,
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

exports.getPostedProducts = async (req, res) => {
  try {
    const email = req.params.id;
    console.log(email);
    const posts = await Product.find({ email: email });
    console.log(posts);
    res.status(201).json({
      status: 'sucess',
      data: {
        posts: posts,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
