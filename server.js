
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT;  // 8080; //process.env.PORT; 

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
const botName = 'ChatCord Bot';

//run when client connects
io.on('connection', (sock) => {

    sock.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

    sock.broadcast.emit('message', formatMessage(botName,'A user has joined the chat'));

    sock.on('disconnect', () => {
        io.emit('message', formatMessage(botname,'A user has left the chat'));
    });

    //listen for chatMessage
    sock.on('chatMessage', msg => {
        io.emit('message', formatMessage('USER', msg));
    });
});


server.listen(PORT, () => console.log(`Serving static from ${PORT}`));







/*
const clientPath = `${__dirname}/public`;
console.log(`Serving static from ${clientPath}`);



app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (sock) => {
	console.log('Someone connected');
	sock.emit('message', 'Hi, you are connected');

	sock.on('message', (text) => {
		io.emit('message', text);
	});
});

server.on('error', (err) => {
	console.error('Server error:', err);
});

server.listen(PORT, () => {
	console.log('RPS started on 8080');
});

*/