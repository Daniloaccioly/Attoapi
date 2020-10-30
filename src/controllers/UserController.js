const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    //res.json(users);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", 'GET,POST');
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(users));

    return res;
  },

  async store(req, res) {
    const { name, machine } = req.body;

    const user = await User.create({ name, machine });

    return res.json(user);
  }
};