const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const sckt = require('socket.io');

require('./database');

const app = express();
const server = require('http').createServer(app)
const io = sckt(server);

app.options('*', cors()) 

app.use(express.json());
app.use(routes);
app.use(cors());

io.on('connection', socket => {
    console.log('nova conexão');

    socket.on ('client-server', function(NewData){
        console.log('tri polisky', NewData);
        socket.emit ('server-client', NewData);
    })
})

server.listen(3333, "0.0.0.0");
