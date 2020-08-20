
// JavaScript source code

import fuelObject from './fuelObject.js';
import graphObject from './graphObject.js';


//constructor 
function engineerObject(socket) {

    //this.socket = socket;

    //fuel burn rates
    this.fuelObject = new fuelObject();

    //graph object 
    this.graphObject = new graphObject();
}

engineerObject.prototype.load = function () {

    // load the fuel and graph objects 

    this.fuelObject.load();
    this.graphObject.load();

}


//update Engineer
engineerObject.prototype.update = function (time) {

    //called every second

    //update the smaller objects
    
    this.fuelObject.update(time);

    this.graphObject.update(time);


    //debug stuff 
    //$(".debug-velocity").html("The current velocity is: Mach " + Math.round((this.speedData[time] / 343) * 100) / 100);
    //$(".debug-altitude").html("The current altitude is: " + Math.round((this.heightData[time]) * 100) / 100 + "m");
    //$(".debug-mode").html("The current mode is: " + mode);

}


export default engineerObject;