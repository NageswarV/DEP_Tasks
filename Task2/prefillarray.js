/*Create the function prefill that returns an array of n elements that all have the same value v.
 See if you can do this without using a loop.
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/

function prefill(n, v) {
let arr=[];
if(! /^\d+$/.test(n+""))
 throw new TypeError(`${n} is invalid`);
while(n>0){
  arr.push(v);n--;
}
return arr;
}