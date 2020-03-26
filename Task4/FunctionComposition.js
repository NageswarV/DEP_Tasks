/*
We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface.
 We need to implement a method which checks for this interface.
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