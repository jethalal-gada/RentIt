const Product = require('../models/productsModel');
// const Users = require('../models/usersModel');

exports.postItem = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
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

// exports.savePost = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const update = { savedProducts: id };
//     const filter = { email: req.body.user };
//     const user = await Users.findOneAndUpdate(
//       filter,
//       { $addToSet: update },
//       (err, sucess) => {
//         if (err) console.log(err);
//         else console.log(sucess);
//       }
//     );
//     res.status(201).json({
//       status: 'sucess',
//       data: {
//         savedItems: `Done ${id}`,
//         user: user,
//       },
//     });
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//     console.log(err);
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };
