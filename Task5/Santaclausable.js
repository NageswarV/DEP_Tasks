/*
 http://www.codewars.com/kata/santaclausable-interface
*/

function isSantaClausable(obj) {
var isSanta;
if((typeof(obj.sayHoHoHo) === "function") && (typeof(obj.distributeGifts) === "function") && (typeof(obj.goDownTheChimney) === "function")){
  isSanta= true;
  } else {
  isSanta= false;
  }
  return isSanta;
  }