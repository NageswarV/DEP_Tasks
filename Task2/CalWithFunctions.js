/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3



*/
function zero(x) {
  if(!x)
    return 0;
    else
    return x(0);
}
function one(x) {  if(!x)
    return 1;
    else
    return x(1);
    }
function two(x) {  if(!x)
    return 2;
    else
    return x(2);
    }
function three(x) {  if(!x)
    return 3;
    else
    return x(3);
    }
function four(x) {  if(!x)
    return 4;
    else
    return x(4);
    }
function five(x) {  if(!x)
    return 5;
    else
    return x(5);
    }
function six(x) {  if(!x)
    return 6;
    else
  return x(6);
    }
function seven(x) {  if(!x)
    return 7;
    else
   return x(7);
    }
function eight(x) {  if(!x)
    return 8;
    else
    return x(8);
    }
function nine(x) {  if(!x)
    return 9;
    else
    return x(9);
    }

function plus(b) {
return function (a){
return a+b;
}
}
function minus(b) {
return function (a){
return a-b;
}}
function times(b) {
return function (a){
return a*b;
}}
function dividedBy(b) {
return function (a){
return Math.floor(a/b);
}}
