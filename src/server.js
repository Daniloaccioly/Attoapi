const express = require('express');
const routes = require('./routes');
var cors = require('cors');

require('./database');

const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);

app.use(express.json());
app.use(routes);
app.use(cors());

/*app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Origin", 
      "http://localhost:3000"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });*/


server.listen(3333);
