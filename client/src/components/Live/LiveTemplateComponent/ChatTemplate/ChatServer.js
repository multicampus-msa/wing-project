var http = require('http'); 
var socketio = require('socket.io'); 
var express = require('express'); 
var app = express(); 


var server = http.createServer(app); 

server.listen(3001, () => {
    console.log('Server Running at http://127.0.0.1:3001'); 
})


var io = socketio.listen(server); 
io.sockets.on('connection', (socket) => {
    // message 

    socket.on('message', (data)=>{
        io.sockets.emit('message', data); 
        console.log(data); 
    }); 
})