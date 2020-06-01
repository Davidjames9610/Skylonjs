// JavaScript source code

// source code for handlin resize events and insureing that the aspect ratio is set correctly for whatever screen is being used.

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


