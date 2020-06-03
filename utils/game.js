

//game.js



module.exports = function (room) {
    //game variables
    this.room = room;
    this.users = [];

    //add user to game room 
    this.addUser = function (id, username, room) {
        const user = { id, username, room };
        this.users.push(user);
        return user;
    }

    //get user in game room with id
    this.getCurrentUser = function (id) {
        return this.users.find(user => user.id === id);
    }

    this.removeUserfromGame = function(id) {

        const index = this.users.findIndex(user => user.id === id);

        if (index !== -1) {
            this.users.splice(index, 1)[0];
        }
    }

    this.getUserslength = function () {

        var len = this.users.length;
        return len;
    }

    this.getGameUsers = function() {
        return this.users;
    }

    this.getUserfromGame = function(id){

        const index = this.users.findIndex(user => user.id === id);

        if (index !== -1) {
            return this.users[index];      // this game does contain users with the given id 
        } else {
            return false;               //this game does not contain users with the given id
        }
        
    }


    this.startGame = function () {


    }

}


