const User = require('../models/user.models');

exports.createUser = async (req, res) => {
//   try {
//     const { username, email, password, role } =
//       req.body;

//     const user = await User.create({
//       username,
//       email,
//       password,
//       role
//     });

//     res.status(201).json({ 
//       status: true,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 'fail',
//       message: 'La re cagaste masho 🌭 D:',
//     });
//   }
// };
const { usernamed, email, password, role } = req.body;

const user = await User.create({
  usernamed,
  email,
  password,
  role
})
res.status(201).json({
  status: "success",
  message: "Salió bien ._ ."
})
}

exports.findSingle = (req, res) => {
  res.status(200).json({
    ok: true,
  });
};

exports.findAllUsers = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: "avaliable"
    }
  })
  res.status(200).json({
    ok: true,
    message: "Vamos bue",
    users
  });
};

exports.uppdata = (req, res) => {
  res.status(200).json({
    ok: true,
  });
};

exports.delete = (req, res) => {
  res.status(200).json({
    ok: true,
  });
};
