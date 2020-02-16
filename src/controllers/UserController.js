const User = require('../models/User');

module.exports = {

  async index(req, res){
    const { nome, email, avatar, descricao} = req.body;

    console.log(nome, email, avatar, descricao);

    const user = await User.create({
      nome,
      email,
      avatar,
      descricao,
    })

    return res.json(user);

  },

  async show(){

  },

  async store(){

  },

  async update(){

  },

  async delete(){

  }

}