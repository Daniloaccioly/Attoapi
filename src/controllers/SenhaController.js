const Senha = require('../models/Senha');

module.exports = {
  async index(req, res) {
    const senhas = await Senha.findAll({
      limit: 1,
      order: [[ 'createdAt', 'DESC' ]]
    });

    res.header("Access-Control-Allow-Origin", "http://10.1.1.116:3000");
    res.header("Access-Control-Allow-Methods", 'GET,POST');
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(senhas));

    return res;
  },

  async store(req, res) {
    const { count, last } = req.body;

    const senha = await Senha.create({ count, last });

    res.header("Access-Control-Allow-Origin", "http://10.1.1.116:3000");
    res.header("Access-Control-Allow-Methods", 'GET,POST,OPTIONS');
    
    res.send(JSON.stringify(senha));
    
    return res;
  }
};