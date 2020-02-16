const User = require('../models/User');

module.exports = {

  async index(req, res){
   
   

  },

  async show(){

  },

  async store(req, res){
    const { nome, email, avatar, descricao} = req.body;

    let user = await User.find({email});

    if(!user){
      user = await User.create({
        nome,
        email,
        avatar,
        descricao,
      });

    }

    return res.json(user);

  },

  async update(){

  },

  async delete(){

  }

}