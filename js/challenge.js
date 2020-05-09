"use strict";

function strCount(str, letter){
    let zodis = 0;  
    for( let i=0; i<str.length; i++){
        if (str[i] == letter){
            zodis++;
        }
    }
    return zodis;
  }


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);