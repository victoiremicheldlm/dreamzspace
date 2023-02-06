const bcrypt = require("bcrypt");
const { generateToken } = require("../helper/jwt");
const model = require("../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  // eslint-disable-next-line consistent-return
  model.user.findUser(req.body).then(([[user]]) => {
    if (user) {
      return res.status(403).json({ error: "email exist in db" });
    }
  });

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

const login = async (req, res) => {
  const { password } = req.body;

  model.user
    .findUser(req.body)
    .then(([[user]]) => {
      if (!user) {
        return res.status(403).json({ error: "user not found" });
      }
      const compare = bcrypt.compareSync(password, user.password);
      if (!compare) {
        return res.status(403).json({ error: "password incorrect" });
      }

      const token = generateToken({ id: user.id, email: user.email });

      return res.status(200).json({ token });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });

  return false;
};

module.exports = {
  register,
  login,
};
