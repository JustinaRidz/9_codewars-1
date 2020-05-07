"use strict";

function correctPolishLetters (string){
    let a;
    let ats = '';
      for ( let i=0; i<string.length; i++){
          a = string[i];
        if ( a == 'ą' ){
          a = 'a';
        }
        if ( a == 'ć' ){
          a = 'c';
        }
        if ( a == 'ę' ){
          a = 'e';
        }
        if ( a == 'ł' ){
          a = 'l';
        }
        if ( a == 'ń' ){
          a = 'n';
        }
        if ( a == 'ó' ){
          a = 'o';
        }
        if ( a == 'ś' ){
          a = 's';
        }
        if ( a == 'ź' ){
          a = 'z';
        }
        if ( a == 'ż' ){
          a = 'z';
        }
    //    console.log( a );
        
        ats = ats + a;
      }
      return ats;
    }




console.log(correctPolishLetters("Jędrzej Błądziński"), '->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '->', "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '->', "Maria Sklodowska-Curie");