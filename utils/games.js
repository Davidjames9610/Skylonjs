// JavaScript source code

const games = [];

var game = require('./game.js');

function addUsertoGames(id, username, room) {

    //first create the game if a game does not exist in the room yet
    const index = games.findIndex(game => game.room === room);
    if (index == -1) {
        var newGame = new game(room); 
        games.push(newGame);
    }
    const msg2 = JSON.stringify(games.length);
    console.log(msg2);

    //A game within the correct room now definetly exists
    return getGamefromGames(room).addUser(id, username, room);       //should return the newly added user

}

function getGamefromGames(room) {
    return games.find(game => game.room === room);
}

function getGamesfromGames() {

    return games;

}

function removeUserfromGames(id) {

    // we first use the id to find the game with the user

    for (var i = 0; i < games.length; i++) {

        const user = games[i].getUserfromGame(id);

        if (user != false) {

            //we now have a handle on the user we want to remove, we get the game the user is in
            const currentGame = getGamefromGames(user.room);

            // we remove the user from the correct game
            currentGame.removeUserfromGame(id);

            if (currentGame.getUserslength() < 1) {

                // remove game 
                const index = games.findIndex(game => game.room === user.room);
                if (index !== -1) {
                    games.splice(index, 1)[0];
                }

                console.log("removed a game");
                msg2 = JSON.stringify(games.length);
                console.log(msg2);

                return false;            //return false if the game has been removed
            }

            return user;        // return user to send message to the other if game room is still running

        }
    }

}

function getUserfromGames(id) {

    for (var i = 0; i < games.length; i++) {

        const user = games[i].getUserfromGame(id);

        if (user != false) {
            return user;
        }
    }

}



module.exports = {
    addUsertoGames,
    removeUserfromGames,
    getGamefromGames,
    getUserfromGames,
    getGamesfromGames
};

