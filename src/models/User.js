const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  avatar: String,
  descricao: String,
},
{
  timestamps: true,
}
);

module.exports = mongoose.model('User', UserSchema);