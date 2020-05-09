"use strict";


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ( fuelLeft * mpg >= distanceToPump) {
        return true;
    } else {
        return false;
    }
}

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);