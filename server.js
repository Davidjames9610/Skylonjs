// this is the main file run by everything 
const path = require('path');
var express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set up the port location 

const PORT = 8080; //process.env.PORT;  // 8080; //process.env.PORT; 

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set the name of the bot
const botName = 'Skylon Bot';

//import functions to use later
const formatMessage = require('./utils/messages');
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./utils/users');

//run when client connects
io.on('connection', (sock) => {
    sock.on('joinRoom', ({ username, room }) => {
        const user = userJoin(sock.id, username, room);
        sock.join(user.room);           //we join the right room for the user

        //welcome current user
        sock.emit('message', formatMessage(botName, 'Welcome to Skylon!'));

        //broadcast whenever user connects
        sock.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        //send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });

    });

    //listen for chatMessage
    sock.on('chatMessage', msg => {
        const user = getCurrentUser(sock.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));

    });

    // Runs when client disconnects
    sock.on('disconnect', () => {
        const user = userLeave(sock.id);

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            );

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

server.listen(PORT, () => console.log(`Serving static from ${PORT}`));
