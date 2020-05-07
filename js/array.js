"use strict";
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    console.log(arr1.length);
    for(let i=0; i<arr1.length; i++){
         sum = sum + arr1[i];
         console.log("ciklas: " + i + " : " + sum);
    }
    for (let i=0; i<arr2.length; i++){
        sum = sum + arr2[i];
    }
      return sum; 
}

    console.log("atsakymas: " + arrayPlusArray([1, 2, 3], [4, 5, 6]));
