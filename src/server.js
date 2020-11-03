const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();
const server = require('http').createServer(app)
//const io = require('socket.io')(server);

app.use(express.json());
app.use(routes);
app.use(cors());

server.listen(3333);
