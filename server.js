// this is the main file run by everything 
const path = require('path');
var express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);


const PORT = 8090;//process.env.PORT;  // 8080; //process.env.PORT; 
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set the name of the bot
const botName = 'Skylon Bot';

//--------------------------------------------------------import functions to use later--------------------------------------------------------------------------
const formatMessage = require('./utils/messages');

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./utils/users');

const {
    joinGame,
    startRoomGame,
    getGames
} = require('./utils/games');

let gamez = require('./utils/game');
let Game = gamez.Game;

//------------------------------------------------------------variables

// time variables
var tickLengthMs = 1000 / 20;               //20 frames per second

/* gameLoop related variables */
// timestamp of each loop
var previousTick = Date.now();
// number of times gameLoop gets called
var actualTicks = 0;
var secondCounter = 0;

//-----------------------------------------------------------socket events --------------------------------------------------------------------------------------------


//run when client connects
io.on('connection', (sock) => {
    sock.on('joinRoom', ({ username, room }) => {
        const user = userJoin(sock.id, username, room);
        sock.join(user.room);           //we join the right room for the user

        //Join user to room game or create room game
        joinGame(user);

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

    //listen for game start
    sock.on('startGame', msg => {
        const user = getCurrentUser(sock.id);
        io.to(user.room).emit('starting', msg);
        startRoomGame(user);

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

    gameLoop(sock);
});

server.listen(PORT, () => console.log(`Serving static from ${PORT}`));


var gameLoop = function (sock) {
    var now = Date.now();

    actualTicks++;
    if (previousTick + tickLengthMs <= now) {
        var delta = (now - previousTick) / 1000;
        previousTick = now;

        update(delta,sock);

        //console.log('delta', delta, '(target: ' + tickLengthMs + ' ms)', 'node ticks', actualTicks);
        actualTicks = 0;
    }

    if (Date.now() - previousTick < tickLengthMs - 16) {
        setTimeout(gameLoop)
    } else {
        setImmediate(gameLoop)
    }
}

var update = function (delta,sock) {
    // treat this like a call back occuring every 50 ms?

    games = getGames();

    if (games.length > 0) {
        secondCounter = secondCounter + 1;

        //console.log(games.length);
        for (var i = 0; i < games.length; i++) {

            if (secondCounter > 20) {
                secondCounter = 0;
                games[i].updateTime();
                io.to(games[i].room).emit('update', games[i]);
            }
        }
    }
}


/**
A function that wastes time, and occupies 100% CPU while doing so.
Suggested use: simulating that a complex calculation took time to complete.
*/
//var aVerySlowFunction = function (milliseconds) {
    // waste time
 //   var start = Date.now();
  //  while (Date.now() < start + milliseconds) { }
//}


