const User = require('../models/User');

module.exports = {

  async index(req, res){
   
  const users  =  await User.find();

  if(users.length == 0){
    return res.status(400).json({ message: "Não existe usuários"})
  }

  return res.status(200).json(users);
  
  },

  async show(req, res){

    const {id, nome, email, avatar, descricao} = await User.findOne({id: req.query.id});

    return res.status(200).json({id, nome, email, avatar, descricao});
  
  },

  async store(req, res){
   
    const userExists = await User.findOne({ email: req.body.email });

    if(userExists){
      return res.status(400).json({ error: 'Usuário já existe.'})
    }

  const { id, nome, email, avatar, descricao }  =  await User.create(req.body);

  return res.status(200).json({ id, nome, email, avatar, descricao});

  },

  async update(req, res){

    const { nome, email, avatar, descricao } = req.body;

    let user = await User.findOne({_id: req.params.id});
  
    if(!user){
      return res.status(400).json({ message: 'Usuário não encontrado'}) 
    }

    user.nome = nome;
    user.email = email;
    user.avatar = avatar;
    user.descricao = descricao;

    await user.save();
    
    return res.json(req.body);

  },

  async delete(req, res){

    const user =  await User.findOne({_id: req.params.id});

    if(user){
      await User.deleteOne({_id: req.params.id})
      return res.status(200).json({ message: 'Usuário deletado com sucesso!'});
    }

    return res.json({ errror: 'Usuário não encontrado!'});

  }

}