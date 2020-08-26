// this is the main file run by everything 
const path = require('path');
var express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);


const PORT = process.env.PORT; //8090;//process.env.PORT; 
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set the name of the bot
const botName = 'Skylon Bot';

//--------------------------------------------------------import functions to use later--------------------------------------------------------------------------
const formatMessage = require('./utils/messages');

const {
    addUsertoGames,
    removeUserfromGames,
    getGamefromGames,
    getUserfromGames,
    getGamesfromGames
} = require('./utils/games');


//-------------------------------------------------------------------------variables

// time variables
var tickLengthMs = 1000 / 20;               //20 frames per second

/* gameLoop related variables */
// timestamp of each loop
var previousTick = Date.now();
// number of times gameLoop gets called
var actualTicks = 0;
var secondCounter = 0;

//---------------------------------------------------------------------socket events --------------------------------------------------------------------------------------------


//run when client connects
io.on('connection', (sock) => {
    sock.on('joinRoom', ({ username, room }) => {

        const user = addUsertoGames(sock.id, username, room);

        //join the correct room 
        sock.join(user.room);

        //welcome current user
        sock.emit('message', formatMessage(botName, 'Welcome to Skylon!'));

        //broadcast whenever user connects
        sock.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        io.to(room).emit('roomUsers', {
            room: user.room,
            users: getGamefromGames(room).getGameUsers() 
        });
    });

    //listen for chatMessage
    sock.on('chatMessage', msg => {
        const user = getUserfromGames(sock.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });



    //listen for game start
    sock.on('startRequest', msg => {
        const user = getUserfromGames(sock.id);

        //use user x request to set game start to true
        getGamefromGames(user.room).startGame();

        //tell all users in the same room that the game is starting 
        io.to(user.room).emit('startRoomGame', msg);  
    });

    //debug time 
    sock.on('debug-time', () => {

        console.log("debug-time");

        // addd x time to all users in the room
        const user = getUserfromGames(sock.id);

        var jump = 10;

        getGamefromGames(user.room).setTime(jump);
        io.to(user.room).emit('time-jump', jump); 

    });

    //debug time 
    sock.on('time-end', () => {

        //log request 
        console.log("time-end");

        //pause game 
        const user = getUserfromGames(sock.id);
        getGamefromGames(user.room).pauseGame();        //set game start value to false

        //emit a pause game event to all of the other users inside the game...
        //this can be the same message used for when abort from eng is pressed?
        io.to(user.room).emit('end-event');

    });


        //debug time 
        sock.on('offset-update', offsetObject => {

            //log request 
            //console.log(offset.height); looks like this is working 

            //update game 
            
            //pause game 
            const user = getUserfromGames(sock.id);

            // is there any point in updating the actual game?
            //getGamefromGames(user.room).updateOffsets(offsetObject);    // not    
    
            //tell the other players (engineer) that there has been an update..
            io.to(user.room).emit('offset-emit', offsetObject);
    
        });

    // Runs when client disconnects
    sock.on('disconnect', () => {
       
        const user = removeUserfromGames(sock.id);


        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            );

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room, 
                users: getGamefromGames(user.room).getGameUsers() 
            });
        }
    });

    //gameLoop(sock);
    gameLoop();
});

server.listen(PORT, () => console.log(`Serving static from ${PORT}`));

//gameLoop();     //called once at the start 

var gameLoop = function () {
    var now = Date.now();

    actualTicks++;
    if (previousTick + tickLengthMs <= now) {
        var delta = (now - previousTick) / 1000;
        previousTick = now;

        update();

        //console.log('delta', delta, '(target: ' + tickLengthMs + ' ms)', 'node ticks', actualTicks);
        actualTicks = 0;
    }

    if (Date.now() - previousTick < tickLengthMs - 16) {
        setTimeout(gameLoop)
    } else {
        setImmediate(gameLoop)
    }
}

var update = function () {

    // treat this like a call back occuring every 20 frames per second, doesnt stop
    // first call update in all games...
    games = getGamesfromGames();

    if (games.length > 0) {

        //secondCounter = secondCounter + 1;
        //console.log(games.length);

        for (var i = 0; i < games.length; i++) {

            //check to see if game has started
            currentgame = games[i];

            if (currentgame.start == true) {
                io.to(currentgame.room).emit('update');            //20 frames per second...
                currentgame.count ++;

                if (currentgame.count > 10) {        //should be 20 for seconds
                    currentgame.incTime();
                    io.to(currentgame.room).emit('Timeupdate', currentgame.time);
                    currentgame.count = 0;
                }

            }

 
       }
    }
}




