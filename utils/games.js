// JavaScript source code
const games = [];

let gamez = require('./game');
let Game = gamez.Game;

function joinGame(user) {

    // Will only create a new game object if no others have been created...

    const index = games.findIndex(game => game.room === user.room);

    if (index == -1) {
        newgame = new Game(user.room);
        games.push(newgame);
        console.log(games.length);
    } else {
        console.log("Game has been created already");
        console.log(JSON.stringify(user.room));
    }
}

function startRoomGame(user) {
    gameobj = games.find(game => game.room === user.room);
    //newgame = new Game(user.room);
    gameobj.startGame();
    //gameobj.start();

    //newgame = new game(user.room);
   // test();

}

function getGames() {
    return games;
}


module.exports = {
    joinGame,
    startRoomGame,
    getGames
};


