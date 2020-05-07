"use strict";
function sc(floor){
    let garsas = '';
    if (floor<=1){
        return '';
    }
    for (let i=0; i<floor-1; i++){
      garsas = garsas + 'Aa~ ';
    }
    garsas = garsas + 'Pa!';
    if (floor<=6){
        return garsas + ' Aa!';
    }

    return garsas;
  }

  console.log(sc(2), '->', "Aa~ Pa! Aa!");  
console.log(sc(6), '->', "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"); 
console.log(sc(7), '->', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"); 
console.log(sc(10), '->', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"); 
console.log(sc(1), '->', ""); 
console.log(sc(-1), '->', ""); 
