const Product = require('../models/productsModel');
const Users = require('../models/usersModel');

exports.saveItem = async (req, res) => {
  try {
    const id = req.params.id;
    const update = { savedProducts: id };
    const filter = { email: req.body.user };
    const user = await Users.findOne(filter);
    if (
      req.headers.access_token &&
      String(user.access_token) === String(req.headers.access_token)
    ) {
      const user = await Users.findOneAndUpdate(
        filter,
        { $addToSet: update },
        (err) => {
          if (err) console.log(err);
        }
      );
      res.status(201).json({
        status: 'sucess',
        data: {
          savedItems: `Done ${id}`,
          user: user,
        },
      });
    } else {
      res.status(403).json({
        status: 'fail',
        message: 'Authentication failed',
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
exports.upateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.params.update;
    const product = await Product.findOne({ _id: id });
    if (product.email === req.headers.email) {
      product.avaliable = update;
      await product.save();
      return res.status(200).json({
        status: 'sucess',
        data: {
          avaliable: product.avaliable,
        },
      });
    } else {
      res.status(403).json({
        status: 'fail',
        message: `Authentication failed`,
      });
    }
  } catch (error) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
