"use strict  ";

// const a = [1, 2, 3];
// let b = [4, 5, 6];

// console.log(a);
// console.log(b);

// b = a;
// console.log(b);





var summation = function (num) {
    let suma = 0;
    for (let i=1; i<=num; i++) {
        suma += i;
    }
    return suma;
  }
console.log(summation(1), '->', 1 );
console.log(summation(2), '->', 3 );
console.log(summation(3), '->', 6 );
console.log(summation(4), '->', 10 );

   