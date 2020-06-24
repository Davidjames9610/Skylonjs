// JavaScript source code

function screenObject(w,h) {
    this.w = w;
    this.h = h;
    this.wc;
    this.hc;
    this.gcdvalue;

    //this.gcd;
    //console.log("constructor called");
}

screenObject.prototype.gcd = function (a, b) {
    //working correctly
    return (b == 0) ? a : this.gcd(b, a % b);

};


screenObject.prototype.calculateConstants = function () {

    var gcdv = this.gcd(this.w, this.h);
    var aw = this.w / gcdv;
    var ah = this.h / gcdv;

    this.wc = (this.w / 100) * 0.81;
    this.hc = (this.wc / aw) * ah;

    this.wc = Math.round(this.wc * 100) / 100;
    this.hc = Math.round(this.hc * 100) / 100;

    console.log(JSON.stringify(this.wc));
    console.log(JSON.stringify(this.hc));

}


export default screenObject;



