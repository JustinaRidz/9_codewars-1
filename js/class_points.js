"use stict";
//    susumuoti klases balus
//    skaiciuoti vidurki klases
//    lyginimas klases ir mano balai
   
// classPoints [2, 3];
// yourPoints [5];

function betterThanAverage(classPoints, yourPoints) {
    let suma = 0;
    for ( let i=0; i<classPoints.length; i++){
        suma += classPoints[i];
     }
        let vidurkis = suma / classPoints.length;
        return  vidurkis < yourPoints === true;
 }
 console.log(betterThanAverage([2, 3], 5), '->', true);
 
  


// const nuo = 0;
// const iki = 3;
// let suma = 0;
// for  (let i=nuo; i<=iki; i++){
//     //console.log(i);
//     suma = suma + i;
// }
// console.log('Suma:', suma);





//   Test.describe("Example Tests", function() {
//     Test.it("betterThanAverage([2, 3], 5) should return True", function() {
//       Test.assertEquals(betterThanAverage([2, 3], 5), true);
//     });
    
//     Test.it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//       Test.assertEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//     });
    
//     Test.it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//       Test.assertEquals(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//     });
//   });