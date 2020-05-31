// JavaScript source code

//game.js

//constructor
function Game(room) {
        this.room = room;
        this.start = false;
        this.time = 0;
}

Game.prototype.startGame = function () {
  
    if (this.start == false) {
        console.log("the room game has started"); 
        this.start = true;
        //this.Gameloop();
    }
    else (console.log("the room game has already started"));
}

Game.prototype.updateTime = function () {
    this.time = this.time + 1;
    //console.log("the time has been updated");
    //const msg = this.time;
    //socket.emit('update',{msg});   
}


module.exports = {
    Game: Game
};

