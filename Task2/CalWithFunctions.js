/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3



*/
function zero(operationFunction) {  if(!operationFunction) 
    return 0;
    else
    return operationFunction(0);
}
function one(operationFunction) {  if(!operationFunction) 
    return 1;
    else
    return operationFunction(1);
    }
function two(operationFunction) {  if(!operationFunction) 
    return 2;
    else
    return operationFunction(2);
    }
function three(operationFunction) {  if(!operationFunction) 
    return 3;
    else
    return operationFunction(3);
    }
function four(operationFunction) {  if(!operationFunction) 
    return 4;
    else
    return operationFunction(4);
    }
function five(operationFunction) {  if(!operationFunction) 
    return 5;
    else
    return operationFunction(5);
    }
function six(operationFunction) {  if(!operationFunction) 
    return 6;
    else
  return operationFunction(6);
    }
function seven(operationFunction) {  if(!operationFunction) 
    return 7;
    else
   return operationFunction(7);
    }
function eight(operationFunction) {  if(!operationFunction) 
    return 8;
    else
    return operationFunction(8);
    }
function nine(operationFunction) {  if(!operationFunction) 
    return 9;
    else
    return operationFunction(9);
    }

function plus(value2) {
return function (value1){
return value1+value2;
}
}
function minus(value2) {
return function (value1){
return value1-value2;
}}
function times(value2) {
return function (value1){
return value1*value2;
}}
function dividedBy(value2) {
return function (value1){
return Math.floor(value1/value2);
}}
