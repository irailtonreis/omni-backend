const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://omniback:omniback@cluster0-nbbby.mongodb.net/omniback?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);