// JavaScript source code


function fuelObject() {


    //starting weights
    this.w1 = (98000 * (2 / 3)) - 3360;
    this.w2 = 182000 / 2;
    this.w3 = 182000 / 2;
    this.w4 = (98000 * (1 / 3)) - 1680;

    //capacity
    this.w1c = 98000 * (2 / 3);
    this.w2c = 182000 / 2;
    this.w3c = 182000 / 2;
    this.w4c = 98000 * (1 / 3);

    //fuel tanks status 
    this.LH2fwd_status = 1;        //lh1
    this.LH2aft_status = 1;        //lh2
    this.LOXfwd_status = 0;        //lo1
    this.LOXaft_status = 0;        //lo2

    //fuel burn rates
    this.lh2mode1 = 84;
    this.lh2mode2 = 150;
    this.loxmode2 = 632;

    //fuel mode: 1 for lh2, 2 for lox 
    this.mode = 1;

    //Cofg update 
    this.currentCofg = 52;
    this.desiredCofg = 52;

    this.goingup = true;

}

// the fuel tanks are turned on and off when the user clicks the required button

fuelObject.prototype.ToggleLH2fwd = function (boolean) {

    if (boolean == true) {
        //switch tank on
        $(".LH2fwd-button").css("display", "none");
        $(".LH2fwd-buttonON").css("display", "block");
        this.LH2fwd_status = 1;
        console.log("the lh2 fwd tank was turned on");      //working!
    }

    if (boolean == false) {
        //switch tank on
        $(".LH2fwd-button").css("display", "block");
        $(".LH2fwd-buttonON").css("display", "none");
        this.LH2fwd_status = 0;
    }

}
fuelObject.prototype.ToggleLH2aft = function (boolean) {

    if (boolean == true) {
        //switch tank on
        $(".LH2aft-button").css("display", "none");
        $(".LH2aft-buttonON").css("display", "block");
        this.LH2aft_status = 1;
    }

    if (boolean == false) {
        //switch tank on
        $(".LH2aft-button").css("display", "block");
        $(".LH2aft-buttonON").css("display", "none");
        this.LH2aft_status = 0;
    }

}
fuelObject.prototype.ToggleLOXfwd = function (boolean) {

    if (boolean == true) {
        //switch tank on
        $(".LOXfwd-button").css("display", "none");
        $(".LOXfwd-buttonON").css("display", "block");
        this.LOXfwd_status = 1;
    }

    if (boolean == false) {
        //switch tank on
        $(".LOXfwd-button").css("display", "block");
        $(".LOXfwd-buttonON").css("display", "none");
        this.LOXfwd_status = 0;
    }

}
fuelObject.prototype.ToggleLOXaft = function (boolean) {

    if (boolean == true) {
        //switch tank on
        $(".LOXaft-button").css("display", "none");
        $(".LOXaft-buttonON").css("display", "block");
        this.LOXaft_status = 1;
    }

    if (boolean == false) {
        //switch tank on
        $(".LOXaft-button").css("display", "block");
        $(".LOXaft-buttonON").css("display", "none");
        this.LOXaft_status = 0;
    }
}

// update fuel tanks and cofg display
fuelObject.prototype.update = function (currentSpeed, mode) {

    this.autopilot();

    //use the fuel tanks status to burn fuel and update the cofg
    this.update_variables(mode);

    //use the weights of the fuel tanks and the cofg to update the display
    this.update_display(currentSpeed);
}

fuelObject.prototype.update_variables = function (mode) {

    //update the current cofg position
    //update the amount of fuel in the tanks
    //use the status of the fuel tanks

    var hydrogenF_rate;
    var hydrogenA_rate;
    var oxygenF_rate;
    var oxygenA_rate;
    var cofg_change;

    var hydrogenfuel;
    var oxygenfuel;

    if (mode == 1) {
        //cofgposition
        hydrogenF_rate = 55 / 1000;
        hydrogenA_rate = - 140 / 1000;
        oxygenF_rate = 0;
        oxygenA_rate = 0;

        //fuel tanks amount
        hydrogenfuel = this.lh2mode1;
        oxygenfuel = 0;

    } else {
        //cofgposition 
        hydrogenF_rate = 60 / 1000;
        hydrogenA_rate = - 140 / 1000;
        oxygenF_rate = 200/1000;
        oxygenA_rate = -110/1000;

        //fuel tanks amount
        hydrogenfuel = this.lh2mode2;
        oxygenfuel = this.loxmode2;
    }

    cofg_change = (hydrogenF_rate * this.LH2fwd_status) + (hydrogenA_rate * this.LH2aft_status) + (oxygenF_rate * this.LOXfwd_status) + (oxygenA_rate * this.LOXaft_status);
    this.currentCofg += cofg_change;

    //check if either both LH2 or both LOX are on

    if ((this.LH2fwd_status == 1) && (this.LH2aft_status == 1)) {
        hydrogenfuel = hydrogenfuel / 2;
    }

    if ((this.LOXfwd_status == 1) && (this.LOXaft_status == 1)) {
        oxygenfuel = oxygenfuel / 2;
    }


    //update the fuel tank amounts
    if (this.LH2fwd_status == 1) {
        this.w1 += -hydrogenfuel;
    }
    if (this.LH2aft_status == 1) {
        this.w4 += -hydrogenfuel;
    }
    if (this.LOXfwd_status == 1) {
        this.w2 += -oxygenfuel;
    }
    if (this.LOXaft_status == 1) {
        this.w3 += -oxygenfuel;
    }

}

fuelObject.prototype.update_display = function (currentSpeed) {

    //update the amounts in the fuel tanks
    //update the position of the cofg marker
    this.updatecofg_display(currentSpeed);
    this.updateFueltanks_display();

}

fuelObject.prototype.updatecofg_display = function (Speed) {

    var cofgTop;
    var cofgMid;
    var cofgBot;
    var currentcofg
    var currentSpeed = Speed / 343;


    //top

    if (currentSpeed < 1.33) {

        cofgMid = (3.27831 * currentSpeed) + 50;
        cofgBot = cofgMid + 1.5; //(2.50172 * currentSpeed) + 48.8423;
        cofgTop = cofgMid - 1.5;//(3.216 * currentSpeed) + 51.02227351;

        $(".cofg-aim-top").css("top", translatecofg(cofgTop) + "%");
        $(".cofg-aim-bot").css("top", translatecofg(cofgBot) + "%");
        $(".cofg-aim-mid").css("top", translatecofg(cofgMid) + "%");

        $(".cofg-top-box").css("top", translatecofg(cofgTop) + "%");
        $(".cofg-top-box").css("height", (translatecofg(cofgMid) - translatecofg(cofgTop)) + "%");

        $(".cofg-bot-box").css("top", translatecofg(cofgMid) + "%");
        $(".cofg-bot-box").css("height", (translatecofg(cofgBot) - translatecofg(cofgMid)) + "%");


    } else if (currentSpeed < 5.39) {

        cofgMid = (0.41943 * currentSpeed) + 53.84;
        cofgBot = cofgMid + 1;
        cofgTop = cofgMid - 1;

        $(".cofg-aim-top").css("top", translatecofg(cofgTop) + "%");
        $(".cofg-aim-bot").css("top", translatecofg(cofgBot) + "%");
        $(".cofg-aim-mid").css("top", translatecofg(cofgMid) + "%");


        $(".cofg-top-box").css("top", translatecofg(cofgTop) + "%");
        $(".cofg-top-box").css("height", (translatecofg(cofgMid) - translatecofg(cofgTop)) + "%");

        $(".cofg-bot-box").css("top", translatecofg(cofgMid) + "%");
        $(".cofg-bot-box").css("height", (translatecofg(cofgBot) - translatecofg(cofgMid)) + "%");


    } else {

        //18.16
        if (this.goingup == true) {

            cofgMid = (0.14956 * currentSpeed) + 55.3;
            cofgBot = cofgMid + 1;
            cofgTop = cofgMid - 1;

            $(".cofg-aim-top").css("top", translatecofg(cofgTop) + "%");
            $(".cofg-aim-bot").css("top", translatecofg(cofgBot) + "%");
            $(".cofg-aim-mid").css("top", translatecofg(cofgMid) + "%");

            $(".cofg-top-box").css("top", translatecofg(cofgTop) + "%");
            $(".cofg-top-box").css("height", (translatecofg(cofgMid) - translatecofg(cofgTop)) + "%");
            $(".cofg-bot-box").css("top", translatecofg(cofgMid) + "%");
            $(".cofg-bot-box").css("height", (translatecofg(cofgBot) - translatecofg(cofgMid)) + "%");
        } else {
            cofgMid = (0.13827 * currentSpeed) + 55.4;
            cofgBot = cofgMid + 1;
            cofgTop = cofgMid - 1;

            $(".cofg-aim-top").css("top", translatecofg(cofgTop) + "%");
            $(".cofg-aim-bot").css("top", translatecofg(cofgBot) + "%");
            $(".cofg-aim-mid").css("top", translatecofg(cofgMid) + "%");

            $(".cofg-top-box").css("top", translatecofg(cofgTop) + "%");
            $(".cofg-top-box").css("height", (translatecofg(cofgMid) - translatecofg(cofgTop)) + "%");
            $(".cofg-bot-box").css("top", translatecofg(cofgMid) + "%");
            $(".cofg-bot-box").css("height", (translatecofg(cofgBot) - translatecofg(cofgMid)) + "%");
        }
    }


    //this is the NB
    this.desiredCofg = cofgMid;

    //var currentcofg = this.cofgposition; //Math.round(this.getcofg() * 100) / 100;
    //$(".debug-cofg").html("The current cofg is: " + currentcofg);
    //55 -> 50 %

    currentcofg = translatecofg(this.currentCofg);
    $(".cofg-middle").css("top", currentcofg + "%");
    $(".cofg-middle-white").css("top", (currentcofg - 0.5) + "%");

    $(".debug-cofg").html("current cofg: " + (Math.round(this.currentCofg * 100) / 100) + " aim: " + (Math.round(this.desiredCofg * 100) / 100) + " the dif is: " + (Math.round((this.currentCofg - this.desiredCofg) * 100) / 100) + "going up: " + this.goingup);

}
fuelObject.prototype.updateFueltanks_display = function () {

    var lh2fwd_percentage;
    var lh2aft_percentage;
    var loxfwd_percentage;
    var loxaft_percentage;

    lh2fwd_percentage = Math.round(this.w1 * 100 / this.w1c);
    lh2aft_percentage = Math.round(this.w4 * 100 / this.w4c);
    loxfwd_percentage = Math.round(this.w2 * 100 / this.w2c);
    loxaft_percentage = Math.round(this.w3 * 100 / this.w3c);

    $(".LOXaftlabel-content").html(loxaft_percentage + "%");
    $(".LOXfwdlabel-content").html(loxfwd_percentage + "%");
    $(".LH2aftlabel-content").html(lh2aft_percentage + "%");
    $(".LH2fwdlabel-content").html(lh2fwd_percentage + "%");
}


function translatecofg(cofg) {
    return ((cofg - 50) / 10) * 100;
}


fuelObject.prototype.goDown = function () {

    this.goingup = false;

}


fuelObject.prototype.autopilot = function () {

    //inputs:

    var diff = this.desiredCofg - this.currentCofg;
    var window = 0;

    if (diff > window) {

        // switch fwd tanks on and aft tanks off
        this.ToggleLH2fwd(true);
        this.ToggleLH2aft(false);
        this.ToggleLOXfwd(true);
        this.ToggleLOXaft(false);

    }
    else if (diff < -window) {

        this.ToggleLH2fwd(false);
        this.ToggleLH2aft(true);
        this.ToggleLOXfwd(false);
        this.ToggleLOXaft(true);

    }
}





export default fuelObject;