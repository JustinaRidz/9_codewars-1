"use strict";
function positiveSum(arr) {
  let suma = 0;
  for ( let i=0; i<arr.length; i++){
      if (arr[i]>0){
          suma += arr[i]; 
      }
  }
  return suma;
}






console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);