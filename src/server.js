const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(
  process.env.MONGO_URL,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(process.env.PORT || 3333);