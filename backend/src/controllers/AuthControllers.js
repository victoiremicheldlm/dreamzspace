const bcrypt = require("bcrypt");
const model = require("../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);
  const user = {
    name,
    email,
    password: hash,
  };

  model.user
    .add(user)
    .then(([result]) => {
      if (result.affectedRows === 1) {
        return res.status(201).json({ success: "Utilisateur ajouté" });
      }
      return res.sendStatus(401);
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

module.exports = {
  register,
};
