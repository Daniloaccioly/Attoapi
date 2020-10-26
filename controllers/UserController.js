const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    console.log(users)
    return res.json(users);
  },

  async store(req, res) {
    const { name, machine } = req.body;

    const user = await User.create({ name, machine });

    return res.json(user);
  }
};