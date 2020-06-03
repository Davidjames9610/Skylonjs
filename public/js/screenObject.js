// JavaScript source code

// source code for handlin resize events and insureing that the aspect ratio is set correctly for whatever screen is being used.
/*
function gcd(a, b) {
    return (b == 0) ? a : gcd(b, a % b);

    //will return the lowest common denominator of the width = a and the height = b
}

export function setScreenSize() {
    // called at the begining to resize the container appropiatly

    console.log("function called");
}

function resize() {
    // called every time a resize event happens

}

function getScreenInformation(w,h) {



}
*/

function screenObject(w,h) {
    this.w = 1680;
    this.h = 1050;
    this.wc;
    this.hc;
    this.gcdvalue;

    //this.gcd;
    console.log("constructor called");
}

screenObject.prototype.gcd = function (a, b) {
    //working correctly
    return (b == 0) ? a : this.gcd(b, a % b);

};


screenObject.prototype.calculateConstants = function () {

    var gcdv = this.gcd(this.w, this.h);
    var aw = this.w / gcdv;
    var ah = this.h / gcdv;

    this.wc = this.w / 100 * 0.8;
    this.hc = (this.wc / aw) * ah;

    this.wc = Math.round(this.wc * 100) / 100;
    this.hc = Math.round(this.hc * 100) / 100;

    console.log(JSON.stringify(this.wc));
    console.log(JSON.stringify(this.hc));

}


export default screenObject;



