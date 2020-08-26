
// JavaScript source code

import fuelObject from './fuelObject.js';
import graphObject from './graphObject.js';


//constructor 
class engineerObject {
    constructor() {
        
        //fuel object
        this.fuelObject = new fuelObject();

        //graph object 
        this.graphObject = new graphObject();

        //offset values shared with the pilot    
        this.heightOffset = 0;
        this.speedOffset = 0;

    }
    load() {
        // load the fuel and graph objects 

        this.fuelObject.load();
        this.graphObject.load();

    }
    //update Engineer
    update(time) {
        //called every second

        //update the smaller objects
        this.fuelObject.update(time);

        this.graphObject.update(time);

        //debug stuff 
        //$(".debug-velocity").html("The current velocity is: Mach " + Math.round((this.speedData[time] / 343) * 100) / 100);
        //$(".debug-altitude").html("The current altitude is: " + Math.round((this.heightData[time]) * 100) / 100 + "m");
        //$(".debug-mode").html("The current mode is: " + mode);
    }


    updateOffset(offsetObject){

     //this.heightOffset = offsetObject.height;
     //this.speedOffset = offsetObject.speed;   
    
     //this.fuelObject.updateOffset(offsetObject);
     this.graphObject.updateOffset(offsetObject);
    
    }
}





export default engineerObject;